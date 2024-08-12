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
    }
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
