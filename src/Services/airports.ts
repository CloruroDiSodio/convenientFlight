import { getData } from "./index"
import Airport = Components.Schemas.Airport;

const AIRPORTS = "airports"

export const getAll = (): Promise<Airport[]> => getData(`${AIRPORTS}/all`)