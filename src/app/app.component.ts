import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { CategoriesComponent } from './sections/categories/categories.component';
import { FeaturedProductsComponent } from './sections/featured-products/featured-products.component';
import { GamingBannerComponent } from './sections/gaming-banner/gaming-banner.component';
import { ServicesComponent } from './sections/services/services.component';
import { CompanyComponent } from './sections/company/company.component';
import { ContactComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    CategoriesComponent,
    FeaturedProductsComponent,
    GamingBannerComponent,
    ServicesComponent,
    CompanyComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
