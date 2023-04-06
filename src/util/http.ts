import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACK_BASE_URL,
  timeout: 5000, // 5sec
})
// 추후 인터셉터 추가 예정.

export default instance
