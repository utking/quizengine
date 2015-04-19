/**
 * Created by utking on 19.04.15.
 */
QuizEngine.module('Data', function (Data) {
    Data.QuizQuestions = Backbone.Collection.extend({
        model: Data.QuizQuestion
    });
});