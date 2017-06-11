import { ContainerDevLabPage } from './app.po';

describe('container-dev-lab App', () => {
  let page: ContainerDevLabPage;

  beforeEach(() => {
    page = new ContainerDevLabPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
