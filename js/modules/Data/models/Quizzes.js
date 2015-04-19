/**
 * Created by utking on 19.04.15.
 */
QuizEngine.module('Data', function (Data) {
    Data.Quizzes = Backbone.Collection.extend({
        model: Data.Quiz
    });
});