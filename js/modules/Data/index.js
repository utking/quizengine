/**
 * Created by utking on 19.04.15.
 */
QuizEngine.module('Data', function(Data){
    Data.addInitializer(function(options) {
        Data.questions = new Data.Categories((options && options.data && options.data.questions) || []);
        Data.quizzes = new Data.Quizzes((options && options.data && options.data.quizzes) || []);
    });

    Data.addFinalizer(function() {
        delete Data.questions;
        delete Data.quizzes;
    });

});