/**
 * Created by utking on 19.04.15.
 */
QuizEngine.module('Data', function (Data) {
    Data.Category = Backbone.Model.extend({
        defaults: {
            name: '',
            questions: null
        },

        initialize: function () {
            var questions = this.get('questions');
            this.set('questions', new Data.Questions(questions));
        },

        toJSON: function() {
            var data = Backbone.Model.prototype.toJSON.call(this);
            if (data.questions && data.questions.toJSON) {
                data.questions = data.questions.toJSON();
            }
            if (!data.id) {
                data.id = this.cid;
            }

            return data;
        },

        getQuestion: function (id) {
            return this.get('questions').get(id);
        },

        getQuestions: function () {
            return this.get('questions').models;
        }

    });
});