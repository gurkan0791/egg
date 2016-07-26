import { EggPage } from './app.po';

describe('egg App', function() {
  let page: EggPage;

  beforeEach(() => {
    page = new EggPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
