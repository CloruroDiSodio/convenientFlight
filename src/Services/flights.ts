import { getData } from "./index"
import Flight = Components.Schemas.Flight;

const FLIGHTS = "flights"

export const getAll = (): Promise<Flight[]> => getData(`${FLIGHTS}/all`)
export const getFromTo = (departureCode: string, arrivalCode: string) =>
    getData(`${FLIGHTS}/from/${departureCode}/to/${arrivalCode}`)