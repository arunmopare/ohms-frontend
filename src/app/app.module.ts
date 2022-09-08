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
import { PatientComponent } from './patient/patient.component';
import { PatientRegistrationComponent } from './patient/patient-registration/patient-registration.component';
import { LoginComponent } from './patient/login/login.component';


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
    LoginComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
