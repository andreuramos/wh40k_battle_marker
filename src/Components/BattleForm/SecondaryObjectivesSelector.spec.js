import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount} from 'enzyme';
import SecondaryObjectivesSelector from "./SecondaryObjectivesSelector";

configure({adapter: new Adapter()})

describe('secondary objectives selector component', () => {

    const OPTIONS = [
        {text: "Objective Name", value:"objective-key", optiongroup: "cat1", description:"Objective detailed description"}
    ]

    it('renders objectives in a select', () => {
        const component = mount(<SecondaryObjectivesSelector options={OPTIONS}/>)

        const select = component.find('[name="select-objective"]');
        const option = select.find('option').at(1)
        expect(option.prop('value')).toBe('objective-key')
    })

    it('submits selected objective', () => {
        const callback = jest.fn()
        const component = mount(<SecondaryObjectivesSelector options={OPTIONS} onSubmit={callback}/>)

        component.find('[name="select-objective"]').find('option').at(0).instance().selected = false
        component.find('[name="select-objective"]').find('option').at(1).instance().selected = true
        component.find('#submit-selected-objective').first().simulate('click')

        expect(callback.mock.calls.length).toBe(1)
    })

    it('shows selected objective description', () => {
        const component = mount(<SecondaryObjectivesSelector options={OPTIONS}/>)

        component.find('.form-select').simulate('change', {target: {value: OPTIONS[0].value}});

        const description = component.find('.description-block')
        expect(description.instance()).toBeVisible()
        expect(description.text()).toBe("Objective detailed description")
    })

    it('shows input when custom objective is selected', () => {
        let options = OPTIONS;
        options.push({text: "Custom Objective", value:'custom', optiongroup: null})
        const component = mount(<SecondaryObjectivesSelector options={options}/>)

        component.find('.form-select').simulate('change', {target: {value: 'custom'}});

        const name_input = component.find('.custom-objective-name')
        const desc_input = component.find('.custom-objective-description')
        expect(name_input.instance()).toBeVisible()
        expect(desc_input.instance()).toBeVisible()
    })
})
