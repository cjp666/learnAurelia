import {inject, NewInstance} from 'aurelia-dependency-injection';
import {Router} from 'aurelia-router';
import {MovieData} from './movieData';
import {ValidationController, validateTrigger} from 'aurelia-validation';
import {required, email, ValidationRules} from 'aurelia-validatejs';

@inject(MovieData, Router, NewInstance.of(ValidationController))
export class Edit {
    constructor(movieData, router, controller) {
        this.data = movieData;

        this.router = router;

        this.controller = controller;
        this.controller.validateTrigger = validateTrigger.manual;
    }

    activate(params) {
        return this.data
            .getById(params.id)
            .then(movie => this.movie = movie);
    }

    save() {
        let errors = this.controller.validate();
        console.log(errors);

        // this.data
        //     .save(this.movie)
        //     .then(movie => {
        //         let url = this.router.generate('details', { id: movie.id });
        //         this.router.navigate(url);
        //     });
    }
}

ValidationRules
    .ensure('movie.title').required()
    .ensure('movie.releaseYear').required()
    .on(Edit);