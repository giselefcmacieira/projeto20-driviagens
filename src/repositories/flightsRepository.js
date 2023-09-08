import { db } from "../database/databaseConnection.js"

function insert(flight){
    //flight = { origin: 1, destination: 5, date: "24-12-2023"}
    const{origin, destination, date} = flight
    return db.query(
        `INSERT INTO "flights" ("origin", "destination", "date") VALUES ($1, $2, $3)`, 
        [origin, destination, date]
    )
}

export const flightsRepository = {insert}