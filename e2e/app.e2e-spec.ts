import { CloudWebPage } from './app.po';

describe('cloud-web App', function() {
  let page: CloudWebPage;

  beforeEach(() => {
    page = new CloudWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
