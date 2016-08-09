import {inject, NewInstance} from 'aurelia-dependency-injection';
import {Router} from 'aurelia-router';
import {MovieData} from './movieData';
import {ValidationController, validateTrigger} from 'aurelia-validation';
import {required, ValidationRules} from 'aurelia-validatejs';

@inject(MovieData, Router, NewInstance.of(ValidationController))
export class Edit {

    constructor(movieData, router, controller) {
        this.data = movieData;

        this.router = router;

        this.movieTitle = '';
        this.movieReleaseYear = '';

        this.controller = controller;
        this.controller.validateTrigger = validateTrigger.change;
    }

    activate(params) {
        return this.data
            .getById(params.id)
            .then(movie => {
                this.movie = movie;
                this.movieTitle = movie.title;
                this.movieReleaseYear = movie.releaseYear;
            });
    }

    save() {
        let errors = this.controller.validate();
        if (errors.length > 0) {
            return;
        }

        this.movie.title = this.movieTitle;
        this.movie.releaseYear = this.movieReleaseYear;
        this.data
            .save(this.movie)
            .then(movie => {
                let url = this.router.generate('details', { id: movie.id });
                this.router.navigate(url);
            });
    }
}

ValidationRules
    .ensure('movieTitle').required()
    .ensure('movieReleaseYear').required()
    .on(Edit);