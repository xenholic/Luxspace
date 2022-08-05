export default function fetchData({ url, method = 'GET', host = process.env.REACT_APP_API_HOST }) {
    return fetch(`${host}${url}`, {
        method, mode: "cors",
        headers: {
            'content-type': 'application/json'
        },
    }).then(async (response) => {
        const jsonres = await response.json();
        if (response.ok) {
            return jsonres
        } else {
            throw new Error(JSON.stringify(jsonres));
        }
    })
}