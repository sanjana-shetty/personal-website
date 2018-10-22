import { NgModule } from '@angular/core';

import { HomeComponent } from './body/home/home.component';
import { ProfessionalsummaryComponent } from './body/professionalsummary/professionalsummary.component';
import { AcademicdetailsComponent } from './body/academicdetails/academicdetails.component';
import { PersonaldetailsComponent } from './body/personaldetails/personaldetails.component';

//routing
import {Routes,RouterModule} from '@angular/router'


const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'Professionalsummary',component:ProfessionalsummaryComponent},
    {path:'Academicdetails',component:AcademicdetailsComponent},
    {path:'Personaldetails',component:PersonaldetailsComponent}
    ];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule {

 }