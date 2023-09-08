import { db } from "../database/databaseConnection.js"

function insert(city){
    //city = { name: "Salvador" }
    const {name} = city
    return db.query(
        `INSERT INTO "cities" ("name") VALUES($1)`, 
        [name]
    )
}

async function getCityByName(city){
    //city = { name: "Salvador" }
    const {name} = city
    const cityWithSameName = await db.query(
        `SELECT * FROM "cities" WHERE "name" = $1`, 
        [name]
    )
    return cityWithSameName.rows[0]
}

async function getCityById(cityId){
    //cityId = 1
    const city = await db.query(
        `SELECT * FROM "cities" WHERE "id" = $1`, 
        [cityId]
    )
    return city.rowCount
}

export const citiesRepository = {insert, getCityByName, getCityById}