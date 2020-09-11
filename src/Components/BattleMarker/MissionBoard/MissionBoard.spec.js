import React from "react";
import {render, screen} from "@testing-library/react";
import MissionBoard from "./MissionBoard";
import Player from "../../../Core/Domain/Player";

describe("Mission Board", () => {
    it('clicking mission board button makes complete mission form visible', () => {
        render(<MissionBoard player={new Player()} />);

        const addMissionButton = screen.getByText('Complete Mission')
        addMissionButton.click()
        const missionForm = screen.getByTestId(/mission-form/i)

        expect(missionForm).toBeVisible();
    })

    it('executes prop onMissionCompleted method when mission form is submitted', () => {

    })

    it('shows player\'s completed missions', () => {

    })
})