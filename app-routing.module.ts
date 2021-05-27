import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './source/components/about.component';
import { LoginComponent } from './source/components/login.component' ;
import { SignupComponent } from './source/components/signup.component';
import { HomeComponent } from './source/components/home.component';
const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const componentList = [HomeComponent, AboutComponent, LoginComponent, SignupComponent];
