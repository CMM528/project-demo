import request from '@/api/http';

export function login(data) {
  request({
    url: '/login',
    method: 'post',
    data
  })
}
