import React from 'react';
import Button from '../../../app/components/Button';

describe('Button', () => {
  const props = {
    onClick: jest.fn(),
    color: Button.colors.GREEN,
    className: '__CLASSNAME__',
  };

  it('render with props', () => {
    const component = shallow(<Button {...props}>__TEST__</Button>);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('should call onClick when on Button click', () => {
    const component = shallow(<Button {...props}>__TEST__</Button>);
    component.find('.button').simulate('click');
    expect(props.onClick).toHaveBeenCalled();
  });
});
