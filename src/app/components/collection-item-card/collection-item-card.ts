import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-collection-item-card',
  styleUrl: './collection-item-card.scss',
  templateUrl: './collection-item-card.html',
})
export class CollectionItemCard {
  rarity = input("Legendary");
  name = input("Excalibur");
  description = input("A legendary sword of unmatched sharpness and history.");
  price = input(199);

}
