import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'houses',
    pathMatch: 'full'
  },

  { path: 'houses', loadChildren: () => import('./components/pages/houses/houses.module').then(m => m.HousesModule) },
  { path: 'students', loadChildren: () => import('./components/pages/students/students.module').then(m => m.StudentsModule) },
  { path: 'staff', loadChildren: () => import('./components/pages/staff/staff.module').then(m => m.StaffModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
