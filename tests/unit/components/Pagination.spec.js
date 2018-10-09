import React from 'react';
import Pagination from '../../../app/components/Pagination';

describe('Pagination', () => {
  const props = {
    className: '__CLASSNAME__',
    total: 20,
    show: 2,
    onChange: jest.fn(),
    active: 5,
  };

  it('render with props', () => {
    const component = shallow(<Pagination {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('check pages generated if active page is in the middle (2 pages before, 2 after)', () => {
    const component = shallow(<Pagination {...props} />);
    const buttons = component.find('.pagination__number');
    expect(buttons).toHaveLength(7);
    expect(buttons.map(button => button.text())).toEqual(['«', '3', '4', '5', '6', '7', '»']);
  });

  it('check pages generated if active page is 1 (only 2 after active page)', () => {
    const newProps = Object.assign({}, props, { active: 1 });
    const component = shallow(<Pagination {...newProps} />);
    const buttons = component.find('.pagination__number');
    expect(buttons).toHaveLength(5);
    expect(buttons.map(button => button.text())).toEqual(['«', '1', '2', '3', '»']);
  });

  it('check pages generated if active page is the last (only 2 before)', () => {
    const lastPage = props.total / props.show; // 10
    const newProps = Object.assign({}, props, { active: lastPage });
    const component = shallow(<Pagination {...newProps} />);
    const buttons = component.find('.pagination__number');
    expect(buttons).toHaveLength(5);
    expect(buttons.map(button => button.text())).toEqual(['«', '8', '9', '10', '»']);
  });

  it('click on another page should call onChange with page number', () => {
    const component = shallow(<Pagination {...props} />);
    // Active page is 5, so next number is 6.
    const pageTwoNumber = component.find('.pagination__number--active + .pagination__number');
    pageTwoNumber.simulate('click');
    expect(props.onChange).toHaveBeenCalledWith(6);
  });
});
