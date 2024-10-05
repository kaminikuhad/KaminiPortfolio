import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ExperienceComponent } from './component/experience/experience.component';
import { SkillsComponent } from './component/skills/skills.component';
import { EducationComponent } from './component/education/education.component';
import { ContactComponent } from './component/contact/contact.component';
import { IntroComponent } from './component/intro/intro.component';
import { MainComponent } from './component/main.component';

const routes: Routes = [
  {
  path:'about',component:AboutComponent,
},
{
  path:'experience',component:ExperienceComponent
},
{
  path:'skill',component:SkillsComponent
},{
  path:'education',component:EducationComponent
},{
  path:'contact',component:ContactComponent
},
{
  path:'#',component:IntroComponent
},
{
  path:'',component:MainComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
