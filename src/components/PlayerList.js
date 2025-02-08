import React, { useState } from "react"
import PlayerCard from "./PlayerCard"
import "../App.css"

function PlayerList({ players }) {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedTeam, setSelectedTeam] = useState("All")

    const filteredPlayers = players.filter((player) => {
        return (
            player.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
            (selectedTeam === "All" || player.team === selectedTeam)
        )
    })

    return(
        <div>
            <div className="search-filter-container">
                <input 
                    type="text"
                    placeholder="Search for a player..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
                <option value="All">All Teams</option>
                <option value="Forward">Forwards</option>
                <option value="Defenseman">Defensemen</option>
                <option value="Goalie">Goalies</option>
            </select>
            <div className="player-list">
                {filteredPlayers.map((player) => (
                    <PlayerCard key={player.id} player={player} />
                ))}
            </div>
        </div>
    )
}

export default PlayerList