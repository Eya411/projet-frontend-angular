import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  productId: string | null = null;
  product: any | undefined;

  products = [
    {
      id: '0001224852',
      image: 'assets/images/accessoire1.jpg',
      title: 'Accessoire Pour Les Cheveux',
      description: 'Collection de scrunchies à bande élastique en soie tendance et de pinces à cheveux perles',
      price: '20DT',
      colors: 'Beige, Noir, Rouge, Blanc',
      size: 'Unique'
    },
    {
      id: '0011224852',
      image: 'assets/images/accessoire2.jpg',
      title: 'Parure Perles',
      description: "Parure Perles d'eau douce -Bijoux -Accessoires- Cadeaux pour femmes",
      price: '80DT',
      colors: 'Blanc',
      size: 'Unique'
    },
    {
      id: '301224852',
      image: 'assets/images/accessoire3.png',
      title: 'Bracelet fantaisie femme',
      description: 'Bracelet fantaisie femme à porter en toutes les occasions.',
      price: '40DT',
      colors: 'Beige, Noir, Blanc',
      size: 'Unique'
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
