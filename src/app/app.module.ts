import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './body/home/home.component';
import { TechnicalskillComponent } from './body/professionalsummary/technicalskill/technicalskill.component';
import { AcademicdetailsComponent } from './body/academicdetails/academicdetails.component';
import { PersonaldetailsComponent } from './body/personaldetails/personaldetails.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ProfessionalexpComponent } from './body/professionalsummary/professionalexp/professionalexp.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TechnicalskillComponent,
    AcademicdetailsComponent,
    PersonaldetailsComponent,
    DropdownDirective,
    ProfessionalexpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
