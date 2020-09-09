import React from "react";
import ReactDOM from "react-dom";
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Modal from "./Modal";

configure({adapter: new Adapter()})

describe('Modal', () => {
   it('opens on show change', () => {
       const node = document.createElement('div');
       const component = ReactDOM.render('<Modal show={false} />', node);

       ReactDOM.render('<Modal show={true} />', node);
       expect(component).toBeVisible;
   });

   it('triggers close event', () => {
       const callback = jest.fn();

       const modal = shallow((<Modal show={true} onClose={callback} /> ))
       modal.find('.modal-close-button').simulate('click');
       expect(callback.mock.calls.length).toEqual(1)
   })
});