import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginPokemonComponent } from './pagin-pokemon/pagin-pokemon.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

const routes: Routes = [
  {path:'pagin-pokemon/:path',component: PaginPokemonComponent},
  {path: 'pokemon-details/:id',component: PokemonDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
