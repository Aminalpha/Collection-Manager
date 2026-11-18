import { Component, computed, inject, model, signal } from '@angular/core';
import { Collection } from '../../models/collection';
import { CollectionService } from '../../services/collection-service';
import { CollectionItem } from '../../models/collection-item';
import { SearchBar } from '../../components/search-bar/search-bar';
import { CollectionItemCard } from '../../components/collection-item-card/collection-item-card';

@Component({
  imports: [SearchBar, CollectionItemCard],
  selector: 'app-collection-detail',
  styleUrl: './collection-detail.scss',
  templateUrl: './collection-detail.html',
})
export class CollectionDetail {

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
