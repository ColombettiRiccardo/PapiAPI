import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginPokemonComponent } from './pagin-pokemon/pagin-pokemon.component';

const routes: Routes = [
  {path:'pagin-pokemon/:path',component: PaginPokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
