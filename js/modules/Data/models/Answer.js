/**
 * Created by utking on 19.04.15.
 */
QuizEngine.module('Data', function (Data) {
    Data.Answer = Backbone.Model.extend({
        defaults: {
            text: ''
        }
    });
});