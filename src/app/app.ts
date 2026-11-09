import { ChangeDetectionStrategy, Component, computed, effect, inject, input, model, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CollectionItemCard } from './components/collection-item-card/collection-item-card';
import { CollectionItem } from './models/collection-item';
import { SearchBar } from './components/search-bar/search-bar';
import { Collection } from './models/collection';
import { CollectionService } from './services/collection-service';

@Component({
  imports: [RouterOutlet, CollectionItemCard, SearchBar],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {

  private collectionService = inject(CollectionService);
  coin! : CollectionItem;
  linx! : CollectionItem;
  stamp! : CollectionItem;

  search = model("");

  selectedCollection = signal<Collection | null>(null);

  collectionItem = computed(
    () => {
      const allItems = this.selectedCollection()?.items;
      return allItems?.filter(item => 
                              item.name.toLowerCase()
                              .includes( this.search()
                              .toLowerCase())
                            )
    }
  );



  constructor(){

    this.coin = new CollectionItem();
    this.coin.rarity = "Commune";
    this.coin.name = "Pièce de 1972";
    this.coin.description = "Pièce de 50 centimes";
    this.coin.price = 799;

    this.linx = new CollectionItem();

    this.stamp = new CollectionItem();
    this.stamp.name = "Vieux timbre";
    this.stamp.description = "Un vieux timbre.";
    this.stamp.rarity = "Rare";
    this.stamp.price = 777;
    
    const defaultCollection = new Collection();
    defaultCollection.title = "Default collection";
    defaultCollection.items = [
      this.coin,
      this.linx,
      this.stamp
    ]

    this.selectedCollection.set(defaultCollection);

    this.collectionService.hello();

  }


}
