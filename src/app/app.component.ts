import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SecurityNumberService } from './api/security-number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  get hasPatternError(): boolean {
    return this.form.controls.securityNumber.hasError('pattern');
  }

  get hasValidityError(): boolean {
    return this.form.controls.securityNumber.hasError('validity');
  }

  constructor(private securityNumberService: SecurityNumberService) { }

  form = new FormGroup({
    securityNumber: new FormControl('', Validators.pattern(/^[0-9]{13}$/))
  });

  handleSubmit() {
    this.securityNumberService.validate(this.form.controls.securityNumber.value).subscribe((result) => {
      if (!result) {
        this.form.controls.securityNumber.setErrors({
          validity: true
        });
      }
    });
  }
}
