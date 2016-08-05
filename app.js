import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class App {
    constructor(httpClient) {
        this.message = '';
        this.http = httpClient;
    }

    activate() {
        return this.http
            .get('/movies.json')
            .then(response => {
                this.movies = response.content;
            });
    }
}
