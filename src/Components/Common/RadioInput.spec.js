import React from "react";
import RadioInput from "./RadioInput";
import {configure, shallow, mount } from "enzyme";
import RadioButton from "./RadioButton";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()})


describe("Radio input", () => {

    it("Renders children inputs", () => {
        const input = mount(
            <RadioInput name="test">
                <RadioButton value={1}/>
                <RadioButton value={2}/>
            </RadioInput>
        );
        expect(input.find('input[type="radio"]').length).toBe(2)
    })

    it('renders proper button as selected when default value is set', () => {
        const input = mount(
            <RadioInput name="test" default={2}>
                <RadioButton value={1}/>
                <RadioButton value={2}/>
            </RadioInput>
        );

        expect(input.find('#test1').props().checked).toBe(false)
        expect(input.find('#test2').props().checked).toBe(true)
    })

    it('renders with null value when no default prop', () => {
        const input = mount(
            <RadioInput name="test">
                <RadioButton value={1}/>
                <RadioButton value={2}/>
            </RadioInput>
        );

        expect(input.state('value')).toBe(null)
    })

    it('renders with default value if default prop is set', () => {
        const input = mount(
            <RadioInput name="test" default={2}>
                <RadioButton value={1}/>
                <RadioButton value={2}/>
            </RadioInput>
        );

        expect(input.state('value')).toBe(2)
    })

    it('changes value to clicked button\'s value', () => {
        const input = mount(
            <RadioInput name="test" default={2}>
                <RadioButton value={1}/>
                <RadioButton value={2}/>
            </RadioInput>
        );

        input.find("#test1").simulate('change')

        expect(input.state('value')).toBe(1)
    })

    it('executes callback when change', () => {
        const callback = jest.fn()
        const input = mount(
            <RadioInput name="test" onChange={callback}>
                <RadioButton value={1}/>
                <RadioButton value={2}/>
            </RadioInput>
        );

        input.find("#test1").simulate('change')

        expect(callback.mock.calls.length).toBe(1)
    })
})