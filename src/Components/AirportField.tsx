import React, { ReactComponentElement} from "react"
import { Form } from 'react-bootstrap'
import Airport = Components.Schemas.Airport
const airportCodes = require('airport-codes')

interface AirportFieldProps {
    title: string;
    icon: ReactComponentElement<any>;
    register: any;
    airports: Airport[];
}

const AirportField = (props: AirportFieldProps) => {

    const { title, register, airports, icon } = props

    return (
        <Form.Group controlId={title}>
            <Form.Label>{icon}{title}</Form.Label>
            <Form.Control
                as="select"
                ref={register}
                name={title.toLowerCase()}
            >
                {airports.map((airport: Airport, index: number) => {
                    return (
                        <option
                            key={airport.codeIata + index}
                            value={airport.codeIata}
                        >
                            {airportCodes.findWhere({ iata: airport.codeIata }).get('name')} ({airport.codeIata})
                        </option>
                    )
                })}
            </Form.Control>
        </Form.Group>
    )
}

export default AirportField