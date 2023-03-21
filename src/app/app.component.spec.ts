import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { AppComponent } from './app.component';

describe('Security Number Checker', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
  });

  it(`do nothing`, () => { });
});
