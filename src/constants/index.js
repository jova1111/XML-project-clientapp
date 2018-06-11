const API_ENDPOINT = {
    dev: 'http://localhost:9000',
    prod: 'unknown'
}

export function getApiEndpoint() {
    return API_ENDPOINT[ENVIRONMENT];
}