const API_ENDPOINT = {
    dev: 'http://localhost:9000',
    prod: 'unknown'
}


const lockedPagesForGuest = [
    '/message',
    '/inbox'
]
const lockedPagesForUser = [
    '/login',
    '/register'
]

function getApiEndpoint() {
    return API_ENDPOINT[ENVIRONMENT];
}

export { getApiEndpoint, lockedPagesForGuest, lockedPagesForUser };