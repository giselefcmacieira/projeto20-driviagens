import { db } from "../database/databaseConnection.js"

function insert(travel){
    //travel = {passengerId: 12, flightId: 8}
    const {passengerId, flightId} = travel
    return db.query(
        `INSERT INTO "travels" ("passengerId", "flightId") VALUES ($1, $2)`, 
        [passengerId, flightId]
    )
}

export const travelsRepository = { insert }