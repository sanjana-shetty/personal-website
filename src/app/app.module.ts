import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './body/home/home.component';
import { TechnicalskillComponent } from './body/professionalsummary/technicalskill.component';
import { AcademicdetailsComponent } from './body/academicdetails/academicdetails.component';
import { PersonaldetailsComponent } from './body/personaldetails/personaldetails.component';
import { DropdownDirective } from './shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TechnicalskillComponent,
    AcademicdetailsComponent,
    PersonaldetailsComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
