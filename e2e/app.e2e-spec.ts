import { Ng2formsDemoPage } from './app.po';

describe('ng2forms-demo App', function() {
  let page: Ng2formsDemoPage;

  beforeEach(() => {
    page = new Ng2formsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
