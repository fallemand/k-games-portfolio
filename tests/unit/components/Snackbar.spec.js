import React from 'react';
import Snackbar from '../../../app/components/Snackbar';

describe('Button', () => {
  const props = {
    className: '__CLASSNAME__',
    message: '__MESSAGE__',
  };

  it('render with show:true', () => {
    const component = shallow(<Snackbar {...props} show />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('render with show:false', () => {
    const component = shallow(<Snackbar {...props} show={false} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });
});
