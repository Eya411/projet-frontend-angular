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
import { ManteauVestesComponent } from './pages_sous_categorie/manteau-vestes/manteau-vestes.component';
import { PullFemmeComponent } from './pages_sous_categorie/pull-femme/pull-femme.component';
import { SacsFemmeComponent } from './pages_sous_categorie/sacs-femme/sacs-femme.component';

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
    ManteauVestesComponent,
    PullFemmeComponent,
    SacsFemmeComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
