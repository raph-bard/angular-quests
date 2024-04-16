import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { IsAdminComponent } from './is-admin/is-admin.component';
import { Forms1Component } from './forms1/forms1.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Error404Component } from './error-404/error-404.component';

const routes: Routes = [
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'is-admin', component: IsAdminComponent },
  { path: 'forms-1', component: Forms1Component },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
