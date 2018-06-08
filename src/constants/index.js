const API_ENDPOINT = {
    dev: 'http://localhost:8080',
    prod: 'unknown'
}

export function getApiEndpoint() {
    return API_ENDPOINT[ENVIRONMENT];
}