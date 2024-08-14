import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AchatComponent } from './pages/achat/achat.component';
import { HomeComponent } from './pages/home/home.component';
import { PanierComponent } from './pages/panier/panier.component';
import { PanierProduitsComponent } from './pages/PaniersProduits/panierproduits.component';
import { PolitiqueDonneesComponent } from './pages/politique-donnees/politique-donnees.component';
import { AccessoireBebeFilleComponent } from './pages_sous_categorie/accessoire-bebe-fille/accessoire-bebe-fille.component';
import { AccessoireEnfantFilleComponent } from './pages_sous_categorie/accessoire-enfant-fille/accessoire-enfant-fille.component';
import { AccessoireComponent } from './pages_sous_categorie/accessoire/accessoire.component';
import { ChemiseFemmeComponent } from './pages_sous_categorie/chemise-femme/chemise-femme.component';
import { CompletBebeFilleComponent } from './pages_sous_categorie/complet-bebe-fille/complet-bebe-fille.component';
import { CompletBebeGarconComponent } from './pages_sous_categorie/complet-bebe-garcon/complet-bebe-garcon.component';
import { DescriptionVetementsComponent } from './pages_sous_categorie/description-vetements/description-vetements.component';
import { DescriptionComponent } from './pages_sous_categorie/description/description.component';
import { JeansEnfantFilleComponent } from './pages_sous_categorie/jeans-enfant-fille/jeans-enfant-fille.component';
import { JeansEnfantGarconComponent } from './pages_sous_categorie/jeans-enfant-garcon/jeans-enfant-garcon.component';
import { JeansHommeComponent } from './pages_sous_categorie/jeans-homme/jeans-homme.component';
import { ManteauVestesfemmeComponent } from './pages_sous_categorie/manteau-vestes-femme/manteau-vestes-femme.component';
import { ManteauVestesHommeComponent } from './pages_sous_categorie/manteau-vestes-homme/manteau-vestes-homme.component';
import { PullBebeFilleComponent } from './pages_sous_categorie/pull-bebe-fille/pull-bebe-fille.component';
import { PullBebeGarconComponent } from './pages_sous_categorie/pull-bebe-garcon/pull-bebe-garcon.component';
import { PullEnfantFilleComponent } from './pages_sous_categorie/pull-enfant-fille/pull-enfant-fille.component';
import { PullEnfantGarconComponent } from './pages_sous_categorie/pull-enfant-garcon/pull-enfant-garcon.component';
import { PullFemmeComponent } from './pages_sous_categorie/pull-femme/pull-femme.component';
import { SacBebeFilleComponent } from './pages_sous_categorie/sac-bebe-fille/sac-bebe-fille.component';
import { SacBebeGarconComponent } from './pages_sous_categorie/sac-bebe-garcon/sac-bebe-garcon.component';
import { SacEnfantGarconComponent } from './pages_sous_categorie/sac-enfant-garcon/sac-enfant-garcon.component';
import { SacsEnfantFilleComponent } from './pages_sous_categorie/sacs-enfant-fille/sacs-enfant-fille.component';
import { SacsFemmeComponent } from './pages_sous_categorie/sacs-femme/sacs-femme.component';
import { SacsHommeComponent } from './pages_sous_categorie/sacs-homme/sacs-homme.component';
import { ShortsEnfantFilleComponent } from './pages_sous_categorie/shorts-enfant-fille/shorts-enfant-fille.component';
import { ShortsEnfantGarconComponent } from './pages_sous_categorie/shorts-enfant-garcon/shorts-enfant-garcon.component';
import { TeeShirtHommeComponent } from './pages_sous_categorie/tee-shirt-homme/tee-shirt-homme.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'politique-donnees', component: PolitiqueDonneesComponent },
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'accessoire', component: AccessoireComponent},
  {path: 'achat', component:AchatComponent},
  {path: 'panierproduits', component:PanierProduitsComponent},
  {path: 'panier', component:PanierComponent},
  {path: 'chemise-femme', component:ChemiseFemmeComponent},
  {path: 'manteau-vestes', component:ManteauVestesfemmeComponent},
  {path: 'pull-femme', component:PullFemmeComponent},
  {path: 'pull-enfant-fille', component:PullEnfantFilleComponent},
  {path: 'sacs-femme', component:SacsFemmeComponent},
  {path: 'sacs-homme', component:SacsHommeComponent},
  {path: 'manteau-vestes-homme', component:ManteauVestesHommeComponent},
  {path: 'Tee-shirt-homme', component:TeeShirtHommeComponent},
  {path: 'jeans-homme', component:JeansHommeComponent},
  {path: 'accessoire-enfant-fille', component:AccessoireEnfantFilleComponent},
  {path: 'sacs-enfant-fille', component:SacsEnfantFilleComponent},
  {path: 'jeans-enfant-fille', component:JeansEnfantFilleComponent},
  {path: 'shorts-enfant-fille', component:ShortsEnfantFilleComponent},
  {path: 'sac-enfant-garcon', component:SacEnfantGarconComponent},
  {path: 'pull-enfant-garcon', component:PullEnfantGarconComponent},
  {path: 'jeans-enfant-garcon', component:JeansEnfantGarconComponent},
  {path: 'shorts-enfant-garcon', component:ShortsEnfantGarconComponent},
  {path: 'sac-bebe-garcon', component:SacBebeGarconComponent},
  {path: 'pull-bebe-garcon', component:PullBebeGarconComponent},
  {path: 'complet-bebe-garcon', component:CompletBebeGarconComponent},
  {path: 'accessoire-bebe-fille', component:AccessoireBebeFilleComponent},
  {path: 'sac-bebe-fille', component:SacBebeFilleComponent},
  {path: 'pull-bebe-fille', component:PullBebeFilleComponent},
  {path: 'complet-bebe-fille', component:CompletBebeFilleComponent},



  
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