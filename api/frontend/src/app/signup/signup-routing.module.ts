import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { extract } from '@app/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'signup', component: SignupComponent, data: { title: extract('Signup') } }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class SignupRoutingModule {}
