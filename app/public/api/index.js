import axios from 'axios'

export function fetch(url,params){
  return new Promise((resolve,reject)=>{
    axios.post(url,params)
      .then((res)=>{
        resolve(res.data)
      })
      .catch((err)=>{
        reject(err)
      })
  })
}

export default {
  // 获取博客标题
  getBlog(){
    return fetch('/getBlog')
  },
  getCalendar(){
    return fetch('/getCalendar')
  },
  getCommits(){
    return fetch('/getCommits')
  },
  getVisits(){
    return fetch('/getVisits')
  }
}
