import { Component, output, OutputEmitterRef } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-search-bar',
  styleUrl: './search-bar.scss',
  templateUrl: './search-bar.html',
})
export class SearchBar {

  searchButtonClicked: OutputEmitterRef<void> = output<void>();
  
  searchClicked() {
    this.searchButtonClicked.emit();
  }
}
