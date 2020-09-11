import React from "react";
import Player from "./Player";
import CompletedMission from "./CompletedMission";

describe('Player', () => {
    it('sets the name when created', () => {
        const player = new Player("Andreu")
        expect(player.name()).toBe("Andreu")
    })

    it('increments score', () => {
        const player = new Player("Andreu")

        player.addScore(2);

        expect(player.score()).toBe(2);
    })

    it('adds points to score when adding a mission', () => {
        const player = new Player("Andreu");
        const mission = new CompletedMission("Domination", 3);

        player.addCompletedMission(mission)

        expect(player.score()).toBe(3)
        expect(player.completedMissions().length).toBe(1)
    })
})