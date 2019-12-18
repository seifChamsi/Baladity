import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ReclamationDetailComponent } from './reclamation-detail/reclamation-detail.component';
import { ReclamationListeComponent } from './reclamation-liste/reclamation-liste.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {
    path:"reclamation",
    component:ReclamationComponent
  },
  {
    path:"reclamation/:id",
    component:ReclamationDetailComponent
  },
  {
    path:"reclamations",
    component:ReclamationListeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"auth",
    component:AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
