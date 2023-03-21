import { createComponentFactory, Spectator } from "@ngneat/spectator";
import { SecurityNumberCheckerComponent } from "./security-number-checker.component";

describe('Security Number Checker', () => {
  let spectator: Spectator<SecurityNumberCheckerComponent>
  const createComponent = createComponentFactory({
    component: SecurityNumberCheckerComponent,
  });

  it(`do nothing`, () => { });
});
