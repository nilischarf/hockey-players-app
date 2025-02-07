import React from "react"

function PlayerCard({ player }){
    return (
        <div className="player-card">
            <h2>{player.name}</h2>
            <img src={player.image} alt={player.name} />
            <p>Number: {player.number}</p>
            <p>Position: {player.position}</p>
        </div>
    )
}

export default PlayerCard