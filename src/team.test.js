import React from 'react';
import Team from './team';

import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

let wrapper = null;
let basicStylingSpy = null;
let mockFunction = jest.fn();

beforeEach(() => {
    basicStylingSpy = jest.spyOn(Team.prototype, 'basicStyling');
    
    const props = {
        members: ['Joe Burton', 'Mark Ashton', 'Matthew Johnson', 'Andrew Bright', 'Greg Boyles', 'Jack Peacock', 'Jarad Yadallee', 'Ricky Dutton', 'Sam O\'Shea', 'Steven Hoel'],
        updateImage: mockFunction
    }

    wrapper = mount(<Team {...props} />);
});

afterEach(() => {
    basicStylingSpy.mockClear()
});

it('should be an instance of the Team component', () => {
    expect(wrapper.type()).toEqual(Team);
    expect(wrapper.find('.members').type()).toEqual('ul');
    expect(wrapper.find('ul').hasClass('members')).toBeTruthy();
});

it('should add some basic styling to the component', () => {
    expect(wrapper.find('ul').props().style).toEqual({
        "listStyle": "none", 
        "margin": "0 auto", 
        "textAlign": "left",
        "maxWidth": "600px"
    });
    expect(wrapper.find('ul').props().style.listStyle).toEqual('none');
});

it('should render a list of names', () => {
    expect(wrapper.find('li').length).toEqual(10);
});

it('should render a list of names in the given order', () => {
    expect(wrapper.find('li').at(3).text()).toEqual('Andrew Bright');
});

it('should call the #basicStyling method when the component mounts', () => {
    expect(basicStylingSpy).toHaveBeenCalledTimes(1);
});

it('should call #updateImage when a team members name is clicked', () => {
    expect(mockFunction.mock.calls.length).toEqual(0);
    wrapper.find('li').at(0).simulate('click');
    wrapper.find('li').at(0).simulate('click');
    expect(mockFunction.mock.calls.length).toEqual(2);
});