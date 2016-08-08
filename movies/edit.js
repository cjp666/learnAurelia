import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {MovieData} from './movieData';

@inject(MovieData, Router)
export class Edit {
    constructor(movieData, router) {
        this.data = movieData;
        this.router = router;
    }

    activate(params) {
        return this.data
            .getById(params.id)
            .then(movie => this.movie = movie);
    }

    save() {
        this.data
            .save(this.movie)
            .then(movie => {
                let url = this.router.generate('details', { id: movie.id });
                this.router.navigate(url);
            });
    }
}