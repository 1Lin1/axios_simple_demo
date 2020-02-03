import {request} from "./request";

// 获取用户
export function fetchUsers() {
  return request({
    url:'/users'
  })
}

// 编辑用户
export function updateCustomer(id,user) {
  return request({
    url:'/users/' + id,
    method:'patch',
    data:{
      name:user.name,
      phone:user.phone,
      email:user.email,
    }
    
  })
}

// 增加用户
export function addCustomer(newCustomer) {
  return request({
    url:'/users',
    method:'post',
    data:{
      name:newCustomer.name,
      phone:newCustomer.phone,
      email:newCustomer.email,
    }
  })
}

export function delCustomer(id) {
  return request({
    url:'/users/' + id,
    method:'delete'
  })
}