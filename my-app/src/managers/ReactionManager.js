export const getReactions = () => {
    return fetch(`http://localhost:8000/reactions`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("metier_token")}`}
    })
        .then(response => response.json())
}

export const getReactionById = (id) => {
    return fetch(`http://localhost:8000/reactions/${id}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("metier_token")}`}
    })
        .then(response => response.json())
}


