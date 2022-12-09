export const getServices = () => {
    return fetch('http://localhost:8000/services', {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("metier_token")}`}
    })
        .then(response => response.json())
}


export const getServiceById = (id) => {
    return fetch(`http://localhost:8000/services/${id}`, {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("metier_token")}`
        }
    })
    .then(response => response.json())
}


export const deleteService = (serviceId) => {
    return fetch(`http://localhost:8000/services/${serviceId}`, {
        method: "DELETE",
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("metier_token")}`
        }
    })
}

export const updateService = (service) => {
    return fetch(`http://localhost:8000/services/${service.id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("metier_token")}`
        },
        body: JSON.stringify(service)
    })
}

export const createService = (service) => {
    return fetch("http://localhost:8000/services", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("metier_token")}`
        },
        body: JSON.stringify(service)
    })
}