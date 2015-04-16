/**
 * Created by utking on 16.04.15.
 */
QuizEngine.Router = Marionette.AppRouter.extend({
    rotes: {
        "" : "redirectToMain"
    },

    redirectToMain: function() {
        Backbone.history.navigate('list', {trigger: true, replace: true});
    }
});

QuizEngine.addInitializer(function() {
    QuizEngine.router = new QuizEngine.Router();
});