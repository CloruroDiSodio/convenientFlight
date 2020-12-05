import React, { useEffect, useState } from "react"
import {
    Row,
    Col,
    Form,
    Button,
} from "react-bootstrap"
import AirportField from "../Components/AirportField"
import { useForm } from "react-hook-form"
import Airport = Components.Schemas.Airport;
import { FormData } from "../Views/App";
import {watchFile} from "fs";

interface AirportsFormProps {
    onSubmit: (data: FormData) => void;
    airports: Airport[];
}

const AirportsForm = (props: AirportsFormProps) => {

    const { onSubmit, airports } = props
    const { register, handleSubmit } = useForm()

    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
        >
            <Row className="justify-content-center align-items-center">
                <Col xs={6}>
                    <AirportField
                        title="From"
                        icon={<i className="fas fa-plane-departure mr-2" />}
                        register={register}
                        airports={airports}
                    />
                </Col>
                <Col xs={6}>
                    <AirportField
                        title="To"
                        icon={<i className="fas fa-plane-arrival mr-2" />}
                        register={register}
                        airports={airports}
                    />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Button variant="primary" type="submit" className="w-50">
                    Submit
                </Button>
            </Row>
        </Form>
    )
}

export default AirportsForm