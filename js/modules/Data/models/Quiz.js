/**
 * Created by utking on 19.04.15.
 */
QuizEngine.module('Data', function (Data) {
    QuizEngine.Quiz = Backbone.Model.extend({
        defaults: {
            name: '',
            questions: null
        },

        initialize: function () {
            this.set('questions', new Data.QuizQuestions(this.get('questions')));

            this.listenTo(this.get('questions'), 'change:chosenAnswer', this._transformEvent);
        },

        getCurrentQuestion: function () {
            return this.get('questions').find(function (question){
                if (question.get('chosenAnswer') === null) {
                    return true;
                }
            });
        },

        getCurrentPosition: function () {
            return this.get('questions').reduce(function (memo, question, index){
                if (question.get('chosenAnswer') === null && memo === 0) {
                    return index + 1;
                }

                return memo;
            }, 0);
        },

        isComplete: function () {
            return this.get('questions').where({chosenAnswer: null}).length === 0;
        },

        isInProgress: function () {
            return !this.isComplete();
        },

        getScore: function () {
            if (this.isInProgress()) {
                return null;
            }

            return Math.round(this.getCorrect() / this.get('questions').length * 100);
        },

        getCorrect: function () {
            return this.get('questions').filter(function (question){
                return question.isCorrect();
            }).length;
        },

        toJSON: function () {
            var data = Backbone.Model.prototype.toJSON.call(this);
            if (data.questions && data.questions.toJSON) {
                data.questions = data.questions.toJSON();
            }

            return data;
        },

        _transformEvent: function (question, index) {
            this.trigger('question:answered', question, index);
            if (this.isComplete()) {
                this.trigger('completed');
            }
        }
    });
});