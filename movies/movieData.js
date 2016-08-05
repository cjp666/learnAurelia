import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class MovieData {
    constructor(httpClient) {
        this.http = httpClient;
    }

    getAll() {
        return this.http
            .get('/movies.json')
            .then(response => {
                return response.content;
            });
    }

    getById(id) {
        return this.http
            .get('/movies.json')
            .then(response => {
                var movies = response.content;
                var findId = parseInt(id);
                for (var index = 0; index < movies.length; index++) {
                    if (movies[index].id === findId) {
                        return movies[index];
                    }
                }
                return null;
            });
    }
}