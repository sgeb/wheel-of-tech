app.controller('SkillsController', function ($scope, skillsService) {
    skills = skillsService.getSkills();
    for (var i = 0; i < skills.length; i++) {
        if (skills[i].have >= skills[i].want) {
            skills[i].status = "completed";
        }
        else if (skills[i].starred) {
            skills[i].status = "starred";
        }
        else if (skills[i].want == 0) {
            skills[i].status = "not_wanted"
        }
        else {
            skills[i].status = "in_progress";
        }
    }

    $scope.skills = skills;

    $scope.gridOptions = {
        plugins: [new ngGridFlexibleHeightPlugin()],
        data: 'skills',
        columnDefs: [
            {
                field: 'status',
                displayName: String.fromCharCode(160), // 160 is a protected space = &nbsp;
                cellTemplate: 'partials/tmplCellStatus.html',
                width: 23
            },
            {
                field: 'name',
                displayName: 'Name',
                width: 250
            },
            {
                field: 'type',
                displayName: 'Type',
                width: 150
            },
//            {field: 'have', displayName: 'Have (Random)'},
//            {field: 'want', displayName: 'Want (Random)'},
            {
                field: 'have',
                displayName: 'Progress',
                cellTemplate: 'partials/tmplCellProgress.html',
                width: 150
            }
        ],
        enableRowSelection: false,
        enableSorting: true,
        sortInfo: { fields: ['status'], directions: ['desc']}
    };

});