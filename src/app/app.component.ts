import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBase } from './form-base';
import { ConnFormService } from './services/conn-form.service';
import { TransFormService } from './services/trans-form.service';
import { WebSocketService } from './services/web-socket.service';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    WebSocketService,

  ],
})

export class AppComponent {

  title = 'SPA-WS';

  transElements$ : Observable<FormBase<any>[]>;
  connElements$: Observable<FormBase<any>[]>;

  constructor(connService: ConnFormService, transService: TransFormService) {
    this.transElements$ = transService.getElements();
    this.connElements$  = connService.getElements();



  }

}
