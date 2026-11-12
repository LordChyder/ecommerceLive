import { Component, signal } from '@angular/core';

interface Product {
  badge: string;
  brand: string;
  name: string;
  specs: string;
  oldPrice?: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-featured-products',
  imports: [],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css'
})
export class FeaturedProductsComponent {
  tabs = ['Destacados', 'Laptops', 'Gaming', 'Accesorios'];
  activeTab = signal('Destacados');

  products: Product[] = [
    {
      badge: 'OFERTA · -15%',
      brand: 'ASUS',
      name: 'Zenbook 14 OLED',
      specs: 'Intel Core Ultra 7 · 16 GB · 1 TB',
      oldPrice: 'US$ 1,299',
      price: 'US$ 1,099',
      image: 'laptop.jpg',
    },
    {
      badge: 'PRECIO ESPECIAL',
      brand: 'SAMSUNG',
      name: 'Odyssey G5 27"',
      specs: 'QHD · 165 Hz · 1 ms',
      oldPrice: 'US$ 329',
      price: 'US$ 279',
      image: 'laptop.jpg',
    },
    {
      badge: 'FAVORITO',
      brand: 'HYPERX',
      name: 'Cloud III Wireless',
      specs: 'Audio espacial · Hasta 120 h',
      oldPrice: 'US$ 159',
      price: 'US$ 129',
      image: 'laptop.jpg',
    },
    {
      badge: 'NUEVO',
      brand: 'ASUS',
      name: 'GeForce RTX 4070',
      specs: '12 GB GDDR6X · Triple ventilador',
      oldPrice: 'US$ 699',
      price: 'US$ 599',
      image: 'laptop.jpg',
    },
  ];

  selectTab(tab: string) {
    this.activeTab.set(tab);
  }
}
