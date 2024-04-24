import { bugCat, images } from './resource'
// import { chatBot } from './nlp'
import { Client, Group, GroupMessage, ImageElem, MessageElem, PrivateMessage, Sendable, User } from '../lib'
import { countDays } from './util'
import { getBaiReply } from "./nlp";

export function handlePrivateMessage(msg: PrivateMessage, client: Client) {
   if (msg.sender.user_id !== 409174690 && !msg.raw_message.includes('@bot -')) return
   // @bot -g 748520034 -m foo bar
   let msgToSend = ''
   let target: Group | User | undefined = undefined
   const commands = msg.raw_message.replace('@bot -', '').split('-')
   for (const command of commands) {
      const content = command.slice(2)
      switch (command[0]) {
         case 'm':
            msgToSend = content
            break
         case 'g':
            target = client.pickGroup(Number(content))
            break
         case 'p':
            target = client.pickUser(Number(content))
      }
   }
   client.pickUser(409174690).sendMsg('' + msgToSend + ' ' + JSON.stringify(target))
   if (target && msgToSend) {
      target.sendMsg(msgToSend)
   }
}

export async function handleAtMe (e: GroupMessage, client: Client) {
   const msg = e.raw_message
   // let m: ImageElem | string = msg.replace('@UnrealDudu', '').replace('@PS UnrealDudu', '').replace('吗？', '').replace('吗', '').replace('？', '').replace('?', '').replace('你', '我').replace('@InvincibleDudu', '').replace('@PS InvincibleDudu🍭', '')
   let m: ImageElem | string = msg.replace(/@\S+/, '').replace('吗？', '').replace('吗', '').replace('？', '').replace('?', '').replace('你', '我')
   if (m.trim() === '') {
      if (e.sender.user_id === 409174690) {
         client.pickGroup(e.group_id).sendMsg(bugCat.love)
         return
      }
      // if (Math.random() > 0.5) client.pickGroup(e.group_id).sendMsg(images.catThreaten)
      // else client.pickGroup(e.group_id).sendMsg(images.fightMe)
      client.pickGroup(e.group_id).sendMsg([{ type: 'at', qq: e.sender.user_id }, images.fightMe])
      return
   }
   // chatBot(msg.replace(/@\S+/, '')).then((res) => {
   // m = msg.replace(/@\S+/, '').replace(/[?？]/g, '') + '！'
   const msgToSend = await getBaiReply(msg)
   if (msgToSend) client.pickGroup(e.group_id).sendMsg(msgToSend)
   // }).catch((e) => console.log('chatBot error 1', e))
}

export function handleAtInvdu (e: GroupMessage, client: Client) {
   const msg: Sendable = [{type: 'at', qq: e.sender.user_id}, images.noAtInvdu]
   if (Math.random() < 0.05) {
      for (let i = 0; i < 30; i++) msg.push({type: 'at', qq: e.sender.user_id})
   }
   client.pickGroup(e.group_id).sendMsg(msg)
}


export function hasMsgOtherThanAt(msg: MessageElem[]) {
   for (const item of msg) {
      if (item.type !== 'at') {
         if (item.type === 'text' && !item.text.trim()) continue
         return true
      }
   }
   return false
}

export function compareImage(img1: MessageElem, img2: MessageElem) {
   if (img1.type !== 'image' || img2.type !== 'image') return false
   return img1.file === img2.file
}

export function scheduleMsg(client: Client) {
   console.log('scheduleMsg running')
   let duckSent = false
   const schedule = require('node-schedule')
   const fpsquad = client.pickGroup(700673635)

   let time = 0
   let cd = 0
   setInterval(() => {
      time += 1
      cd += 1
      process.stdout.write(time + 's\r')
      if (time >= 2000 && !duckSent) {
         fpsquad.sendMsg(images.duck)
         duckSent = true
         time = 0
      }
   }, 1000)
   schedule.scheduleJob({ hour: 7, minute: 30, second: 5 }, function() {
      fpsquad.sendMsg('今天距fps小分队停更已过去' + countDays(new Date('02/28/2021')) + '天')
   })
   schedule.scheduleJob({ hour: 11, minute: 15, second: 5 }, function() {
      fpsquad.sendMsg(images.duck)
   })
   schedule.scheduleJob({ hour: 16, minute: 39, second: 5 }, function() {
      fpsquad.sendMsg(images.duck)
   })
   schedule.scheduleJob({ hour: 20, minute: 11, second: 5 }, function() {
      fpsquad.sendMsg(images.duck)
   })
   schedule.scheduleJob({ hour: 0, minute: 31 }, function() {
      fpsquad.sendMsg(images.duck)
   })
}
