import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './homepage/home/home.component';
import { ProfileComponent } from './homepage/profile/profile.component';
import { NotificationComponent } from './homepage/notification/notification.component';
import { ContactComponent } from './homepage/contact/contact.component';
import { User} from './shared/user.model';
import {UserService} from './shared/user.service';
import { EditProfileComponent } from './homepage/home/Student/edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './homepage/home/Student/change-password/change-password.component';
import { RegisterNewCourseComponent } from './homepage/home/Student/register-new-course/register-new-course.component';
import { ResultsComponent } from './homepage/home/Student/results/results.component';
import { CoursesComponent } from './homepage/home/Student/courses/courses.component';
import { ExamsComponent } from './homepage/home/Student/exams/exams.component';
import { PastpapersComponent } from './homepage/home/Student/pastpapers/pastpapers.component';
import { InqueriesComponent } from './homepage/home/Student/inqueries/inqueries.component';
import { MatTableModule, MatInputModule , MatToolbarModule } from '@angular/material';

const ROUTES: Route[] = [
      {path : '' , component: LoginpageComponent},
      {path : 'home' , component: HomeComponent },
      {path : 'profile' , component: ProfileComponent ,
        children: [
          { path: 'changePassword' , component: ChangePasswordComponent },
          { path: 'courses' , component: CoursesComponent },
          { path: 'editProfile' , component: EditProfileComponent },
          { path: 'inqueries' , component: InqueriesComponent },
          { path: 'pastpapers' , component: PastpapersComponent },
          { path: 'register' , component: RegisterNewCourseComponent },

          { path: 'exams' , component: ExamsComponent },

        ] },
      {path : 'notification' , component: NotificationComponent},
      {path : 'contact' , component: ContactComponent },
  { path: 'login', component: LoginpageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomeComponent,
    ProfileComponent,
    NotificationComponent,
    ContactComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    RegisterNewCourseComponent,
    ResultsComponent,
    CoursesComponent,
    ExamsComponent,
    PastpapersComponent,
    InqueriesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES,{ useHash: true}),
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
