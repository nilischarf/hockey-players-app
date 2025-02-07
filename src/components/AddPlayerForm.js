import React, { useState } from "react"

function AddPlayerForm({ addPlayer }) {
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        position: "",
        image: "",
    })

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newPlayer = {
            name: formData.name,
            number: formData.number,
            position: formData.position,
            image: formData.image,
        }
        fetch("http://localhost:3000/players", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPlayer)
        })
            .then((response) => response.json())
            .then((data) => {
                addPlayer(data)
                setFormData({name: "", number: "", position: "", image: "",})
            })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
            <input type="number" name="number" placeholder="Number" value={formData.number} onChange={handleChange} />
            <input type="text" name="position" placeholder="Position" value={formData.position} onChange={handleChange} />
            <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
            <button type="submit">Add Player</button>
        </form>
    )
}

export default AddPlayerForm