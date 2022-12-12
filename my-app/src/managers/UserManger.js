export const getUsers = () => {
    return fetch(`http://localhost:8000/users`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_user")).token}`}
    })
        .then(response => response.json())
}

export const getUserById = (userId) => {
    return fetch(`http://localhost:8000/users/${userId}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_user")).token}`}
    })
        .then(response => response.json())
}