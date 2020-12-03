import { getData } from "./index"
import Airline = Components.Schemas.Airline;

const AIRLINES = "airlines"

export const getAll = (): Promise<Airline[]> => getData(`${AIRLINES}/all`)