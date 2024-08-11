import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccessoireComponent } from './pages_sous_categorie/accessoire/accessoire.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AchatComponent } from './pages/achat/achat.component';
import { DescriptionComponent} from './pages_sous_categorie/description/description.component';
import { HomeComponent } from './pages/home/home.component';
import { PanierComponent } from './pages/panier/panier.component';
import { PolitiqueDonneesComponent } from './pages/politique-donnees/politique-donnees.component';
import { ChemiseFemmeComponent } from './pages_sous_categorie/chemise-femme/chemise-femme.component';
import { DescriptionVetementsComponent } from './pages_sous_categorie/description-vetements/description-vetements.component';
import { ManteauVestesComponent } from './pages_sous_categorie/manteau-vestes/manteau-vestes.component';
import { PullFemmeComponent } from './pages_sous_categorie/pull-femme/pull-femme.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AcceuilComponent,
    PolitiqueDonneesComponent,
    AccessoireComponent,
    PanierComponent,
    AchatComponent,
    DescriptionComponent,
    ChemiseFemmeComponent,
    DescriptionVetementsComponent,
    ManteauVestesComponent,
    PullFemmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
