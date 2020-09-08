import React from "react";
import { render, screen } from "@testing-library/react";
import BattleMarker from "./BattleMarker";
import Battle from "../Core/Domain/Battle";

describe('Battle Marker', () => {
    it('shows end battle button', () => {
        const battle = new Battle();

        render(<BattleMarker battle={new Battle()} />);
        const endButton = screen.getByText('End Battle');

        expect(endButton).toBeInTheDocument();
    });

    it('calls parent endbattle prop when battle is over', () => {

    });
})