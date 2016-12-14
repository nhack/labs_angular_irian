import { IntroPage } from './app.po';

describe('intro App', function() {
  let page: IntroPage;

  beforeEach(() => {
    page = new IntroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
