import React from "react";
import PlayerList from "../components/PlayerList"
import AddPlayerForm from "../components/AddPlayerForm"

function Players({ players, addPlayer }) {
    return (
        <div>
            <h1>Players</h1>
            <AddPlayerForm addPlayer={addPlayer} />
            <PlayerList players={players} />
        </div>
    )
}

export default Players