import { createComponentFactory, Spectator } from "@ngneat/spectator";
import { SecurityNumberCheckerComponent } from "./security-number-checker.component";

describe('Security Number Checker', () => {
  let spectator: Spectator<SecurityNumberCheckerComponent>
  const createComponent = createComponentFactory({
    component: SecurityNumberCheckerComponent,
  });

  beforeEach(() => spectator = createComponent());

  it('devrait apparaitre tel que décrit dans la maquette', () => {
    expect(spectator.query('form')).toBeTruthy();
    expect(spectator.query('input[name="security-number"]')).toBeTruthy();
  });
});
