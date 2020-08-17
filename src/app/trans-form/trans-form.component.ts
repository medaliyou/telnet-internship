import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from '../form-base';
import { FormControlService } from '../form-control.service';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-trans-form',
  templateUrl: './trans-form.component.html',
  styleUrls: ['./trans-form.component.scss'],

})
export class TransFormComponent implements OnInit {

  @Input() elements: FormBase<string>[] = [];
  form: FormGroup;
  payLoad = '';
  

  constructor(
    private fcs : FormControlService,
    public wsService : WebSocketService
    ) {}


  ngOnInit(): void {
    this.form = this.fcs.toFormGroup(this.elements);

  }
  onSubmit(){
    //this.wsService.subscribe();

    this.payLoad = this.getTransaction();
    this.startTransaction();
  }

  getTransaction(){
    return JSON.stringify(this.form.getRawValue());
  };

  startTransaction(){
    console.log(this.getTransaction());
    console.log(this.wsService);
    this.wsService.send(this.getTransaction());

  }
}
