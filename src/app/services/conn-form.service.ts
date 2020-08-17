import { Injectable } from '@angular/core';
import { FormBase } from '../form-base';
import { FormTextbox } from '../form-textbox';
import { FormDropdown } from '../form-dropdown';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnFormService {

  constructor( ) { }

  getElements() {

    const elements: FormBase<string>[] = [

      new FormDropdown({
        key: 'secure',
        label: 'Connection Mode',
        options: [
          {key: 'ws', value: 'WebSocket' },
          {key: 'wss', value: 'Secure WebSocket' }

        ],
        required: true,
        order: 3
      }),
      new FormTextbox({
        key: 'ip',
        label: 'Server IP',
        required: true,
        order: 1,
        type: 'string'
      }),
      new FormTextbox({
        key: 'port',
        label: 'Server PORT',
        required: true,
        order: 2,
        type: 'number'

      })
    ];
    return of(elements.sort((a, b) => a.order - b.order));
  }

}
