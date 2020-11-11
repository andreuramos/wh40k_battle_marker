import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import BattleForm from "./BattleForm";

configure({adapter: new Adapter()})

describe("Battle Form", () => {
    it ("stores player names when submitting first step", () => {
        const component = mount(<BattleForm />)

        component.find('[name="player1"]').simulate('change', {target: {value: "Andreu", name: "player1"}})
        component.find('[name="player2"]').simulate('change', {target: {value: "Ramos", name: "player2"}})
        component.find('#submit-player-form').first().simulate('click');

        expect(component.state('player1')).toBe("Andreu");
        expect(component.state('player2')).toBe("Ramos");
        expect(component.state('step')).toBe("mission")
    })

    it("goes back to players-name step when back button is pressed in mission step", () => {
        const component = mount(<BattleForm />)

        component.find('[name="player1"]').simulate('change', {target: {value: "Andreu", name: "player1"}})
        component.find('[name="player2"]').simulate('change', {target: {value: "Ramos", name: "player2"}})
        component.find('#submit-player-form').first().simulate('click');

        setTimeout(() => {
            component.find('#back-button').simulate('click')

            expect(component.state('step')).toBe("players-names")
        },1000)
    })
})
