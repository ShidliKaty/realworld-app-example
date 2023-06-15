export const useToken = (key: string) => {
    const local = localStorage.getItem(key)
        if(local != null){
            return JSON.parse(local)
        }
        return null
}

export const setToken = (token: string) => {
    localStorage.setItem('token', JSON.stringify(token))
}

export const removeToken = (key: string) => {
    return localStorage.removeItem(key)
}


