import React from "react";
import PlayerBoard from "./PlayerBoard";
import Player from "../../Core/Domain/Player";
import { configure, shallow, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import CompletedMission from "../../Core/Domain/CompletedMission";

configure({adapter: new Adapter()})


describe("Player Board", () => {
    it('adds score to a player', () =>{
        const player = new Player("Andreu")
        const mission = new CompletedMission("Psychic Ritual", 15)
        const component = shallow(<PlayerBoard player={player} />)

        component.instance().onMissionCompleted(mission);
        const player_score = component.find('.player-board-score-trophy span').text()

        expect(player_score).toBe("15")
    })
})