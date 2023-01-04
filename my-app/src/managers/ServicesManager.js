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

export const getServicesForCreator = () => {
    return fetch("http://localhost:8000/services?myServices", {
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

export const addReaction = (serviceId, reactionId) => {
    return fetch(`http://localhost:8000/services/${serviceId}?reaction=${reactionId}`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_user")).token}`
        },
        body: JSON.stringify(serviceId, reactionId)
})
}

//http://localhost:8000/services/10?reaction=2
// export const joinEvent = eventId => {
//     return fetch(`http://localhost:8000/events${eventId}`, {
//       method: "POST",
//       headers: {
//           "Accept": "application/json",
//           "Content-Type": "application/json",
//           "Authorization": `Token ${localStorage.getItem("lu_token")}`
//       },
//       body: JSON.stringify(eventId)
//   })
// }