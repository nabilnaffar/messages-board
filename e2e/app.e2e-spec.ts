import { MessagesBoardPage } from './app.po';

describe('messages-board App', function() {
  let page: MessagesBoardPage;

  beforeEach(() => {
    page = new MessagesBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
