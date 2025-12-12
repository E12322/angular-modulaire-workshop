import { Injectable } from '@angular/core';
import { Suggestion } from '../models/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  private suggestions: Suggestion[] = [];
  private currentId = 1;

  getAll(): Suggestion[] {
    return this.suggestions;
  }

  addSuggestion(s: Suggestion) {
    s.id = this.currentId++;
    this.suggestions.push(s);
  }
}
