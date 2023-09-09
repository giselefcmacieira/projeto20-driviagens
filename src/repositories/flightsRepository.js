import { db } from "../database/databaseConnection.js"

function insert(flight){
    //flight = { origin: 1, destination: 5, date: "24-12-2023"}
    const{origin, destination, date} = flight
    return db.query(
        `INSERT INTO "flights" ("origin", "destination", "date") VALUES ($1, $2, $3)`, 
        [origin, destination, date]
    )
}

async function getFlightById(flightId){
    //flightId = 1
    const flight = await db.query(
        `SELECT * FROM "flights" WHERE "id" = $1`, 
        [flightId]
    )
    return flight.rowCount
}

async function getFlights(flight){
    //flight = {origin, destination, bigger-date, smaller-date}
    //RESPOSTA = { id: 2, origin: "Salvador", destination: "Fortaleza", date: "27-07-2023"}
    const { origin, destination, 'bigger-date': biggerDate, 'smaller-date': smallerDate} = flight;
    let array = []
    let query = ''
    if(origin){
        array.push(origin)
        if(destination){
            query += 'WHERE origin.name = $1 AND destination.name = $2'
            array.push(destination)
        }else{
            query += 'WHERE origin.name = $1'
        }
    }else{
        if(destination){
            query += 'WHERE destination.name = $1'
            array.push(destination)
        }
    }
    if(biggerDate && smallerDate){
        array.push(smallerDate, biggerDate)
        if(origin && destination){
            query += ' AND flights.date BETWEEN $3 AND $4'
        }else if(origin || destination){
            query += ' AND flights.date BETWEEN $2 AND $3'
        }else if(!origin && !destination){
            query += 'WHERE flights.date BETWEEN $1 AND $2'
        }
    }
    const flights = await db.query(
        `SELECT flights.id, origin.name AS "origin", destination.name AS "destination", TO_CHAR(flights.date, 'DD-MM-YYYY') AS "date"
            FROM flights
            JOIN cities AS origin ON flights."origin" = origin.id
            JOIN cities AS destination ON flights."destination" = destination.id
            ${query}
            ORDER BY flights.date`,
            array
    )
    return flights.rows
}

export const flightsRepository = {insert, getFlightById, getFlights}