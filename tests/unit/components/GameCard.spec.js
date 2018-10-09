import React from 'react';
import GameCard from '../../../app/components/GameCard';

describe('GameCard', () => {
  const props = {
    className: '__CLASSNAME__',
    game: {
      name: '__NAME__',
      short: '__ID__',
      images: {
        banner: '__BANNERURL__',
      },
    },
    onAction: jest.fn(),
    actions: ['play'],
  };

  it('render with props', () => {
    const component = shallow(<GameCard {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('should change buttons according to actions', () => {
    const component = shallow(<GameCard {...props} actions={['remove', 'play']} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
    component.setProps({ actions: ['add', 'play'] });
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('click on button should call onAction', () => {
    const component = shallow(<GameCard {...props} />);
    component.find('Button').simulate('click');
    expect(props.onAction).toHaveBeenCalledWith('play', '__ID__');
  });
});
