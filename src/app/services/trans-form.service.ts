import { Injectable } from '@angular/core';
import { FormBase } from '../form-base';
import { FormTextbox } from '../form-textbox';
import { FormDropdown } from '../form-dropdown';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransFormService {
  constructor( ) { }
  getElements() {

    const elements: FormBase<string>[] = [

      new FormDropdown({
        key: 'type',
        label: 'Type',
        options: [
          {key: 'sale', value: 'Sale' },
          {key: 'purchase', value: 'Purchase' }

        ],
        required: true,
        order: 4,
        value: 'sale'
      }),
      new FormDropdown({
        key: 'currency',
        label: 'Currency',
        options: [
          {key: 'usd', value: 'USD' },
          {key: 'gbp', value: 'GBP' },
          {key: 'tnd', value: 'TND' }


        ],
        required: true,
        order: 3,
        value: 'tnd'

      }),
      new FormTextbox({
        key: 'card',
        label: 'Bank Card',
        required: true,
        order: 1,
        type: 'number',
        value: '0'

      }),
      new FormTextbox({
        key: 'amount',
        label: 'Amount',
        required: true,
        order: 2,
        type: 'number',
        value: '0'

      })
    ];
    return of(elements.sort((a, b) => a.order - b.order));
  }

}
