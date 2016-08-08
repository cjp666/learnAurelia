export class App {
    configureRouter(config, router) {
        this.router = router;

        config.map([
            { route: ['', 'list'], moduleId: 'movies/list', title: 'List', nav: true, name: 'home' },
            { route: 'about', moduleId: 'about/about', title: 'About', nav: true },
            { route: 'details/:id', moduleId: 'movies/details', title: 'Details', nav: false, name: 'details' },
            { route: 'edit/:id', moduleId: 'movies/edit', title: 'Edit', nav: false, name: 'edit' },
            { route: 'create', moduleId: 'movies/edit', title: 'Create', nav: false, name: 'create' }
        ]);
    }
}
