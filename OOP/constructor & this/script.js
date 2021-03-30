function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}


const yurii = new Person('Yurii', '5-03-1999');
console.log(yurii.calculateAge());
