import { Component } from '@angular/core';

interface Category {
  label: string;
  icon: 'laptop' | 'desktop' | 'component' | 'accessory' | 'peripheral' | 'service';
}

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories: Category[] = [
    { label: 'Laptops', icon: 'laptop' },
    { label: 'Computadoras', icon: 'desktop' },
    { label: 'Componentes', icon: 'component' },
    { label: 'Accesorios', icon: 'accessory' },
    { label: 'Periféricos', icon: 'peripheral' },
    { label: 'Servicios', icon: 'service' },
  ];
}
