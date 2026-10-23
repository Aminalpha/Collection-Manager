import { Component, input } from '@angular/core';
import { CollectionItem } from '../../models/collection-item';

@Component({
  imports: [],
  selector: 'app-collection-item-card',
  styleUrl: './collection-item-card.scss',
  templateUrl: './collection-item-card.html',
})
export class CollectionItemCard {
  item = input(new CollectionItem());

}
