class Person{
    constructor(firstName, secondName, dob){
        this.firstName = firstName;
        this.secondName = secondName;
        this.birthday = new Date(dob);
    }

    greeting(){
        return `Hello, ${this.fullName()}`;
    }

    personAge(){
        const diff = Date.now() - this.birthday.getTime();
        const personAge = new Date(diff);
        return personAge.getUTCFullYear() - 1970;
    }

    fullName(){
        return `${this.firstName} ${this.secondName}`;
    }

    getsMarried(newSecondName){
        this.secondName = newSecondName;
    }
}

const yurii = new Person('Yurii', 'Zakharchyn', '5-03-1999');
console.log(yurii.personAge());
console.log(yurii.fullName());
console.log(yurii.greeting());

yurii.getsMarried('Vlasov');
console.log(yurii.fullName());
console.log(yurii.greeting());

