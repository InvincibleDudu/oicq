import key from '../key'
const tencentCloud = require('tencentcloud-sdk-nodejs')
const NlpClient = tencentCloud.nlp.v20190408.Client
const clientConfig = {
   credential: key,
   region: 'ap-guangzhou',
   profile: {
      httpProfile: {
         endpoint: 'nlp.tencentcloudapi.com'
      }
   }
}

// 实例化要请求产品的client对象,clientProfile是可选的
const client = new NlpClient(clientConfig)

export async function chatBot(msg: string, threshold = 0) {
   const params = { Query: msg }
   try {
      const res = await client.ChatBot(params)
      console.log('CB: ', msg, res.Reply, res.Confidence)
      return (res.Confidence >= threshold) ? (res.Reply ?? '') : ''
   } catch (e) {
      console.error('NLP Error: ', e)
      if (e instanceof Error) return e.message ?? ''
      return 'Error'
   }
}

const axios = require('axios')

export async function getBaiReply (message: string) {
   const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.theb.ai/v1/chat/completions',
      headers: {
         Authorization: 'Bearer ' + key.gpt,
         'Content-Type': 'application/json',
      },
      data: {
         model: 'gpt-3.5-turbo',
         messages: [{ role: 'user', content: message, },],
         stream: false,
      },
   }

   try {
      const res: { data: { choices: Array<{ message: { content: string, role: string } }> } } = await axios.request(config)
      console.log('GPT: ', message,  res.data.choices[0].message.content)
      return res.data.choices[0].message.content
   } catch (e) {
      console.log('fetchGPTReplyError', e)
      // @ts-expect-error
      return e.cause?.stack
   }
}