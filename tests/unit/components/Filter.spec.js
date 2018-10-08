import React from 'react';
import Filter from '../../../app/components/Filter';

describe('Filter', () => {
  const props = {
    className: '__CLASSNAME__',
    sort: Filter.sort.ASC,
    onChange: jest.fn(),
    filter: '__QUERY__',
  };

  it('render with props', () => {
    const component = shallow(<Filter {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('click on randomize should sort random', () => {
    const component = shallow(<Filter {...props} />);
    component.find('.filter__button').simulate('click');
    expect(props.onChange).toHaveBeenCalledWith({ sort: 'random', filter: '__QUERY__' });
  });

  it('change filter value should call onChange', () => {
    const component = shallow(<Filter {...props} />);
    component.find('input').simulate('change', { target: { value: '_test1_' } });
    expect(props.onChange).toHaveBeenCalledWith({ sort: 'ascendant', filter: '_test1_' });
  });

  it('select dropdown options should call onChange', () => {
    const component = shallow(<Filter {...props} />);
    component.find('Dropdown').simulate('change', '_test2_');
    expect(props.onChange).toHaveBeenCalledWith({ sort: '_test2_', filter: '__QUERY__' });
  });
});
