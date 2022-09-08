import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminAddHospitalComponent } from "./admin/admin-add-hospital/admin-add-hospital.component";
import { AdminDashboardComponent } from "./admin/admin-dashboard/admin-dashboard.component";
import { AdminLoginComponent } from "./admin/admin-login/admin-login.component";
import { HospitalListComponent } from "./admin/hospital-list/hospital-list.component";
import { AboutusComponent } from "./home/aboutus/aboutus.component";
import { ContactusComponent } from "./home/contactus/contactus.component";
import { HomeComponent } from "./home/home.component";
import { SearchHospitalComponent } from "./home/search-hospital/search-hospital.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PatientDashboardComponent } from "./patient/patient-dashboard/patient-dashboard.component";
import { PatientLoginComponent } from "./patient/patient-login/patient-login.component";
import { PatientProfileComponent } from "./patient/patient-profile/patient-profile.component";
import { PatientRegistrationComponent } from "./patient/patient-registration/patient-registration.component";
import { PatientUpdateProfileComponent } from "./patient/patient-update-profile/patient-update-profile.component";
import { PatientComponent } from "./patient/patient.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "contactus", component: ContactusComponent },
  { path: "hospitalList", component: SearchHospitalComponent },
  { path: "patient/registration", component: PatientRegistrationComponent },
  { path: "patient/dashboard", component: PatientDashboardComponent },
  { path: 'patient/profile', component: PatientProfileComponent },
  { path: "patient/login", component: PatientLoginComponent },
  { path: "patient/update", component: PatientUpdateProfileComponent },
  { path: "admin/login", component: AdminLoginComponent },
  { path: "admin/dashboard", component: AdminDashboardComponent },
  { path: "admin/hspList", component: HospitalListComponent },
  { path: "admin/addHspOpt", component: AdminAddHospitalComponent },

  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  AboutusComponent,
  ContactusComponent,
  SearchHospitalComponent,
  PageNotFoundComponent,
  PatientComponent,
  PatientRegistrationComponent,
  PatientProfileComponent,
  PatientLoginComponent,
  PatientUpdateProfileComponent
];
