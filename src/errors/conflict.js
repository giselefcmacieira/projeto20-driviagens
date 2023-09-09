export function conflictError(resource = "Conflito") {
    return {
        type: "conflict",
        message: `${resource}`
    }
}