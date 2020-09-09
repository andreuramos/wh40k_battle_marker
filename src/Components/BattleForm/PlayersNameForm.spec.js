import React from "react";
import PlayersNameForm from "./PlayersNameForm";
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow, mount } from 'enzyme';
import "../Common/Form.css";

configure({adapter: new Adapter()})

describe("Players Name Form", () => {

    it('executes onsubmit prop when submit button is clicked', () => {
        const submitfn = jest.fn();

        const component = shallow((<PlayersNameForm onSubmit={submitfn}/>));
        component.find('[name="player1"]').simulate('change', {target: {value: "Andreu"}})
        component.find('[name="player2"]').simulate('change', {target: {value: "Andreu"}})
        component.find('#submit-player-form').simulate('click');
        expect(submitfn.mock.calls.length).toEqual(1);
    })

    it('does not execute onSubmit if validation fails', () => {

    })
})