/**
 * Created by utking on 19.04.15.
 */
QuizEngine.module('Data', function (Data) {
    Data.Question = Backbone.Model.extend({
        defaults: {
            id: null,
            text: '',
            correctAnswer: 0,
            answers: []
        },

        initialize: function () {
            var answers = this.get('answers');
            this.set('answers', new Data.Answers(answers))
        },

        toJSON: function () {
            var data = Backbone.Model.prototype.toJSON.call(this);
            if (data.answers && data.answers.toJSON) {
                data.answers = data.answers.toJSON();
            }
            if (!data.id) {
                data.id = this.cid;
            }

            return data;
        }
    });
});