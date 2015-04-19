/**
 * Created by utking on 19.04.15.
 */
QuizEngine.module('Data', function (Data) {
    QuizEngine.Answers = Backbone.Collection.extend({
        model: Data.Answer
    });
});