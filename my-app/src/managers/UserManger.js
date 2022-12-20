export const getUsers = () => {
    return fetch(`http://localhost:8000/users`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_user")).token}`        }
    })
        .then(res => res.json())
}

export const getUserById = (userId) => {
    return fetch(`http://localhost:8000/users/${userId}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_user")).token}`        }
    })
        .then(res => res.json())
}

export const getCustomerUsers = () => {
    return fetch(`http://localhost:8000/metiercustomers`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_user")).token}`        }
    })
        .then(res => res.json())
}

export const getMetierCustomerById = (metierCustomerId) => {
    return fetch(`http://localhost:8000/metiercustomers/${metierCustomerId}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_user")).token}`        }
    })
        .then(res => res.json())
}

export const getCreatorUsers = () => {
    return fetch(`http://localhost:8000/metiercreators`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_user")).token}`        }
    })
        .then(res => res.json())
}

export const getMetierCreatorById = (creatorId) => {
    return fetch(`http://localhost:8000/metiercreators/${creatorId}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_user")).token}`        }
    })
        .then(res => res.json())
}