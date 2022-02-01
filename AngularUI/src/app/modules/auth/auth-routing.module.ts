import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDisableGuard } from 'src/app/guards/login-disable.guard';
import { LoginGuard } from 'src/app/guards/login.guard';
import { AuthPageComponent } from 'src/app/pages/auth/auth-page/auth-page.component';
import { LoginPageComponent } from 'src/app/pages/auth/login-page/login-page.component';
import { RegisterPageComponent } from 'src/app/pages/auth/register-page/register-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [LoginDisableGuard],
  },
  {
    path: 'register',
    component: RegisterPageComponent,

    canActivate: [LoginDisableGuard],
  },
  {
    path: 'update',
    component: AuthPageComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
