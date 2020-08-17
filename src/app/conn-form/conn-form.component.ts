import { NgModule, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBase } from '../form-base';
import { FormControlService } from '../form-control.service';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-conn-form',
  templateUrl: './conn-form.component.html',
  styleUrls: ['./conn-form.component.scss'],

  
})


export class ConnFormComponent implements OnInit {


  @Input() elements: FormBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(
    private fcs : FormControlService, 
    private wsService : WebSocketService

    ) {}

  onReset(){
    this.wsService.close();
    this.form.reset();
    

  }
  ngOnInit(): void {
    this.form = this.fcs.toFormGroup(this.elements);
  }
  onSubmit(){
    this.wsService.connect(this.getCurrentURL());

    this.payLoad = JSON.stringify(this.form.getRawValue());
  
  }
  getCurrentURL(){
    let _uri =  this.form.controls['secure'].value
      + '://' 
      + this.form.controls['ip'].value
      + ':' 
      + this.form.controls['port'].value;
      console.log(_uri);
      return _uri;
  }
}
