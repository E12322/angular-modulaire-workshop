// src/app/core/list-suggestion/list-suggestion.component.ts
import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent {
  searchText: string = '';
  favorites: Suggestion[] = [];

  suggestions: Suggestion[] = [
    { id:1, title:'Exemple 1', description:'Desc 1', nbLikes:0, category:'Technologie', date:new Date(), status:'en_attente' },
    { id:2, title:'Exemple 2', description:'Desc 2', nbLikes:0, category:'Événements', date:new Date(), status:'acceptee' },
    { id:3, title:'Exemple 3', description:'Desc 3', nbLikes:0, category:'Ressources Humaines', date:new Date(), status:'refusee' }
  ];

  like(s: Suggestion) { s.nbLikes!++; }
  addToFavorites(s: Suggestion) { if(!this.favorites.includes(s)) this.favorites.push(s); }

  get filteredSuggestions() {
    const q = this.searchText.toLowerCase();
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(q) || s.category.toLowerCase().includes(q)
    );
  }
}
