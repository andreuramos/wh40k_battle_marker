import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Button from "./Button";

configure({adapter: new Adapter()});

describe('Start Battle Button', () => {
    it ('triggers onclick prop when clicked', () => {
        const mockedCallback = jest.fn();

        const button = shallow((<Button onClick={mockedCallback} text="test"/>));
        button.simulate('click');
        expect(mockedCallback.mock.calls.length).toEqual(1);
    });
});