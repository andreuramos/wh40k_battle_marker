import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import BattleMarker from "./BattleMarker";
import Battle from "../../Core/Domain/Battle";
import Player from "../../Core/Domain/Player";

describe('Battle Marker', () => {
    it('shows next turn button', () => {
        const battle = new Battle(new Player("Andreu"), new Player("Pedro"));

        render(<BattleMarker battle={battle} />);
        const endButton = screen.getByText('Next Turn');

        expect(endButton).toBeInTheDocument();
    });

    it('shows en battle button when is last turn', () => {
        const battle = new Battle(new Player("Toni"), new Player("Alfonso"));
        render(<BattleMarker battle={battle} />);

        for (var i = 0; i < 9; i++) {
            fireEvent.click(screen.getByText('Next Turn'));
        }

        const endButton = screen.getByText("End Battle");
        expect(endButton).toBeInTheDocument();
    });
})