import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransComponent } from './trans/trans.component';
import { TransFormComponent } from './trans-form/trans-form.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConnFormComponent } from './conn-form/conn-form.component'
import { WebSocketService } from './services/web-socket.service';


@NgModule({
  declarations: [
    AppComponent,
    TransComponent,
    TransComponent,
    TransFormComponent,
    ConnFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent],
})
export class AppModule { }

