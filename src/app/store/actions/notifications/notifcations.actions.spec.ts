import * as fromNotifcations from './notifcations.actions';

describe('loadNotifcationss', () => {
  it('should return an action', () => {
    expect(fromNotifcations.loadNotifcationss().type).toBe('[Notifcations] Load Notifcationss');
  });
});
