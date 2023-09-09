export function internalServerError(resource = "Error"){
    return{
        type: "internalServer",
        message: `${resource}`
    }
}