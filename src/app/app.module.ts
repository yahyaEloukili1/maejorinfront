import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './auth.guard';
import { RnpService } from './services/my-service.service';
import { TokenInterceptorService } from './token-interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MaejorinsComponent } from './components/maejorins/maejorins.component';
import { EditMaejorComponent } from './components/edit-maejor/edit-maejor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MaejorinsComponent,
    EditMaejorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,{
    provide : HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
