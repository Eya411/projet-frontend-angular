import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoireComponent } from './pages_sous_categorie/accessoire/accessoire.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AchatComponent } from './pages/achat/achat.component';
import { HomeComponent } from './pages/home/home.component';
import { PanierComponent } from './pages/panier/panier.component';
import { PolitiqueDonneesComponent } from './pages/politique-donnees/politique-donnees.component';
import {DescriptionComponent} from './pages_sous_categorie/description/description.component';
import { ChemiseFemmeComponent } from './pages_sous_categorie/chemise-femme/chemise-femme.component';
import { DescriptionVetementsComponent } from './pages_sous_categorie/description-vetements/description-vetements.component';
import { ManteauVestesComponent } from './pages_sous_categorie/manteau-vestes/manteau-vestes.component';
import { PullFemmeComponent } from './pages_sous_categorie/pull-femme/pull-femme.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'politique-donnees', component: PolitiqueDonneesComponent },
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'accessoire', component: AccessoireComponent},
  {path: 'achat', component:AchatComponent},
  {path: 'panier', component:PanierComponent},
  {path: 'chemise-femme', component:ChemiseFemmeComponent},
  {path: 'manteau-vestes', component:ManteauVestesComponent},
  {path: 'pull-femme', component:PullFemmeComponent},
  { path: 'achat_vetement/:id', component: DescriptionVetementsComponent },
  { path: 'achat_hors_vetement/:id', component: DescriptionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }