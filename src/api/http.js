import axios from "axios"

const instance = axios.create({
  baseURL: "",
  timeout: 5000,
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
