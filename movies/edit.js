// import {inject} from 'aurelia-dependency-injection';
import {Router} from 'aurelia-router';
import {Validation} from 'aurelia-validation';
import {MovieData} from './movieData';

@inject(MovieData, Router, Validation)
export class Edit {
    constructor(movieData, router, validation) {
        this.data = movieData;

        this.router = router;

        this.validation = validation;
        //     .ensure('movie.title')
        //     .required()
        //     .length({ minimum: 3, maximum: 100 })
        //     .ensure('movie.releaseYear')
        //     .required()
        //     .on(this);
    }

    activate(params) {
        return this.data
            .getById(params.id)
            .then(movie => this.movie = movie);
    }

    save() {
        // let errors = this.validationController.validate();
        // console.log(errors);

        this.data
            .save(this.movie)
            .then(movie => {
                let url = this.router.generate('details', { id: movie.id });
                this.router.navigate(url);
            });
    }
}