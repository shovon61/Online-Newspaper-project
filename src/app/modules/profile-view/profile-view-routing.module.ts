import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { EducationComponent } from './components/education/education.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MyServicesComponent } from './components/my-services/my-services.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PricePlansComponent } from './components/price-plans/price-plans.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { RightMenuComponent } from './components/right-menu/right-menu.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { ProfileViewComponent } from './profile-view.component';

const routes: Routes = [
      { path:'navbar',component:NavbarComponent,
            children:[
                          { path:'contact-information',component:ContactInformationComponent},
                          { path:'education',component:EducationComponent},
                          { path:'left-menu',component:LeftMenuComponent},
                          { path:'main-menu',component:MainMenuComponent},
                          { path:'my-services',component:MyServicesComponent},
                          { path:'right-menu',component:RightMenuComponent},
                          { path:'price-plans',component:PricePlansComponent},
                          { path:'recommendation',component:RecommendationComponent},
                          { path:'work-history',component:WorkHistoryComponent}
                      ]
      },
      {path:'',redirectTo:'navbar',pathMatch:'full'},
      {path:'not-found',component:NotFoundComponent},
      {path:'**',redirectTo:'not-found',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileViewRoutingModule { }
