import axios from 'axios'

export default() => {
  return axios.create({
    //baseURL: `http://localhost:8081`
    baseURL: `http://ec2-18-222-153-215.us-east-2.compute.amazonaws.com:8081`
  })
}
