/**
 * Created by utking on 16.04.15.
 */
var QuizEngine = (function() {
    var Application = Marionette.Application.extend({});

    var application = new Application();

    application.addRegions({
        header: '[data-region=header]',
        body: '[data-region=body]',
        footer: '[data-region=footer]'
    });

    application.on('initialize:after', function () {
        Backbone.history.start();
    })

    return application;
})();