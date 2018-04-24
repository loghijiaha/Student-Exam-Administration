import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './/app-routing.module';
import { BackendServiceService} from './backend-service.service';
import { HomeComponent } from './homepage/home/home.component';
import { ProfileComponent } from './homepage/profile/profile.component';
import { NotificationComponent } from './homepage/notification/notification.component';
import { ContactComponent } from './homepage/contact/contact.component';

const ROUTES: Route[] = [
  { path: '', component: LoginpageComponent},
  { path: 'home', component: HomepageComponent,
    children: [
      {path : '' , redirectTo: 'home' , pathMatch: 'full'},
      {path : 'home' , component: HomeComponent },
      {path : 'profile' , component: ProfileComponent },
      {path : 'notification' , component: NotificationComponent},
      {path : 'contact' , component: ContactComponent }
    ]
  },
  { path: 'login', component: LoginpageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomepageComponent,
    HomeComponent,
    ProfileComponent,
    NotificationComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BackendServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
