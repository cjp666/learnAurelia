export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-validation')
        .plugin('aurelia-validatejs')
        .feature('bootstrap-validation');

    aurelia.start()
        .then(a => a.setRoot());
}