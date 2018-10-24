import { NgModule } from '@angular/core';

import { HomeComponent } from './body/home/home.component';
import { ProfessionalexpComponent } from './body/professionalsummary/professionalexp/professionalexp.component';
import { TechnicalskillComponent } from './body/professionalsummary/technicalskill/technicalskill.component';
import { AcademicdetailsComponent } from './body/academicdetails/academicdetails.component';
import { PersonaldetailsComponent } from './body/personaldetails/personaldetails.component';

//routing
import {Routes,RouterModule} from '@angular/router'


const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'technical-skill',component:TechnicalskillComponent},
    {path:'professional-exp',component:ProfessionalexpComponent},
    {path:'academic-details',component:AcademicdetailsComponent},
    {path:'personal-details',component:PersonaldetailsComponent}
    ];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule {

 }