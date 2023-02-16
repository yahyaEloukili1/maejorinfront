import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaejorinsComponent } from './components/maejorins/maejorins.component';
import { EditMaejorComponent } from './components/edit-maejor/edit-maejor.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: "elections/login",component: LoginComponent},
  {path: "elections/maejorins",component: MaejorinsComponent,canActivate: [AuthGuard]},
  {path: "elections/editMaejor/:id",component: EditMaejorComponent,canActivate: [AuthGuard]},
{path: "elections", redirectTo : "elections/maejorins", pathMatch: 'full'},
{path: "", redirectTo : "elections/maejorins", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
