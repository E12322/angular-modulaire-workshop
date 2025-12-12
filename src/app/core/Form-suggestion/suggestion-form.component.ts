// src/app/features/suggestions/suggestion-form/suggestion-form.component.ts
import { Component } from '@angular/core';
import { Suggestion } from '../../../models/suggestion';
import { ListSuggestionComponent } from '../../core/list-suggestion/list-suggestion.component';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrls: ['./suggestion-form.component.css']
})
export class SuggestionFormComponent {
  title:string=''; description:string=''; category:string='';

  constructor(private list: ListSuggestionComponent) {}

  addSuggestion(){
    if(!this.title || !this.description || !this.category) return;
    const newSuggestion:Suggestion = {
      id:this.list.suggestions.length+1,
      title:this.title,
      description:this.description,
      nbLikes:0,
      category:this.category,
      date:new Date(),
      status:'en_attente'
    };
    this.list.suggestions.push(newSuggestion);
    this.title=''; this.description=''; this.category='';
  }
}
