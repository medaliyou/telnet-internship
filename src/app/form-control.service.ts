import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBase } from './form-base';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }
  toFormGroup(elements: FormBase<string>[] ) {
    const group: any = {};

    elements.forEach(element => {
      group[element.key] = element.required ? new FormControl(
        element.value || '', Validators.required
        ) : new FormControl(element.value || '');
    });
    return new FormGroup(group);
  }
}
