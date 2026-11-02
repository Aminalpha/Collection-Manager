import { ChangeDetectionStrategy, Component, computed, effect, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CollectionItemCard } from './components/collection-item-card/collection-item-card';
import { CollectionItem } from './models/collection-item';
import { SearchBar } from './components/search-bar/search-bar';

@Component({
  imports: [RouterOutlet, CollectionItemCard, SearchBar],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {

  coin! : CollectionItem;
  linx! : CollectionItem;
  
  count = 0;
  searchText = "";

  itemList: CollectionItem[] = [];
  selectedItemIndex = signal(0);
  selectedItem = computed(()=>{
      return this.itemList[this.selectedItemIndex()];
    }
  );

  logEffect = effect(()=>{
    console.log(this.selectedItemIndex(), this.selectedItem());
  })

  constructor(){

    this.coin = new CollectionItem();
    this.coin.rarity = "Commune";
    this.coin.name = "Pièce de 1972";
    this.coin.description = "Pièce de 50 centimes";
    this.coin.price = 799;

    this.linx = new CollectionItem();
    
    this.itemList = [
      this.coin,
      this.linx
    ]
  }

  incrementCount(){
    this.count++;
  }

  incrementIndex(){

    this.selectedItemIndex.update(
      (news) => {
        return (news+1) % 2
      }

    );
  }
}
