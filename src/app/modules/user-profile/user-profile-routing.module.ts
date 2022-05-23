import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  { path:'start',component:StartComponent,children:[
            { path:'input',component:InputComponent},
            { path:'output',component:OutputComponent}
  ]},
  { path:'',redirectTo:'start',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
