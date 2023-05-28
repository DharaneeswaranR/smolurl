function generateRandomUrl(length) {
    let randomUrl = ''
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charsLength = chars.length

    for (let i = 0; i < length; i++) {
        randomUrl += chars.charAt(Math.floor(Math.random() * charsLength));
    }

    return randomUrl
}

export default generateRandomUrl