export default function fetchData({
    url,
    method = 'GET',
    host = process.env.REACT_APP_API_HOST,
    body,
}) {
    return fetch(`${host}${url}`, {
        method, mode: "cors",
        headers: {
            'content-type': 'application/json'
        }, body,
    }).then(async (response) => {
        const statusHasResponse = [200, 404]
        const jsonres = statusHasResponse.includes(response.status) ? await response.json() : response
        if (response.ok) {
            return jsonres
        } else {
            throw new Error(JSON.stringify(jsonres));
        }
    })
}