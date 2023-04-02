import axios from 'axios'

export default function (url: string) {
  console.log(url)
  return axios.get(url).then((res) => {
    console.log(res)
  })
}
