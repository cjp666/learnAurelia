import {inject, NewInstance} from 'aurelia-dependency-injection';
import {Router} from 'aurelia-router';
import {MovieData} from './movieData';
import {ValidationController} from 'aurelia-validation';
import {ValidationRules} from 'aurelia-validatejs';
import {validateTrigger} from 'aurelia-validation';

@inject(MovieData, Router, NewInstance.of(ValidationController), ValidationRules)
export class Edit {
    constructor(movieData, router, validationController) {
        this.data = movieData;
        this.router = router;

        this.validationController = validationController;
        this.validationController.validateTrigger = validateTrigger.manual;

        this.validationRules = ValidationRules
            .ensure('movie.title')
            .required()
            .length({ minimum: 3, maximum: 100 })
            .ensure('movie.releaseYear')
            .required()
            .on(this.validationController);
    }

    activate(params) {
        return this.data
            .getById(params.id)
            .then(movie => this.movie = movie);
    }

    save() {
        let errors = this.validationController.validate();
        console.log(errors);

        this.data
            .save(this.movie)
            .then(movie => {
                let url = this.router.generate('details', { id: movie.id });
                this.router.navigate(url);
            });
    }
}