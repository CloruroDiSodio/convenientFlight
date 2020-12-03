import React from 'react'
import { Table } from 'react-bootstrap'
import Flight = Components.Schemas.Flight;
import Airline = Components.Schemas.Airline;

interface FlightsTableProps {
    data: Flight[];
    airlines: Airline[];
}

const FlightsTable = (props: FlightsTableProps) => {

    const { data, airlines } = props

    return(
        <Table
            className="mt-5"
            size="sm"
            striped
            bordered
            hover
            responsive
        >
            <thead>
                <tr>
                    <th>Price</th>
                    <th>Airline</th>
                </tr>
            </thead>
            <tbody>
                {data.map((flight: Flight, index: number) => {
                    const airlineObj = airlines.find((item: Airline) => {
                        return item.id === flight.airlineId
                    })
                    return (
                        <tr key={flight.id + index}>
                            <td>{flight.price} &euro;</td>
                            <td>{(airlineObj || {}).name}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default FlightsTable