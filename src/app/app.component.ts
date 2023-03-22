import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {

  form = new FormGroup({
    securityNumber: new FormControl('', Validators.pattern(/^[0-9]{13}$/))
  });
}

