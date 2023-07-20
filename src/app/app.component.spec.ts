import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { of } from 'rxjs';
import { SecurityNumberService } from './api/security-number.service';
import { AppComponent } from './app.component';

describe('Social Security Checker', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [
      FormsModule,
      ReactiveFormsModule
    ],
    mocks: [SecurityNumberService]
  });

  beforeEach(() => spectator = createComponent());

  it(`devrait s'afficher comme la maquette donnée`, () => {
    spectator.inject(SecurityNumberService).validate.and.returnValue(of(false));

    expect(spectator.query('form')).toBeTruthy();

    const securityNumberInput = spectator.query('input[name="security-number"]') as HTMLInputElement;
    expect(securityNumberInput).toBeTruthy();
    expect(securityNumberInput.placeholder).toBe('Numéro de sécurité sociale');

    const formButton = spectator.query('form button') as HTMLButtonElement;
    expect(formButton).toBeTruthy();
    expect(formButton.textContent).toContain('Vérifier');

    expect(spectator.query('[data-cy-global-status]')).toBeFalsy();
    expect(spectator.query('[data-cy-security-number-error]')).toBeFalsy();
  });


  it(`devrait afficher une erreur si le numéro de sécurité sociale n'est pas valide`, () => {
    spectator.inject(SecurityNumberService).validate.and.returnValue(of(false));

    spectator.typeInElement('100 100 100', 'input[name="security-number"]');
    spectator.click('form button');

    expect(spectator.query('[data-cy-security-number-error]')).toBeTruthy();
    expect(spectator.query('[data-cy-global-status]')).toBeTruthy();
  });

  it(`devrait afficher une erreur si le numéro de sécurité sociale n'est pas valide`, () => {
    spectator.inject(SecurityNumberService).validate.and.returnValue(of(false));

    spectator.typeInElement('1861013099001', 'input[name="security-number"]');
    spectator.click('form button');

    expect(spectator.query('[data-cy-security-number-error]')).toBeTruthy();
    expect(spectator.query('[data-cy-global-status]')).toBeTruthy();
  });
});
