const BASE_URL = "https://recruitment.shippypro.com/flight-engine/api/"
const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 1|MN9ruQV0MFEsgOzMo8crw8gB575rsTe2H5U1y2Lj',
    }

export const getData = (url: string) : Promise<any> =>
    fetch(BASE_URL + url, {method: 'GET', headers})
    .then(res => res.json())
    .then(result => result.data)

