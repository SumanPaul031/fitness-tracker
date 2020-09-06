import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { 
    path: 'training', 
    canLoad: [AuthGuard], 
    loadChildren: () => 
      import('./training/training.module').then(m => m.TrainingModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
