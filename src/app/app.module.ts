import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import{ AngularFireModule} from '@angular/fire/compat'
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCZ0VnM1BV_jSvtQF85K4NdEans3tzHZpA",
      authDomain: "sales-forecasting-63986.firebaseapp.com",
      projectId: "sales-forecasting-63986",
      storageBucket: "sales-forecasting-63986.appspot.com",
      messagingSenderId: "309314426276",
      appId: "1:309314426276:web:812947a2646a665c421d31",
      measurementId: "G-R4JGSXZNXJ"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
