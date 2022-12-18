const skills = [
    {id: 3438973498, language: 'javascript', frontEnd: true, backEnd: false},
    {id: 4390767759, language: 'css', frontEnd: true, backEnd: false},
    {id: 3994686935, language: 'html', frontEnd: true, backEnd: false},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills
}

function getOne(frontEnd) {
    return skills.find(skill => skill.frontEnd === frontEnd );
}

function create(skill) {
    skills.push(skill.language);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}