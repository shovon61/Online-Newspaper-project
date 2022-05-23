import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

        { path:'My-profile',loadChildren:()=>import('./modules/profile-view/profile-view.module').then(d=>d.ProfileViewModule)},
        { path:'',redirectTo:'My-profile',pathMatch:'full'},
        { path:'**',redirectTo:'My-profile',pathMatch:'full'},

        { path:'My-profile2',loadChildren:()=>import('./modules/user-profile/user-profile.module').then(m=>m.UserProfileModule)},
        { path:'',redirectTo:'My-profile2',pathMatch:'full'},
        { path:'**',redirectTo:'My-profile2',pathMatch:'full'},

      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
