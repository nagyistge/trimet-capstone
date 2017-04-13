import { ScheduleVisualizationPage } from './app.po';

describe('schedule-visualization App', () => {
  let page: ScheduleVisualizationPage;

  beforeEach(() => {
    page = new ScheduleVisualizationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
