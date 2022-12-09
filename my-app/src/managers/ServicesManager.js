export const getServices = () => {
    return fetch('http://localhost:8000/services', {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_token")).token}`        }
    })
        .then(response => response.json())
}


export const getServiceById = (id) => {
    return fetch(`http://localhost:8000/services/${id}`, {
        headers: {
             "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_token")).token}`        }
    })
        .then(response => response.json())
}


export const deleteService = (serviceId) => {
    return fetch(`http://localhost:8000/services/${serviceId}`, {
        method: "DELETE",
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_token")).token}`    })
}

export const saveEditedService = (service) => {
    return fetch(`http://localhost:8000/services/${service.id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_token")).token}`        },
        body: JSON.stringify(service)
    })
}