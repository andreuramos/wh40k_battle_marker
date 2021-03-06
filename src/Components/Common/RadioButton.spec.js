import React from "react";
import {configure, shallow} from "enzyme";
import RadioButton from "./RadioButton";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()})

describe("RadioButton", () => {
    it("Renders name", () => {
        const radio = shallow(<RadioButton name="input_name"/>)

        expect(radio.find('input').prop('name')).toBe("input_name")
    })

    it("renders value", () => {
        const radio = shallow(<RadioButton value={1}/>)

        expect(radio.find('input').prop('value')).toBe(1)
    })

    it("generates id with name and value", () => {
        const radio = shallow(<RadioButton name="input_name" value={1}/>)

        expect(radio.find('input').prop('id')).toBe("input_name1")
    })

    it("executes callback when not selected and clicked", () => {
        const callback = jest.fn()
        const radio = shallow(<RadioButton name="input_name" value={1} onClick={callback}/>)

        radio.find('input').simulate('change')

        expect(callback.mock.calls.length).toBe(1)
    })

    it("renders unselected by default", () => {
        const radio = shallow(<RadioButton name="input_name" value={1}/>)

        expect(radio.props().checked).toBe(undefined)
    })

    it('renders as selected when selected prop is set to true', () => {
        const radio = shallow(<RadioButton name="input_name" value={1} checked={true}/>)

        expect(radio.find('input').props().checked).toBe(true)
    })

    it("does not execute callback when clicked and was already selected", () => {
        const callback = jest.fn()
        const radio = shallow(<RadioButton name="input_name" value={1} onClick={callback} checked={true}/>)

        radio.find('input').simulate('change')

        expect(callback.mock.calls.length).toBe(0)
    })
})