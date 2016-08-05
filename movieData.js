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
}