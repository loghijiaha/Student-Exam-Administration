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
import { PdfViewerModule} from 'ng2-pdf-viewer';
import { RecorrectionRequestComponent } from './homepage/home/Student/recorrection-request/recorrection-request.component';
import { RequestRepeatComponent } from './homepage/home/Student/request-repeat/request-repeat.component';
import { StudentDetailsComponent } from './homepage/home/Lecturer/student-details/student-details.component';
import { AddCaComponent } from './homepage/home/Lecturer/add-ca/add-ca.component';
import { GradeCaComponent } from './homepage/home/Lecturer/grade-ca/grade-ca.component';
import { AddResultsComponent } from './homepage/home/Lecturer/add-results/add-results.component';
import { AddMessagesComponent } from './homepage/home/Lecturer/add-messages/add-messages.component';
import { ViewMessagesComponent } from './homepage/home/Lecturer/view-messages/view-messages.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule, MatNativeDateModule , MatFormFieldModule} from '@angular/material';
import { CommonModule} from '@angular/common';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
          { path: 'results' , component: ResultsComponent},
          { path: 'requestRepeat' , component: RequestRepeatComponent},
          { path: 'recorrection' , component: RecorrectionRequestComponent},
          { path: 'exams' , component: ExamsComponent },
          { path: 'addCA' , component: AddCaComponent},
          { path: 'addMessage' , component: AddMessagesComponent},
          { path: 'addResult' , component: AddResultsComponent},
          { path: 'gradeCA' , component: GradeCaComponent},
          { path: 'viewMessage' , component: ViewMessagesComponent},
          { path: 'studentDetails' , component: StudentDetailsComponent},


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
    RecorrectionRequestComponent,
    RequestRepeatComponent,
    StudentDetailsComponent,
    AddCaComponent,
    GradeCaComponent,
    AddResultsComponent,
    AddMessagesComponent,
    ViewMessagesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES,{ useHash: true}),
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,  PdfViewerModule, FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule],
  providers: [UserService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
