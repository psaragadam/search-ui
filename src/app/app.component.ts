import { Component } from '@angular/core';

import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search-ui';
  errorMessage = '';
  searchText='';
  searchResponse!: String[];
  loading = false;
  constructor(private searchService:SearchService){

  }

  public getSearchResults() {
    this.loading = true;
    this.errorMessage = '';
    this.searchService.getSearchData(this.searchText)
        .subscribe((response: String[]) => {this.searchResponse = response;},
                   (error: { message: string; }) => {
                       this.errorMessage = error.message; this.loading = false; 
                    },
                    () => {this.loading = false;})
  }
  
}
