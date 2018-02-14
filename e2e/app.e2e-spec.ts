import { Ang2ProductManagementPage } from './app.po';

describe('ang2-product-management App', () => {
  let page: Ang2ProductManagementPage;

  beforeEach(() => {
    page = new Ang2ProductManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
