import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CollectionItemCard } from './components/collection-item-card/collection-item-card';
import { CollectionItem } from './models/collection-item';
import { SearchBar } from './components/search-bar/search-bar';

@Component({
  imports: [RouterOutlet, CollectionItemCard, SearchBar],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {

  coin! : CollectionItem;
  count = 0;

  searchText = "";

  constructor(){

    this.coin = new CollectionItem();
    this.coin.rarity = "Commune";
    this.coin.name = "Pièce de 1972";
    this.coin.description = "Pièce de 50 centimes";
    this.coin.price = 799;
  }

  incrementCount(){
    this.count++;
  }
}
