export const getServices = () => {
    return fetch('http://localhost:8000/services', {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_user")).token}`}
        })
        .then(response => response.json())
}


export const getServiceById = (id) => {
    return fetch(`http://localhost:8000/services/${id}`, {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_user")).token}`
        }
    })
    .then(response => response.json())
}


export const deleteService = (id) => {
    return fetch(`http://localhost:8000/services/${id}`, {
        method: "DELETE",
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_user")).token}`
        }
    })
}

export const updateService = (service) => {
    return fetch(`http://localhost:8000/services/${service.id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_user")).token}`}
        ,
        body: JSON.stringify(service)
    })
}

export const createService = (service) => {
    return fetch("http://localhost:8000/services", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_user")).token}`
        },
        body: JSON.stringify(service)
    })
}