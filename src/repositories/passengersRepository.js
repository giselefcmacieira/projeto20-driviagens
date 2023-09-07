import { db } from "../database/databaseConnection.js"


async function insert(passenger){
    //passenger = { firstName: "Joana", lastName: "Alves"}
    const {firstName, lastName} = passenger
    return db.query(
        `INSERT INTO "passengers" ("firstName", "lastName") VALUES($1, $2)`, 
        [firstName, lastName]
    )
}

export const passengersRepository = {insert}