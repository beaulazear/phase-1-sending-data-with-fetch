function submitData(name, email) {
    const configurationObject = {
        method: `POST`,
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
        })
    }
    return fetch(`http://localhost:3000/users`,configurationObject)
    .then(resp => resp.json())
    .then(data => document.body.append(data.id))
    .catch(error => document.body.append(error.message))
}
