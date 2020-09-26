import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import MissionSelector from "./MissionSelector";

configure({adapter: new Adapter()})

describe('Mission selector component', () => {
    it ('shows loading when while missions are loaded', () => {
        const component = mount(<MissionSelector />)

        expect(component.exists('.loading-icon')).toBe(true);
    })
})