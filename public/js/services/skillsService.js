app.service('skillsService', function () {
    this.getSkills = function () {
        return skills;
    };

    var skills = [
        {
            name: 'Node.js', type: 'Platform'
        },
        {
            name: 'AngularJS', type: 'Tool'
        },
        {
            name: 'Infrastructure as code', type: 'Technique'
        },
        {
            name: 'Scala', type: 'Language'
        },
        {
            name: 'Clojure', type: 'Language'
        },
        {
            name: 'Raphaël', type: 'Tool'
        },
        {
            name: 'D3.js', type: 'Tool'
        },
        {
            name: 'iOS', type: 'Platform'
        },
        {
            name: 'Jenkins', type: 'Tool'
        },
        {
            name: 'F#', type: 'Language'
        },
        {
            name: 'HAML', type: 'Language'
        },
        {
            name: 'Google Dart', type: 'Language'
        },
        {
            name: 'Google Go', type: 'Language'
        },
        {
            name: 'Git', type: 'Tool'
        },
        {
            name: 'Chef', type: 'Tool'
        },
        {
            name: 'Java8', type: 'Language'
        }
    ];

    for (var i = 0; i < skills.length; i++) {
        var want = (Math.floor(Math.random() * 10) % 3) + 1;
        var have = Math.floor(Math.random() * 10) % (want + 1);

        skills[i].have = have;
        skills[i].want = want;
        skills[i].starred = have < want && Math.random() < 0.5;
    }
});