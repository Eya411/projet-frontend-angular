import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description-vetements',
  templateUrl: './description-vetements.component.html',
  styleUrls: ['./description-vetements.component.css']
})
export class DescriptionVetementsComponent implements OnInit {
  productId: string | null = null;
  product: any | undefined;

  products = [
    {
      id: '31224852',
      image: 'assets/images/chemise_femme_1.png',
      title: 'CHEMISE',
      description: 'Chemise femme tendance',
      price: '80DT',
      colors: 'Beige, Noir, Rouge, Blanc',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '711224852',
      image: 'assets/images/chemise_femme_2.png',
      title: 'CHEMISE SATIN',
      description: 'Chemise femme tendance',
      price: '100DT',
      colors: 'Blanc, Noir, Bleu',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '91224852',
      image: 'assets/images/chemise_femme_3.png',
      title: 'CHEMISE',
      description: 'Chemise femme tendance',
      price: '40DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '224852',
      image: 'assets/images/manteau1.png',
      title: 'MANTEAU FEMME',
      description: 'Superbe Manteau long boutons à motifs mastour pour saison froide',
      price: '280DT',
      colors: 'Beige, Noir, Rouge, Blanc',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '1224852',
      image: 'assets/images/manteau_femme2.jpg',
      title: 'MANTEAU DOUBLE FACE',
      description: 'Manteau femme tendance',
      price: '200DT',
      colors: 'Marron, Noir, Bleu',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '52242',
      image: 'assets/images/veste_femme1.png',
      title: 'VESTE TENDANCE CHIC',
      description: 'Veste en plusieurs Couleurs tendance',
      price: '150DT',
      colors: 'Beige, Noir, Blanc, Bleu, Rose',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '0001224852',
      image: 'assets/images/pull-femme-1.png',
      title: 'PULL FEMME',
      description: 'Pull chaud et tendance',
      price: '70DT',
      colors: 'Beige, Noir, Rouge, Blanc',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '122223003',
      image: 'assets/images/pull-femme-2.jpg',
      title: 'PULL FEMME MODERNE',
      description: 'Pull femme tendance',
      price: '50DT',
      colors: 'Marron, Noir, Bleu',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '555452242',
      image: 'assets/images/pull-femme-3.png',
      title: 'PULL FEMME CHIC',
      description: 'Pull en plusieurs couleurs',
      price: '50DT',
      colors: 'Beige, Noir, Blanc, Bleu, Rose',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '71224852',
      image: 'assets/images/tee-shirt-homme1.png',
      title: 'PULL HOMME',
      description: 'Pull homme tendance en coton disponible en plusieurs couleurs et tailles pour tous les genres',
      price: '80DT',
      colors: 'Beige, Noir, Rouge, Blanc, Marron, Bleu',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '0311224852',
      image: 'assets/images/tee-shirt-homme2.png',
      title: 'PULL HOMME',
      description: 'Pull homme tendance disponible en plusieurs couleurs et tailles pour tous les genres',
      price: '70DT',
      colors: 'Blanc, Noir, Bleu',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '781224852',
      image: 'assets/images/tee-shirt-homme3.png',
      title: 'PULL HOMME',
      description: 'Pull homme tendance en coton disponible en plusieurs couleurs et tailles pour tous les genres',
      price: '50DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '712',
      image: 'assets/images/manteau-homme1.png',
      title: 'MANTEAU HOMME',
      description: 'Manteau homme tendance disponible en plusieurs couleurs et tailles pour tout les genres',
      price: '180DT',
      colors: 'Beige, Noir, Rouge, Blanc, Marron, Bleu',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '031',
      image: 'assets/images/manteau-homme2.png',
      title: 'MANTEAU HOMME',
      description: 'Manteau homme tendance disponible en plusieurs couleurs et tailles pour tout les genres',
      price: '170DT',
      colors: 'Blanc, Noir , Bleu',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '781',
      image: 'assets/images/manteau-homme3.png',
      title: 'MANTEAU HOMME',
      description: 'Manteau homme tendance disponible en plusieurs couleurs et tailles pour tout les genres',
      price: '280DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '222',
      image: 'assets/images/jean-homme1.png',
      title: 'JEANS HOMME',
      description: 'Jeans homme tendance disponible en plusieurs couleurs et tailles pour tous les genres',
      price: '80DT',
      colors: 'Beige, Noir, Rouge, Blanc, Marron, Bleu',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '0111',
      image: 'assets/images/jean-homme2.png',
      title: 'JEANS HOMME',
      description: 'Pantallon jeans homme tendance disponible en plusieurs couleurs et tailles pour tous les genres',
      price: '70DT',
      colors: 'Blanc, Noir, Bleu',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '8882',
      image: 'assets/images/jean-homme3.png',
      title: 'JEANS HOMME',
      description: 'Pantallon jean homme tendance en coton disponible en plusieurs couleurs et tailles pour tous les genres',
      price: '70DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'L, M, S, XL, XS'
    },
    {
      id: '1022',
      image: 'assets/images/pull-enfant-fille1.png',
      title: 'PULL',
      description: 'Pull fille tendance',
      price: '50DT',
      colors: 'Beige, Noir, Rouge, Blanc',
      size: '6, 7, 8, 9, 10, 11'
    },
    {
      id: '555',
      image: 'assets/images/pull-enfant-fille2.png',
      title: 'PULL',
      description: 'Pull fille tendance',
      price: '50DT',
      colors: 'Blanc, Noir, Bleu',
      size: '6, 7, 8, 9, 10, 11'
    },
    {
      id: '912',
      image: 'assets/images/pull-enfant-fille3.png',
      title: 'PULL',
      description: 'Pull fille enfant tendance',
      price: '40DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: '6, 7, 8, 9, 10, 11'
    }, {
      id: '551111022',
      image: 'assets/images/jean-enfant-fille1.png',
      title: 'JEAN FILLE',
      description: 'Jean tendance fille',
      price: '45DT',
      colors: 'Bleu, Noir, Beige',
      size: 'M, L, S, XL, XS'
    },
    {
      id: '992255555',
      image: 'assets/images/jean-enfant-fille2.png',
      title: 'JEAN FILLE',
      description: 'Jean fille tendance',
      price: '35DT',
      colors: 'Blanc, Noir, Bleu',
      size: 'Unique'
    },
    {
      id: '001299912',
      image: 'assets/images/jean-enfant-fille3.png',
      title: 'JEAN FILLE',
      description: 'Jean fille',
      price: '40DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'Unique'
    }, {
      id: '56971022',
      image: 'assets/images/short-enfant-fille1.png',
      title: 'SHORT FILLE',
      description: 'Short tendance fille',
      price: '35DT',
      colors: 'Bleu, Noir, Beige',
      size: 'M, L, S, XL, XS'
    },
    {
      id: '1155',
      image: 'assets/images/short-enfant-fille2.png',
      title: 'SHORT FILLE',
      description: 'Short fille tendance',
      price: '35DT',
      colors: 'Blanc, Noir, Bleu',
      size: 'S, M, L, XL, XS'
    },
    {
      id: '99912',
      image: 'assets/images/short-enfant-fille3.png',
      title: 'SHORT FILLE',
      description: 'Short fille tendance multicouleur',
      price: '30DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'M, L, S, XL, XS'
    }, {
      id: 'o7845',
      image: 'assets/images/pull-enfant-garcon1.png',
      title: 'PULL ENFANT',
      description: 'Pull tendance pour garçon',
      price: '39.900DT',
      colors: 'Bleu, Noir, Beige',
      size: 'Standard'
    },
    {
      id: 'u33341155',
      image: 'assets/images/pull-enfant-garcon2.png',
      title: 'PULL ENFANT',
      description: 'Pull tendance pour garçon',
      price: '39.900DT',
      colors: 'Blanc, Noir, Bleu',
      size: 'Standard'
    },
    {
      id: 'r0001399912',
      image: 'assets/images/pull-enfant-garcon3.png',
      title: 'PULL ENFANT',
      description: 'Pull tendance pour garçon',
      price: '25DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'Standard'
    },{
      id: 'ffo7845',
      image: 'assets/images/jean-enfant-garcon1.png',
      title: 'JEAN ENFANT',
      description: 'Jean tendance pour garçon',
      price: '49.900DT',
      colors: 'Bleu, Noir, Beige',
      size: 'L, S, M'
    },
    {
      id: 'ddu33341155',
      image: 'assets/images/jean-enfant-garcon2.png',
      title: 'JEAN ENFANT',
      description: 'Jean tendance pour garçon',
      price: '39.900DT',
      colors: 'Blanc, Noir, Bleu',
      size: 'L, S, M'
    },
    {
      id: 'ccr0001399912',
      image: 'assets/images/jean-enfant-garcon3.png',
      title: 'JEAN ENFANT',
      description: 'Jean tendance pour garçon',
      price: '45DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'L, S, M'
    },  {
      id: '55ffo7845',
      image: 'assets/images/short-enfant-garcon1.png',
      title: 'SHORT ENFANT',
      description: 'Short tendance pour garçon',
      price: '39.900DT',
      colors: 'Bleu, Noir, Beige',
      size: 'L, S, M'
    },
    {
      id: 'bddu33341155',
      image: 'assets/images/short-enfant-garcon2.png',
      title: 'SHORT ENFANT',
      description: 'Short tendance pour garçon',
      price: '39.900DT',
      colors: 'Blanc, Noir, Bleu',
      size: 'L, S, M'
    },
    {
      id: 'lccr0001399912',
      image: 'assets/images/short-enfant-garcon3.png',
      title: 'SHORT ENFANT',
      description: 'Short tendance pour garçon',
      price: '35DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'L, S, M'
    },{
      id: '66nnp7845',
      image: 'assets/images/pull-bebe-garcon1.png',
      title: 'PULL Bébé',
      description: 'Pull pour nouveau né',
      price: '39.900DT',
      colors: 'Bleu, Noir, Beige',
      size: 'Unique'
    },
    {
      id: 'kkn',
      image: 'assets/images/pull-bebe-garcon2.png',
      title: 'PULL Bébé',
      description: 'Pull pour nouveau né',
      price: '39.900DT',
      colors: 'Blanc, Noir, Bleu',
      size: 'Unique'
    },
    {
      id: 'p000n',
      image: 'assets/images/pull-bebe-garcon3.png',
      title: 'PULL Bébé',
      description: 'Pull pour nouveau né',
      price: '35DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'Unique'
    },{
      id: '6466nnp7845',
      image: 'assets/images/complet-bebe-garcon1.png',
      title: 'COMPLET POUR Bébé',
      description: 'Complet pour nouveau né',
      price: '59.900DT',
      colors: 'Bleu, Noir, Beige',
      size: 'UNIQUE'
    },
    {
      id: '664kkn',
      image: 'assets/images/complet-bebe-garcon2.png',
      title: 'COMPLET Bébé',
      description: 'Complet pour nouveau né',
      price: '89.900DT',
      colors: 'Blanc, Noir, Bleu',
      size: 'UNIQUE'
    },
    {
      id: '331p000n',
      image: 'assets/images/complet-bebe-garcon3.png',
      title: 'COMPLET Bébé',
      description: 'Complet pour nouveau né',
      price: '55DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'UNIQUE'
    },{
      id: 'pull11022',
      image: 'assets/images/pull-bebe-fille1.png',
      title: 'PULL bébé FILLE',
      description: 'Pull bébé fille',
      price: '35DT',
      colors: 'Beige, Noir, Rouge, Blanc',
      size: 'Unique'
    },
    {
      id: 'pullnbvl55555',
      image: 'assets/images/pull-bebe-fille2.png',
      title: 'PULL Bébé FILLE',
      description: 'Pull fille pour nouveau né',
      price: '30DT',
      colors: 'Blanc, Noir, Bleu, Violet, Rose',
      size: 'Unique'
    },
    {
      id: 'pullazeo99912',
      image: 'assets/images/pull-bebe-fille3.png',
      title: 'PULL Bébé FILLE',
      description: 'Pull fille pour nouveau né',
      price: '29.900DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'Unique'
    },{
      id: 'cmp1022',
      image: 'assets/images/complet-bebe-fille1.png',
      title: 'COMPLET Bébé FILLE',
      description: 'Complet bébé fille',
      price: '35DT',
      colors: 'Beige, Noir, Rouge, Blanc',
      size: 'Unique'
    },
    {
      id: 'cmpnbvl55555',
      image: 'assets/images/complet-bebe-fille2.png',
      title: 'COMPLET Bébé FILLE',
      description: 'Complet fille pour nouveau né',
      price: '45DT',
      colors: 'Blanc, Noir, Bleu, Violet, Rose',
      size: 'Unique'
    },
    {
      id: 'cmpazeo99912',
      image: 'assets/images/complet-bebe-fille3.png',
      title: 'COMPLET Bébé FILLE',
      description: 'Complet fille pour nouveau né',
      price: '39.900DT',
      colors: 'Beige, Noir, Blanc, Bleu',
      size: 'Unique'
    },
    
    
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');

    if (this.productId) {
      this.product = this.products.find(p => p.id === this.productId);
    }

    if (!this.product) {
      console.error('Produit non trouvé !');
    }
  }

  showModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
  }

  closeModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
  }
}
