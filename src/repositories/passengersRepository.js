import { db } from "../database/databaseConnection.js"


async function insert(passenger){
    //passenger = { firstName: "Joana", lastName: "Alves"}
    const {firstName, lastName} = passenger
    return db.query(
        `INSERT INTO "passengers" ("firstName", "lastName") VALUES($1, $2)`, 
        [firstName, lastName]
    )
}

async function getPassengerById(passengerId){
    //passengerId = 1
    const passenger = await db.query(
        `SELECT * FROM "passengers" WHERE "id" = $1`, 
        [passengerId]
    )
    return passenger.rowCount
}

export const passengersRepository = {insert, getPassengerById}