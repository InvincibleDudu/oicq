import { ImageElem } from '../lib'

export const AssertRecordType = <T>() => <D extends Record<string, T>>(d: D) => d

export const images = AssertRecordType<ImageElem>()({
   noAt: {
      type: 'image',
      file: '7387a0cf7ac175ad1b60fc1fe0200cdd131848-1600-1600.jpg',
      url: 'https://c2cpicdw.qpic.cn/offpic_new/409174690//409174690-2194736641-7387A0CF7AC175AD1B60FC1FE0200CDD/0?term=2',
   },
   noAtInvdu: {
      type: 'image',
      file: '28a322abc66456c6bc6437479ca663437528-200-200.png',
      url: 'https://c2cpicdw.qpic.cn/offpic_new/409174690//409174690-1841711683-A1F33E0AAEA14321C7730E9646FE1ED8/0?term=2',
   },
   noAtSheep: {
      type: 'image',
      file: '2ef031a67b5aa7b5c6fc06c452e40f2f38293-600-600.png',
      url: 'https://c2cpicdw.qpic.cn/offpic_new/409174690//409174690-2100346420-2EF031A67B5AA7B5C6FC06C452E40F2F/0?term=2',
   },
   warning: {
      type: 'image',
      file: '6156876f02c490b7c67f4c20505dc89381736-720-720.jpg',
      url: 'https://c2cpicdw.qpic.cn/offpic_new/409174690//409174690-1835409172-6156876F02C490B7C67F4C20505DC893/0?term=2',
   },
   duck: {
      type: 'image',
      file: 'd639d87ddb894defda8b03e82c16a2f82614119-230-230.gif',
      url: 'https://c2cpicdw.qpic.cn/offpic_new/409174690//409174690-640228012-D639D87DDB894DEFDA8B03E82C16A2F8/0?term=2',
   },
   clap: {
      type: 'image',
      file: '4a3a00bf8310fd614ad224d4ccd05bd2168981-200-200.gif',
      url: 'https://c2cpicdw.qpic.cn/offpic_new/409174690//409174690-456973224-4A3A00BF8310FD614AD224D4CCD05BD2/0?term=2',
   },
   noLook: {
      type: 'image',
      file: 'd8a2d5020cb868a9de2d316c9fd7d38813189-289-416.jpg',
      url: 'https://gchat.qpic.cn/gchatpic_new/409174690/2198557053-3130491870-D8A2D5020CB868A9DE2D316C9FD7D388/0?term=2',
   },
   dumb: {
      type: 'image',
      file: 'a3404e8cab8a1fe20c2af3a1bdf9fce4747-71-59.jpg',
      url: 'https://c2cpicdw.qpic.cn/offpic_new/409174690//409174690-3708393924-A3404E8CAB8A1FE20C2AF3A1BDF9FCE4/0?term=2',
   },
   nbcs: {
      type: 'image',
      file: '17ce38ff3525e6c70d6583a42ad34c34922300-480-255.gif',
   },
   fightMe: {
      type: 'image',
      file: '7ccdb9ae74ce101f1966aac149df3014108585-240-240.png',
   },
   catThreaten: {
      type: 'image',
      file: 'd6c83b7973ed9001aba6e67dd375d632186709-1080-1439.jpg'
   },
   hungry: {
      type: 'image',
      file: 'de5d3e21d71de2a63b526123c12b8e6316970-209-187.png',
   }
})

export const bugCat = AssertRecordType<ImageElem>()({
   appear: {
      type: 'image',
      file: 'ce7b1a859df9addec2b6036d6369eaec5494-276-186.jpg',
   },
   love : {
      type: 'image',
      file: '8e2aa5aaca83f0b4b4f617058202510c113145-368-298.gif',
   }
})
