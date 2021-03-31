const personPrototype = {
    greeting: function () {
        return `${this.firstName} ${this.secondName}`;
    },
    getsMarried: function (newSecondName) {
        this.secondName = newSecondName;
    }
}

const mary = Object.create(personPrototype);
mary.firstName = "Mary";
mary.secondName = 'Traver';
console.log(mary.greeting());
mary.getsMarried('Bradly');
console.log(mary.greeting());

const yurii = Object.create(personPrototype, {
    firstName: {value: 'Yurii'},
    secondName: {value: 'Zakharchyn'}
})
console.log(yurii.greeting());