import { fetch } from 'whatwg-fetch';
import restaurantsService from '../../../app/services/restaurants.service';

jest.mock('whatwg-fetch', () => (
  { fetch: jest.fn().mockImplementation(() => ({ then: () => ({ then: () => ({}) }) })) }
));
global.window = {
  sessionStorage: {
    getItem: () => '__TOKEN__',
  },
};

describe('authService', () => {
  it('restaurantsList should call /api/restaurants with token', async () => {
    await restaurantsService.restaurantsList();
    expect(fetch).toHaveBeenCalledWith(
      '/api/restaurants',
      { headers: { token: '__TOKEN__' } },
    );
  });
  it('restaurantDetail should call /api/restaurants/{id} with token', async () => {
    await restaurantsService.restaurantDetail(22);
    expect(fetch).toHaveBeenCalledWith(
      '/api/restaurants/22',
      { headers: { token: '__TOKEN__' } },
    );
  });
});
