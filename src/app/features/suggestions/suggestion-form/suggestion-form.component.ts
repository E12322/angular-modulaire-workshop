import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuggestionService } from '../../../services/suggestion.service';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html'
})
export class SuggestionFormComponent implements OnInit {

  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

  form: any; // IMPORTANT

  constructor(
    private fb: FormBuilder,
    private service: SuggestionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[A-Z][a-zA-Z]*$')
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(30)
      ]],
      category: ['', Validators.required],
      date: [{ value: new Date(), disabled: true }],
      status: [{ value: 'en attente', disabled: true }]
    });
  }

  submit() {
    if (this.form.invalid) return;

    const formValues = this.form.getRawValue();

    const newSuggestion: Suggestion = {
      id: 0, // id auto-incrément dans le service
      title: formValues.title!,
      description: formValues.description!,
      category: formValues.category!,
      date: formValues.date!,
      status: formValues.status!,
      nbLikes: 0
    };

    this.service.addSuggestion(newSuggestion);
    this.router.navigate(['/suggestions']);
  }
}
