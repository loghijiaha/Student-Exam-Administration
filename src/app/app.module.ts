import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
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
import { AddResultsComponent } from './homepage/home/Lecturer/add-results/add-results.component';
import { AddMessagesComponent } from './homepage/home/Lecturer/add-messages/add-messages.component';
import { ViewMessagesComponent } from './homepage/home/Lecturer/view-messages/view-messages.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule, MatNativeDateModule , MatFormFieldModule} from '@angular/material';
import { CommonModule} from '@angular/common';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from './auth.guard';
import {ToastrModule} from 'ngx-toastr';
import { ModuleDetailsComponent } from './homepage/home/Lecturer/module-details/module-details.component';
import { EditResultComponent } from './homepage/home/Lecturer/edit-result/edit-result.component';
import {User} from './shared/user.model';
import {MatListModule} from '@angular/material';
import { DeleteExamComponent } from './homepage/home/Admin/delete-exam/delete-exam.component';
import { CreateModuleComponent} from './homepage/home/Admin/create-module/create-module.component';
import { CreateNewExamComponent} from './homepage/home/Admin/create-new-exam/create-new-exam.component';
import { RegisterNewStudentComponent} from './homepage/home/Admin/register-new-student/register-new-student.component';
import { RegisterNewLecturerComponent} from './homepage/home/Admin/register-new-lecturer/register-new-lecturer.component';
import { AddRepeatersComponent } from './homepage/home/Admin/add-repeaters/add-repeaters.component';
import { ViewUserInquiriesComponent } from './homepage/home/Admin/view-user-inquiries/view-user-inquiries.component';
import { ViewRepeatersComponent } from './homepage/home/Admin/view-repeaters/view-repeaters.component';


const ROUTES: Route[] = [
      {path : '' , component: LoginpageComponent },
      {path : 'home' , component: HomeComponent, canActivate: [AuthGuard] },
      {path : 'profile' , component: ProfileComponent , canActivate: [AuthGuard],
        children: [
          // student
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
          // lecturer
          { path: 'addMessage' , component: AddMessagesComponent},
          { path: 'addResult' , component: AddResultsComponent},
          { path: 'addMessage' , component: AddMessagesComponent},
          { path: 'editResult' , component: EditResultComponent},
          { path: 'moduleDetails' , component: ModuleDetailsComponent},
          { path: 'viewMessage' , component: ViewMessagesComponent},
          { path: 'studentDetails' , component: StudentDetailsComponent},
          //admin
          { path: 'createStudent' , component: RegisterNewStudentComponent},
          { path: 'createLecturer' , component: RegisterNewLecturerComponent},
          { path: 'createModule' , component: CreateModuleComponent},
          { path: 'createExam' , component: CreateNewExamComponent},
          { path: 'deleteExam' , component: DeleteExamComponent},
          { path: 'addRepeaters' , component: AddRepeatersComponent},
          { path: 'viewRepeaters' , component: ViewRepeatersComponent},
          { path: 'viewUserInquiries' , component: ViewUserInquiriesComponent},


        ] },
      {path : 'notification' , component: NotificationComponent, canActivate: [AuthGuard]},
      {path : 'contact' , component: ContactComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginpageComponent},
];

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
    CreateModuleComponent,
    AddResultsComponent,
    AddMessagesComponent,
    ViewMessagesComponent,
    ModuleDetailsComponent,
    EditResultComponent,
    DeleteExamComponent,
    CreateNewExamComponent,
    RegisterNewStudentComponent,
    RegisterNewLecturerComponent,
    AddRepeatersComponent,
    ViewUserInquiriesComponent,
    ViewRepeatersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {onSameUrlNavigation: 'reload'}),
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,  PdfViewerModule, FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserAnimationsModule, // required animations module
    MatListModule,
    ToastrModule.forRoot()
  ],
  exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule],
  providers: [UserService, DatePipe, AuthGuard,User],
  bootstrap: [AppComponent]
})
export class AppModule { }
