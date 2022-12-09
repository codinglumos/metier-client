export const getReactions = () => {
    return fetch(`http://localhost:8000/reactions`, {
        headers: {
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_token")).token}`        }
    })
        .then(response => response.json())
}

export const getReactionById = (id) => {
    return fetch(`http://localhost:8000/reactions/${id}`, {
        headers: {
            "Authorization": `Token ${JSON.parse(localStorage.getItem("metier_token")).token}`
        }
    })
        .then(response => response.json())
}


