import myRequest from '../request'

export function getHomeData() {
  return myRequest.get({ 
    url: "/home" 
  })
}