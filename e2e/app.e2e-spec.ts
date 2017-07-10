import { Assing4componentPage } from './app.po';

describe('assing4component App', () => {
  let page: Assing4componentPage;

  beforeEach(() => {
    page = new Assing4componentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
