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



  constructor() {
    const allCollections = this.collectionService.getAll();

    if(allCollections.length > 0){
      this.selectedCollection.set(allCollections[0]);
    }
  }

  addGenericItem() {
    const collection = this.selectedCollection();
    if(collection){
        const storedCollection = this.collectionService.addItem(
        collection, new CollectionItem());
        
        this.selectedCollection.set(storedCollection);
    }

  }


}
