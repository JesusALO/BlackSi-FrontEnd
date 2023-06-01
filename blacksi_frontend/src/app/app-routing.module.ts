import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';

const routes: Routes = [
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in-form/sign-in-form.component').then( m => m.SignInFormComponent)
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  { path: 'sign-in', component: SignInFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }, )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
