export function invalidBodyError(erros) {
    return {
        type: "invalidBody",
        message: erros
    }
}