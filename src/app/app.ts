import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CollectionItemCard } from './components/collection-item-card/collection-item-card';
import { CollectionItem } from './models/collection-item';

@Component({
  imports: [RouterOutlet, CollectionItemCard],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  coin! : CollectionItem;

  constructor(){

    this.coin = new CollectionItem();
    this.coin.rarity = "Commune";
    this.coin.name = "Pièce de 1972";
    this.coin.description = "Pièce de 50 centimes";
    this.coin.price = 799;
  }
}
