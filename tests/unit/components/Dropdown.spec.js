import React from 'react';
import Dropdown from '../../../app/components/Dropdown';

describe('Dropdown', () => {
  const props = {
    name: '__NAME__',
    title: '__TITLE__',
    className: '__CLASSNAME__',
    options: [
      { label: 'LABEL1', value: 'VALUE1' },
      { label: 'LABEL2', value: 'VALUE2', disabled: true },
      { label: 'LABEL3', value: 'VALUE3' },
    ],
    onChange: jest.fn(),
  };

  it('render with props', () => {
    const component = shallow(<Dropdown {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('render with selected value', () => {
    const component = shallow(<Dropdown {...props} value="VALUE3" />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('on change value should call onChange', () => {
    const component = shallow(<Dropdown {...props} />);
    component.find('select').simulate('change', { target: { value: 'VALUE1' } });
    expect(props.onChange).toHaveBeenCalledWith('VALUE1');
  });
});
