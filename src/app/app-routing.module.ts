import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutusComponent } from "./home/aboutus/aboutus.component";
import { ContactusComponent } from "./home/contactus/contactus.component";
import { HomeComponent } from "./home/home.component";
import { SearchHospitalComponent } from "./home/search-hospital/search-hospital.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./patient/login/login.component";
import { PatientRegistrationComponent } from "./patient/patient-registration/patient-registration.component";
import { PatientComponent } from "./patient/patient.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "contactus", component: ContactusComponent },
  { path: "hospitalList", component: SearchHospitalComponent },
  {
    path: "patient/registration", component: PatientRegistrationComponent
  },
  {
    path: "patient/login", component: LoginComponent
  },
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
  PatientRegistrationComponent
];
