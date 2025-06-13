import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

export const URL_LOGIN = '/login'
export const URL_REGISTER = '/register'
export const URL_LOGOUT = '/logout'

const authApi = {
  registerAccount: (body: { email: string; password: string }) => http.post<AuthResponse>('/register', body),
  loginAccount: (body: { email: string; password: string }) => http.post<AuthResponse>('/login', body),
  logout: () => http.post('/logout')
}

export default authApi
