/**
 * Created by utking on 19.04.15.
 */
QuizEngine.module('Data', function (Data) {
    Data.Answers = Backbone.Collection.extend({
        model: Data.Answer
    });
});