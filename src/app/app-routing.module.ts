import { EditCollaboratorComponent } from './views/edit-collaborator/edit-collaborator.component';
import { NewCollaboratorComponent } from './views/new-collaborator/new-collaborator.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarUsuarioComponent } from './views/cadastrar-usuario/cadastrar-usuario.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuard ],
    title: "Home | Collaborators"
  },
  {
    path: 'login',
    component: LoginComponent,
    title: "Login | Collaborators"
  },
  {
    path: 'cadastrar',
    component: CadastrarUsuarioComponent,
    title: "Cadastre-se | Collaborators"
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ AuthGuard ],
    title: "Painel de Controle | Collaborators"
  },
  {
    path: 'dashboard/new',
    component: NewCollaboratorComponent,
    canActivate: [ AuthGuard ],
    title: "Novo colaborador | Collaborators"
  },
  {
    path: 'dashboard/edit/:id',
    component: EditCollaboratorComponent,
    canActivate: [ AuthGuard ],
    title: "Editar Colaborador | Collaborators"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
