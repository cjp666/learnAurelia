export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-validation')
        .plugin('aurelia-validatejs');

    aurelia.start()
        .then(a => a.setRoot());
}