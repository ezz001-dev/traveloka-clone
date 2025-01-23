import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [
    FormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  @Output() onSearch: EventEmitter<any> = new EventEmitter<any>()

  searchVal: string = '';

  searchObj = {
    name: '',
    date: '',
    capacity: ''
  }

  bindSearch() {
    this.onSearch.emit(this.searchObj)
  }


}
