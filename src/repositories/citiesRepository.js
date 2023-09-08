import { db } from "../database/databaseConnection.js"
import { conflictError } from "../errors/conflict.js"

function insert(city){
    //city = { name: "Salvador" }
    const {name} = city
    return db.query(
        `INSERT INTO "cities" ("name") VALUES($1)`, 
        [name]
    )
}

async function getCity(city){
    //city = { name: "Salvador" }
    const {name} = city
    const cityWithSameName = await db.query(
        `SELECT * FROM "cities" WHERE "name" = $1`, 
        [name]
    )
    return cityWithSameName.rows[0]
}

export const citiesRepository = {insert, getCity}