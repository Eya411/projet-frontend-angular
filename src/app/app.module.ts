import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AchatComponent } from './pages/achat/achat.component';
import { HomeComponent } from './pages/home/home.component';
import { PanierComponent } from './pages/panier/panier.component';
import { PanierProduitsComponent } from './pages/PaniersProduits/panierproduits.component';
import { PolitiqueDonneesComponent } from './pages/politique-donnees/politique-donnees.component';
import { AccessoireComponent } from './pages_sous_categorie/accessoire/accessoire.component';
import { ChemiseFemmeComponent } from './pages_sous_categorie/chemise-femme/chemise-femme.component';
import { DescriptionVetementsComponent } from './pages_sous_categorie/description-vetements/description-vetements.component';
import { DescriptionComponent } from './pages_sous_categorie/description/description.component';
import { JeansHommeComponent } from './pages_sous_categorie/jeans-homme/jeans-homme.component';
import { ManteauVestesfemmeComponent } from './pages_sous_categorie/manteau-vestes-femme/manteau-vestes-femme.component';
import { ManteauVestesHommeComponent } from './pages_sous_categorie/manteau-vestes-homme/manteau-vestes-homme.component';
import { PullFemmeComponent } from './pages_sous_categorie/pull-femme/pull-femme.component';
import { SacsFemmeComponent } from './pages_sous_categorie/sacs-femme/sacs-femme.component';
import { SacsHommeComponent } from './pages_sous_categorie/sacs-homme/sacs-homme.component';
import { TeeShirtHommeComponent } from './pages_sous_categorie/tee-shirt-homme/tee-shirt-homme.component';
import { PullEnfantFilleComponent } from './pages_sous_categorie/pull-enfant-fille/pull-enfant-fille.component';
import { AccessoireEnfantFilleComponent } from './pages_sous_categorie/accessoire-enfant-fille/accessoire-enfant-fille.component';
import { SacsEnfantFilleComponent } from './pages_sous_categorie/sacs-enfant-fille/sacs-enfant-fille.component';
import { JeansEnfantFilleComponent } from './pages_sous_categorie/jeans-enfant-fille/jeans-enfant-fille.component';
import { ShortsEnfantFilleComponent } from './pages_sous_categorie/shorts-enfant-fille/shorts-enfant-fille.component';
import { SacEnfantGarconComponent } from './pages_sous_categorie/sac-enfant-garcon/sac-enfant-garcon.component';
import { PullEnfantGarconComponent } from './pages_sous_categorie/pull-enfant-garcon/pull-enfant-garcon.component';
import { JeansEnfantGarconComponent } from './pages_sous_categorie/jeans-enfant-garcon/jeans-enfant-garcon.component';
import { ShortsEnfantGarconComponent } from './pages_sous_categorie/shorts-enfant-garcon/shorts-enfant-garcon.component';
import { SacBebeGarconComponent } from './pages_sous_categorie/sac-bebe-garcon/sac-bebe-garcon.component';
import { PullBebeGarconComponent } from './pages_sous_categorie/pull-bebe-garcon/pull-bebe-garcon.component';
import { CompletBebeGarconComponent } from './pages_sous_categorie/complet-bebe-garcon/complet-bebe-garcon.component';
import { AccessoireBebeFilleComponent } from './pages_sous_categorie/accessoire-bebe-fille/accessoire-bebe-fille.component';
import { SacBebeFilleComponent } from './pages_sous_categorie/sac-bebe-fille/sac-bebe-fille.component';
import { PullBebeFilleComponent } from './pages_sous_categorie/pull-bebe-fille/pull-bebe-fille.component';
import { CompletBebeFilleComponent } from './pages_sous_categorie/complet-bebe-fille/complet-bebe-fille.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AcceuilComponent,
    PolitiqueDonneesComponent,
    AccessoireComponent,
    PanierProduitsComponent,
    AchatComponent,
    DescriptionComponent,
    ChemiseFemmeComponent,
    DescriptionVetementsComponent,
    ManteauVestesfemmeComponent,
    PullFemmeComponent,
    SacsFemmeComponent,
    PanierComponent,
    TeeShirtHommeComponent,
    SacsHommeComponent,
    ManteauVestesHommeComponent,
    JeansHommeComponent,
    PullEnfantFilleComponent,
    AccessoireEnfantFilleComponent,
    SacsEnfantFilleComponent,
    JeansEnfantFilleComponent,
    ShortsEnfantFilleComponent,
    SacEnfantGarconComponent,
    PullEnfantGarconComponent,
    JeansEnfantGarconComponent,
    ShortsEnfantGarconComponent,
    SacBebeGarconComponent,
    PullBebeGarconComponent,
    CompletBebeGarconComponent,
    AccessoireBebeFilleComponent,
    SacBebeFilleComponent,
    PullBebeFilleComponent,
    CompletBebeFilleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
