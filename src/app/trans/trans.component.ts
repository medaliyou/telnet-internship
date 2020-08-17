import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from '../form-base';

@Component({
  selector: 'app-trans',
  templateUrl: './trans.component.html',
  styleUrls: ['./trans.component.scss']
})
export class TransComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() element: FormBase<string>;
  @Input() form : FormGroup;
  get isValid(){ return this.form.controls[this.element.key].valid; }

}
