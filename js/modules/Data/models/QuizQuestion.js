/**
 * Created by utking on 19.04.15.
 */
QuizEngine.module('Data', function (Data) {
    Data.QuizQuestion = Backbone.Model.extend({
        defaults: {
            question: null,
            chosenAnswer: null
        },

        initialize: function () {
            var q = this.get('question');

            if (_.isNumber(q) || _.isString(q)) {
                this.set('question', QuizEngine.module('Data').questions.getQuestion(q));
            }
        },

        isCorrect: function () {
            return this.get('chosenAnswer') === this.get('question').get('correctAnswer')
        },

        toJSON: function () {
            var data = Backbone.Model.prototype.toJSON;

            if (data.question && data.question.toJSON) {
                this.question = this.question.toJSON();
            }

            if (!data.id) {
                data.id = this.cid;
            }

            return data;
        }
    });
});