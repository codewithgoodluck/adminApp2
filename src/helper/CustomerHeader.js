import { authService } from "../services/authService"

export const customHeaders={
    'Authorization': `Bearer ${authService.getToken()? authService.getToken() : ""}`,
    'Content-Type': 'application/json'
}
