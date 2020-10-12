import {configure, shallow} from "enzyme";
import React from "react";
import Select from "./Select";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()})

describe('Select', () => {
    it('renders options', () => {
        let options = [];
        for (let i=0; i<10; i++) {
            options.push({value: i, text: i});
        }

        const select = shallow(<Select options={options} />)

        expect(select.find('option').length).toBe(10)
    })

    it('renders name attribute', () => {
        const select = shallow(<Select name="missions" options={[]}/>)

        const name = select.find('.form-select')
        expect(name.filterWhere(item => {
            return item.prop('name') === 'missions'
        }).length).toBe(1)
    })

    it('executes callback onchange', () => {
        const callback = jest.fn();
        const options = [{value:1, text: 1},{value:2, text:2}]

        const select = shallow((<Select onChange={callback} options={options}/> ))

        select.find('.form-select').simulate('change', {target: {value: options[1].value}});
        expect(callback.mock.calls.length).toEqual(1)
    })

    it('renders option groups if group prop is set to true', () => {
        const options = [
            {value:1, text:"1", optiongroup: "group1"},
            {value:2, text:"2", optiongroup: "group1"},
            {value:3, text:"3", optiongroup: "group2"},
        ]

        const select = shallow(<Select options={options} group={true}/>)

        expect(select.find('optgroup').length).toBe(2)
        const group1 = select.find('optgroup[label="group1"]')
        expect(group1.find('option').length).toBe(2)
    })
})