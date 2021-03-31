function Person(firstName, secondName) {
    this.firstName = firstName;
    this.secondName = secondName
}

Person.prototype.greeting = function () {
    return `Hello ${this.firstName} ${this.secondName}`;
}

function Customer(firstName, secondName, phone, membership) {
    Person.call(this, firstName, secondName);
    this.phone = phone;
    this.membership = membership;
}

Customer.prototype = Object.create(Person);
Customer.prototype.constructor = Customer;

Customer.prototype.greeting = function () {
    return `Hello ${this.firstName} ${this.secondName} welcome to the club`;
}

const yurii = new Person('Yurii', 'Zakharchyn');
console.log(yurii.greeting());
const taras = new Customer('Tares', 'Zayats', '333-333-3333', 'standart');
console.log(taras.greeting());