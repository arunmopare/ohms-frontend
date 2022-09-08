import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CommonHeaderComponent } from "./home/home-common-header/common-header.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AboutusComponent } from "./home/aboutus/aboutus.component";
import { ContactusComponent } from "./home/contactus/contactus.component";
import { AdminComponent } from "./admin/admin.component";
import { SearchHospitalComponent } from "./home/search-hospital/search-hospital.component";
import { FormsModule } from "@angular/forms";
import { PatientComponent } from "./patient/patient.component";
import { PatientRegistrationComponent } from "./patient/patient-registration/patient-registration.component";
import { PatientLoginComponent } from "./patient/patient-login/patient-login.component";
import { PatientDashboardComponent } from "./patient/patient-dashboard/patient-dashboard.component";
import { PatientCommonHeaderComponent } from "./patient/patient-common-header/patient-common-header.component";
import { PatientProfileComponent } from "./patient/patient-profile/patient-profile.component";
import { PatientUpdateProfileComponent } from './patient/patient-update-profile/patient-update-profile.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminCommonHeaderComponent } from './admin/admin-common-header/admin-common-header.component';
import { AdminAddHospitalComponent } from './admin/admin-add-hospital/admin-add-hospital.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommonHeaderComponent,
    PageNotFoundComponent,
    AboutusComponent,
    ContactusComponent,
    AdminComponent,
    SearchHospitalComponent,
    PatientComponent,
    PatientRegistrationComponent,
    PatientLoginComponent,
    PatientDashboardComponent,
    PatientCommonHeaderComponent,
    PatientProfileComponent,
    PatientUpdateProfileComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminCommonHeaderComponent,
    AdminAddHospitalComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
