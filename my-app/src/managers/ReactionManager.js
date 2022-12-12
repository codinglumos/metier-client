export const getReactions = () => {
    return fetch(`http://localhost:8000/reactions`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_user")).token}`}
    })
        .then(response => response.json())
}

export const getReactionById = (id) => {
    return fetch(`http://localhost:8000/reactions/${id}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_user")).token}`}
    })
        .then(response => response.json())
}


