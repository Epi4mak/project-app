import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { RegComponent } from './reg/reg.component';
import { StarComponent } from './star/star.component';





const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "reg", component: RegComponent},
  {path: "login", component: LoginComponent},
  {path: "delivery", component: DeliveryComponent},
  {path: "basket", component: BasketComponent},
  {path: "stars", component: StarComponent},
  {path: "products/:model_id", component: ProductsComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
