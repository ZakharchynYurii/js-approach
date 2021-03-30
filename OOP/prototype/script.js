function Person(firstName, secondName, dob) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.birthday = new Date(dob);
}

Person.prototype.personAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return ageDate.getUTCFullYear() - 1970;
}

Person.prototype.fullName = function(){
    return `${this.firstName} ${this.secondName}`;
}

const yurii = new Person('Yurii', 'Zakharchyn', '5-03-1999');
console.log(yurii.personAge());
console.log(yurii.fullName());