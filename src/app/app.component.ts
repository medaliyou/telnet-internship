import { Component, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBase } from './form-base';
import { ConnFormService } from './services/conn-form.service';
import { TransFormService } from './services/trans-form.service';
import { WebSocketService } from './services/web-socket.service';
import { Title } from '@angular/platform-browser';


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    WebSocketService,
    Title,
    {
        provide: 'Client Interface',
        useValue: 'en'
    }
  ],
})

export class AppComponent {

  title = 'Client Interface';

  transElements$ : Observable<FormBase<any>[]>;
  connElements$: Observable<FormBase<any>[]>;

  constructor(connService: ConnFormService, transService: TransFormService) {
    this.transElements$ = transService.getElements();
    this.connElements$  = connService.getElements();



  }

}
