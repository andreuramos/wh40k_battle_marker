import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MissionForm from "./MissionForm";

configure({adapter: new Adapter()});

describe('MissionForm', () => {
    it('Submits when form is valid', () => {
        const callback = jest.fn()
        const component = shallow(<MissionForm onSubmit={callback}/>)

        component.find('[name="missionName"]').simulate('change', {target: {name:'missionName', value:"Rise the banner high"}})
        component.find('[name="missionName"]').simulate('change', {target: {name:'missionPoints', value:3}})
        component.find('#submit-mission-form').simulate('click')

        expect(callback.mock.calls.length).toBe(1)
    })

    it('Does not submit if mission name is too short', () => {
        const callback = jest.fn()
        const component = shallow(<MissionForm onSubmit={callback}/>)

        component.find('[name="missionName"]').simulate('change', {target: {name:'missionName', value:"a"}})
        component.find('[name="missionName"]').simulate('change', {target: {name:'missionPoints', value:3}})
        component.find('#submit-mission-form').simulate('click')

        expect(callback.mock.calls.length).toBe(0)
    })

    it('Does not submit if mission points is less than 1', () => {
        const callback = jest.fn()
        const component = shallow(<MissionForm onSubmit={callback}/>)

        component.find('[name="missionName"]').simulate('change', {target: {name:'missionName', value:"First Strike"}})
        component.find('[name="missionName"]').simulate('change', {target: {name:'missionPoints', value:0}})
        component.find('#submit-mission-form').simulate('click')

        expect(callback.mock.calls.length).toBe(0)
    })
})