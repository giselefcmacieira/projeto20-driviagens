export function badRequestError(resource = "Erro"){
    return {
        type: "badRequest",
        message: `${resource}`
    }
}