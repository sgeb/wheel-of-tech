app.controller('SkillsController', function ($scope, skillsService) {
    skills = skillsService.getSkills();
    for (var i = 0; i < skills.length; i++) {
        skills[i].reached = skills[i].have >= skills[i].want;
    }
    $scope.skills = skills;

    $scope.gridOptions = {
        plugins: [new ngGridFlexibleHeightPlugin()],
        data: 'skills',
        columnDefs: [
            {field: 'name', displayName: 'Name'},
            {field: 'type', displayName: 'Type'},
//            {field: 'have', displayName: 'Have (Random)'},
//            {field: 'want', displayName: 'Want (Random)'},
            {
                displayName: 'Progress',
                cellTemplate: 'partials/tmplCellProgress.html'
            },
            {
                field: 'reached',
                displayName: 'Reached',
                cellTemplate: 'partials/tmplCellReached.html'
            }
        ],
        enableRowSelection: false,
        sortInfo: { fields: ['name'], directions: ['asc']}
    };

});