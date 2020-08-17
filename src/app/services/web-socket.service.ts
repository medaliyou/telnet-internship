import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject} from 'rxjs/webSocket';
//import { ConnectionService } from 'ng-connection-service';
import { Subject } from 'rxjs';
import { tap, delay, retryWhen } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  myWebSocket : WebSocketSubject<any>;
  closeSubject = new Subject<CloseEvent>();
  networkError = false;
  connected = false;

  constructor() {}


  subscribe(){
    this.myWebSocket.subscribe(
      msg => {
        console.log('message received: ' + msg)
      },
      err => { 
        console.log('Got err', err);
      },
      () =>  { 
        console.log('complete');
      }  
    );
    // this.myWebSocket.error({code: 3001, reason: 'App error'});
    /*
    this.myWebSocket.pipe(
      retryWhen(errors =>
        errors.pipe(
          tap(err => {
            console.error('Got error', err);
          }),
          delay(1000)
        )
      )
    )
    .subscribe(
      msg => {
        
        console.log('message received: ' + msg)
      },
      err => { 
        this.networkError = true;
        console.log(err);
      },
      () =>  { 
        console.log('complete');
      }  
    );
    */

  }


  onConnectionError(){

  }

  connect(uri : string) {

    if( this.myWebSocket ){
      return ;
    }

    if( uri === undefined ){
      return ;
    }
    this.closeSubject.subscribe(_ => { this.connected=false;this.networkError=true; console.log('Underlying WebSocket connection closed'); });
    this.myWebSocket = webSocket({
      url: uri,
      closeObserver: this.closeSubject,
      openObserver: {
        next: () => {console.log('Underlying WebSocket connection open');this.connected=true;this.networkError=false;} 
      }     
    });
    
    console.log("CONNECTING : ",uri);
    this.subscribe();
    this.connected = true;


  }


    close() {
      if(this.myWebSocket){
        this.myWebSocket.unsubscribe();
        this.myWebSocket.complete();
        this.myWebSocket = null;
        this.connected = false;
        this.connected = false;

      }
    
    }

    send(msg){
      this.myWebSocket.next(msg);
    }

    isConnected() {
      
      if(!this.myWebSocket || this.myWebSocket.isStopped || !this.connected ){
        this.connected = false;
        this.networkError = true;

        return false;

      }
      return true;
    /* 
      return this.connected && !this.networkError ;
    */

    }

    getStatus(){

      if(this.connected){
        return "ONLINE";
      }
      return "OFFLINE";
    }
    



}
