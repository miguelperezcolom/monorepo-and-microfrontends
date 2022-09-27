import { getHotelProductLink } from '../support/dashboard.po';

describe('dashboard', () => {
  beforeEach(() => cy.visit('/'));

  it('should display the hotel product', () => {
    // Function helper example, see `../support/app.po.ts` file
    getHotelProductLink().contains('Hotel');
  });
});
