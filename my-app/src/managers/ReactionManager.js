export const getReactions = () => {
    return fetch(`http://localhost:8000/reactions`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const getReactionById = (id) => {
    return fetch(`http://localhost:8000/reactions/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}
