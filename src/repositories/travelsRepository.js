import { db } from "../database/databaseConnection.js"

function insert(travel){
    //travel = {passengerId: 12, flightId: 8}
    const {passengerId, flightId} = travel
    return db.query(
        `INSERT INTO "travels" ("passengerId", "flightId") VALUES ($1, $2)`, 
        [passengerId, flightId]
    )
}

async function read(passenger){
    //passenger = {name}
    const {name} = passenger
    //let query = name ? `WHERE passengers."firstName" ILIKE $1 OR passengers."lastName" ILIKE $1` : ''
    //let array = name ? [name] : ''
    const travels = await db.query(
        `SELECT CONCAT(passengers."firstName", ' ', passengers."lastName") AS passenger, COUNT(flights.id) AS travels
            FROM travels
            JOIN passengers ON travels."passengerId" = passengers.id
            JOIN flights ON travels."flightId" = flights.id
            ${name ? `WHERE passengers."firstName" ILIKE $1 OR passengers."lastName" ILIKE $1` : ''}
            GROUP BY passengers.id
            ORDER BY travels DESC, passengers.id`,
            name ? [name] : ''
    )
    return {
        qtd: travels.rowCount,
        inf: travels.rows
    }
}

export const travelsRepository = { insert, read }