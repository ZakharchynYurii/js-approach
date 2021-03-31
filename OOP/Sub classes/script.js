class Person{
    constructor(firstName, secondName, dob){
        this.firstName = firstName;
        this.secondName = secondName;
        this.birthday = new Date(dob);
    }

    greeting(){
        return `Hello, ${this.fullName()}`;
    }

    fullName(){
        return `${this.firstName} ${this.secondName}`;
    }
}

class Customer extends Person{
    constructor(firstName, secondName, dob, phone, membership) {
        super(firstName, secondName, dob);

        this.phone = phone;
        this.membership = membership;
    }

    greeting() {
        return `${super.greeting()}, welcome to the club`;
    }
}



const yurii = new Person('Yurii', 'Zakharchyn', '5-03-1999');
const taras = new Customer('Taras', 'Zayats', '10-21-2000', '333-333-3333', 'standart');

console.log(yurii.greeting());
console.log(taras.greeting());



