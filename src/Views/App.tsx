import React, { useEffect, useState } from "react"
import {
    Container,
    Card,
} from "react-bootstrap"
import { getFromTo } from "../Services/flights"
import Flight = Components.Schemas.Flight
import Airline = Components.Schemas.Airline
import FlightsTable from "../Components/FlightsTable"
import { getAll as getAllAirlines } from "../Services/airlines"
import { getAll as getAllAirports } from "../Services/airports"
import Airport = Components.Schemas.Airport
import AirportsForm from "../Components/AirportsForm"

export interface FormData {
    from: string;
    to: string;
}

const App = () => {

    const [ data, setData ] = useState<Flight[] | never>([])
    const [ airlines, setAirlines ] = useState<Airline[] | never>([])
    const [ airports, setAirports ] = useState<Airport[] | never>([])

    useEffect(() => {
        getAllAirlines().then((response: Airline[]) => {
            setAirlines(response)
        })
        getAllAirports().then((response: Airport[]) => {
            setAirports(response)
        })
    }, [])

    const onSubmit = (data: FormData) => {
        getFromTo(data.from, data.to).then((response: Flight[]) => {
            setData(response)
        })
    }

    return (
        <Container fluid className="h-100 p-5 d-flex justify-content-center align-items-center">
            <div>
                <h2 className="payoff mb-4">
                    <i className="fas fa-piggy-bank logo text-info" />
                    <br />
                    Find the perfect flight!
                </h2>
                <Card>
                    <Card.Body>
                        <AirportsForm onSubmit={onSubmit} airports={airports} />
                        {data.length ? <FlightsTable data={data} airlines={airlines}/> : <></>}
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default App