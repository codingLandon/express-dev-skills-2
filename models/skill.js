const skills = [
    {language: 'javascript', frontEnd: true, backEnd: false},
    {language: 'css', frontEnd: true, backEnd: false},
    {language: 'html', frontEnd: true, backEnd: false},
    {language: 'python', frontEnd: false, backEnd: true},
    {language: 'ruby', frontEnd: false, backEnd: true}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills
}

function getOne(frontEnd) {
    return skills.find(skill => skill.frontEnd === frontEnd );
}