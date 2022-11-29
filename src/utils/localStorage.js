export const addUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
}

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user')
}

export const getUserFromLocalStorage = ()=>{
    const result = localStorage.getItem('user');
    const user = result ? JSON.stringify(result) : null;
    return user
}
