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

    const formatNumberEuro = (num: number | string) => {
        let stringNum = num.toString()
        stringNum = stringNum.replace('.', ',')
        let decimals = (stringNum.split(',').pop() || []).length
        if (decimals && decimals === 1) {
            stringNum = stringNum + '0'
        }
        return stringNum
    }

    return(
        <Table
            className="mt-5"
            size="sm"
            bordered
            hover
            responsive
        >
            <thead>
                <tr>
                    <th />
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
                        <tr key={flight.id + index} className={index === 0? 'bg-success text-white' : ''}>
                            <td className="text-center">
                                {index === 0 ? <i className="fas fa-trophy"/> : ''}
                            </td>
                            <td>{formatNumberEuro(flight.price)} &euro;</td>
                            <td>{(airlineObj || {}).name}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default FlightsTable