import React, { useEffect, useState } from "react"
import {
    Container,
    Card,
    Spinner
} from "react-bootstrap"
import { getFromTo } from "../Services/flights"
import Flight = Components.Schemas.Flight
import Airline = Components.Schemas.Airline
import FlightsTable from "../Components/FlightsTable"
import { getAll as getAllAirlines } from "../Services/airlines"
import { getAll as getAllAirports } from "../Services/airports"
import Airport = Components.Schemas.Airport
import AirportsForm from "../Components/AirportsForm"
import { ToastContainer, toast } from "react-toastify"

export interface FormData {
    from: string;
    to: string;
}

const App = () => {

    const [ data, setData ] = useState<Flight[] | never>([])
    const [ airlines, setAirlines ] = useState<Airline[] | never>([])
    const [ airports, setAirports ] = useState<Airport[] | never>([])
    const [ tableLoader, setTableLoader] = useState<boolean>(false)
    const [ formLoader, setFormLoader] = useState<boolean>(false)

    useEffect(() => {
        setFormLoader(true)
        getAllAirlines().then((response: Airline[]) => {
            setAirlines(response)
            setFormLoader(false)
        })
        getAllAirports().then((response: Airport[]) => {
            setAirports(response)
        })
    }, [])

    const onSubmit = (data: FormData) => {
        setTableLoader(true)
        if (data.from !== data.to) {
            getFromTo(data.from, data.to).then((response: Flight[]) => {
                response = response.sort((a: Flight, b: Flight) => a.price - b.price)
                setData(response)
                setTableLoader(false)
            })
        } else {
            setTableLoader(false)
            toast.error('Select different airports', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    }

    return (
        <Container fluid className="h-100 p-5 d-flex justify-content-center align-items-center">
            <ToastContainer/>
            <div>
                <h2 className="payoff mb-4">
                    <i className="fas fa-piggy-bank logo text-success" />
                    <br />
                    Find the perfect flight!
                </h2>
                <Card>
                    <Card.Body className="text-center">
                        {formLoader ? (
                            <Spinner animation="border" variant="primary" size="sm"/>
                        ) : (
                            <AirportsForm onSubmit={onSubmit} airports={airports} /> )}
                        {tableLoader ? (
                            <Spinner animation="border" variant="primary" className="mt-5" size="sm"/>
                            ) : data.length ? (
                                <FlightsTable data={data} airlines={airlines}/>
                                ) : <></> }
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default App