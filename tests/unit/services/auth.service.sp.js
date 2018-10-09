import { fetch } from 'whatwg-fetch';
import authService from '../../../app/services/auth.service';

jest.mock('whatwg-fetch', () => (
  { fetch: jest.fn().mockImplementation(() => ({ then: () => ({ then: () => ({}) }) })) }
));

describe('authService', () => {
  it('should call /api/auth', async () => {
    await authService();
    expect(fetch).toHaveBeenCalledWith('/api/auth');
  });
});
