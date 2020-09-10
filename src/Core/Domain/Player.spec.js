import React from "react";
import Player from "./Player";

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
})