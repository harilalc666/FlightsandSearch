const clientErrorsCodes = Object.freeze({
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    BAD_REQUEST: 400
})

const serverErrorsCodes = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    SERVICE_UNAVAILABLE: 503,
    NOT_IMPLEMENTED: 501
})

const successCodes = Object.freeze({
    OK: 200,
    CREATED: 201
})