app.controller('SkillsController', function ($scope, skillsService) {
    skills = skillsService.getSkills();
    for (var i = 0; i < skills.length; i++) {
        skills[i].reached = skills[i].have >= skills[i].want;
    }
    $scope.skills = skills;

    $scope.gridOptions = {
        data: 'skills',
        columnDefs: [
            {field: 'name', displayName: 'Name'},
            {field: 'type', displayName: 'Type'},
            {field: 'have', displayName: 'Have (Random)'},
            {field: 'want', displayName: 'Want (Random)'},
            {
                field: 'reached',
                displayName: 'Reached',
                cellTemplate: '<div class="ngCellText" ng-class="' +
                    'col.colIndex() && {\'reached-yes\': row.getProperty(col.field), \'reached-no\': !row.getProperty(col.field)}' +
                    '"><span ng-cell-text>{{ (row.getProperty(col.field)) }}</span></div>'
            }
        ],
        enableRowSelection: false,
        sortInfo: { fields: ['name'], directions: ['asc']}
    };

});