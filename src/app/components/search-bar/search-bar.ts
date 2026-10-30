import { Component, model, output, OutputEmitterRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-search-bar',
  styleUrl: './search-bar.scss',
  templateUrl: './search-bar.html',
})
export class SearchBar {

  search = model("Initial");
  
  searchButtonClicked: OutputEmitterRef<void> = output<void>();
  
  searchClicked() {
    this.searchButtonClicked.emit();
  }

}
