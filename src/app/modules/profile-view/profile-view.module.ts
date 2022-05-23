import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileViewRoutingModule } from './profile-view-routing.module';
import { ProfileViewComponent } from './profile-view.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { EducationComponent } from './components/education/education.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { RightMenuComponent } from './components/right-menu/right-menu.component';
import { MyServicesComponent } from './components/my-services/my-services.component';
import { PricePlansComponent } from './components/price-plans/price-plans.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    ProfileViewComponent,
    ContactInformationComponent,
    EducationComponent,
    LeftMenuComponent,
    MainMenuComponent,
    RightMenuComponent,
    MyServicesComponent,
    PricePlansComponent,
    RecommendationComponent,
    WorkHistoryComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ProfileViewRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class ProfileViewModule { }
