var app = angular.module('app', ['ui.bootstrap', 'ngGrid']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'SkillsController',
            templateUrl: 'partials/listSkills.html'
        })
        .otherwise({ redirectTo: '/' });
});
