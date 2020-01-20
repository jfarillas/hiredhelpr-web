import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SignupcarouselComponent } from './signupcarousel/signupcarousel.component';
import { FormsModule } from '@angular/forms';
import { PhonetransformPipe } from '../pipes/phonetransform.pipe';
@NgModule({
  declarations: [SignupComponent, SignupcarouselComponent, PhonetransformPipe],
  imports: [SignupRoutingModule, CommonModule, SlickCarouselModule, FormsModule]
})
export class SignupModule {}
