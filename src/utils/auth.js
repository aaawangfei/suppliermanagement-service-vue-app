import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const RefreshKey="RefreshToken"

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getTokenRefresh() {
  return Cookies.get(RefreshKey)
}

export function setTokenRefresh(token) {
  return Cookies.set(RefreshKey, token)
}

export function removeTokenRefresh() {
  return Cookies.remove(RefreshKey)
}
