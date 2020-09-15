import React from "react";
import Player from "./Player";
import CompletedMission from "./CompletedMission";

describe('Player', () => {
    let player;

    beforeEach(() => {
        player = new Player("Andreu")
    })

    it('sets the name when created', () => {
        expect(player.name()).toBe("Andreu")
    })

    it('increments score', () => {
        player.addScore(2);

        expect(player.score()).toBe(2);
    })

    it('adds points to score when adding a mission', () => {
        const mission = new CompletedMission("Domination", 3);

        player.addCompletedMission(mission)

        expect(player.score()).toBe(3)
        expect(player.completedMissions().length).toBe(1)
    })

    it('increases command points', () => {
        player.addCommandPoints(1)

        expect(player.commandPoints()).toBe(1)
    })

    it('decreases command points', () => {
        player.addCommandPoints(3)
        player.substractCommandPoints(1)

        expect(player.commandPoints()).toBe(2)
    })

    it('does not decrease command points below 0', () => {
        player.addCommandPoints(1)
        player.substractCommandPoints(2)

        expect(player.commandPoints()).toBe(1)
    })
})