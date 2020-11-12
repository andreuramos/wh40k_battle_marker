import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MissionForm from "./MissionForm";
import Objective from "../../../Core/Domain/Objective";

configure({adapter: new Adapter()});

describe('MissionForm', () => {

    const objectives = [
        new Objective("Domination", "domination", "something decribing", "main", "main"),
        new Objective("Rise the banner high", "risethebanner", "something decribing", "secondary", "main"),
    ]

    it('Shows objective description when selected to score', () => {
        const component = shallow(<MissionForm playerObjectives={objectives}/>)

        component.find('[name="objective"]').simulate('change', "risethebanner")

        expect(component.find('.objective-description').exists()).toBe(true);
    })

    it('Submits when form is valid', () => {
        const callback = jest.fn()
        const component = shallow(<MissionForm onSubmit={callback} playerObjectives={objectives}/>)

        component.find('[name="objective"]').simulate('change', "risethebanner")
        component.find('[name="missionPoints"]').simulate('change', {target: {name:'missionPoints', value:3}})
        component.find('#submit-mission-form').simulate('click')

        expect(callback.mock.calls.length).toBe(1)
    })

    it('Does not submit if there is no mission selected', () => {
        const callback = jest.fn()
        const component = shallow(<MissionForm onSubmit={callback} playerObjectives={objectives}/>)

        component.find('[name="missionPoints"]').simulate('change', {target: {name:'missionPoints', value:3}})
        component.find('#submit-mission-form').simulate('click')

        expect(callback.mock.calls.length).toBe(0)
    })

    it('Does not submit if mission points is less than 1', () => {
        const callback = jest.fn()
        const component = shallow(<MissionForm onSubmit={callback} playerObjectives={objectives}/>)

        component.find('[name="objective"]').simulate('change', {target: {value:"domination"}})
        component.find('[name="missionPoints"]').simulate('change', {target: {name:'missionPoints', value:0}})
        component.find('#submit-mission-form').simulate('click')

        expect(callback.mock.calls.length).toBe(0)
    })
})
