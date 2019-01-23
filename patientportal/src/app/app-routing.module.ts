import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { LayoutComponent } from './layout/layout.component';
import { DoctordetailsComponent } from './doctordetails/doctordetails.component';
import { DoctorprofileComponent } from './doctorprofile/doctorprofile.component';
import { AvailabletimeComponent } from './availabletime/availabletime.component';

const routes: Routes = [
  { path: 'doctors', component: DoctorsComponent },
  // { path: '**', component: LayoutComponent },
  { path: '', component: LayoutComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'doctorsdetais', component: DoctordetailsComponent },
  { path: 'doctorsprofile', component: DoctorprofileComponent },
  { path: 'availabletime', component: AvailabletimeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
