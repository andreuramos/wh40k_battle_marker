import React from "react";
import { render, screen } from "@testing-library/react";
import BattleMarker from "./BattleMarker";
import Battle from "../../Core/Domain/Battle";
import Player from "../../Core/Domain/Player";

describe('Battle Marker', () => {
    it('shows end battle button', () => {
        const battle = new Battle(new Player("Andreu"), new Player("Pedro"));

        render(<BattleMarker battle={battle} />);
        const endButton = screen.getByText('End Battle');

        expect(endButton).toBeInTheDocument();
    });

    it('calls endbattle prop when battle is over', () => {

    });
})