export const signIn = (usuario) => {
    return {
        type: 'SIGN_IN',
        payload: usuario
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}