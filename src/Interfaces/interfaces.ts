declare namespace Components {
    namespace Schemas {
        export interface Airline {
            id: number; // int64
            name: string; // format
            codeIataPrefix?: string; // ^\d{3}$
            logoFilename: string; // format
        }
        export interface AirlinesCollection {
            data?: any;
        }
        export interface Airport {
            id: number; // int64
            codeIata: string; // format
            latitude: string; // format
            longitude: string; // format
        }
        export interface AirportsCollection {
            data?: Airport[];
        }
        export interface Flight {
            id: number; // int64
            airlineId: number; // int64
            departureAirportId: number; // int64
            arrivalAirportId: number; // int64
            price: number; // float
        }
        export interface FlightsCollection {
            data?: Flight[];
        }
    }
}
declare namespace Paths {
    namespace GetAllAirlines {
        namespace Responses {
            export type $200 = Components.Schemas.AirlinesCollection;
        }
    }
    namespace GetAllAirports {
        namespace Responses {
            export type $200 = Components.Schemas.AirportsCollection;
        }
    }
    namespace GetAllFlights {
        namespace Responses {
            export type $200 = Components.Schemas.FlightsCollection;
        }
    }
    namespace GetFlightsFromTo {
        namespace Parameters {
            export type ArrivalCode = string; // \w{3}
            export type DepartureCode = string; // \w{3}
        }
        export interface PathParameters {
            departureCode: Parameters.DepartureCode /* \w{3} */;
            arrivalCode: Parameters.ArrivalCode /* \w{3} */;
        }
        namespace Responses {
            export type $200 = Components.Schemas.FlightsCollection;
            export interface $404 {
            }
        }
    }
}
