import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./products/feature/product-shell/product-shell.module').then((module) => module.ProductShellModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./shopping-cart/feature/shopping-cart-shell/shopping-cart-shell.module').then((module) => module.ShoppingCartShellModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/feature/profile-shell/profile-shell.module').then((module) => module.ProfileShellModule)
  },
  {
    path: '',
    redirectTo: 'product/list',
    pathMatch: 'full',
  }

];

@NgModule({
  imports: [
    // PreloadAllModules ist eine Strategie im Angular-Router, die alle Routenmodule im Hintergrund lädt,
    // sobald die Hauptanwendung vollständig geladen ist. Dies verbessert die anfänglichen Ladezeiten, da nur die
    // für die initiale Anzeige benötigten Module geladen werden müssen. Sobald diese Module geladen sind,
    // beginnt Angular mit dem Hintergrundladen aller anderen Module, wodurch der Benutzer nahezu sofort
    // auf diese zugreifen kann, sobald sie benötigt werden.
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
