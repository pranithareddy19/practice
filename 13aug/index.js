var customer = {
    name: "ravi",
    accno:18647364,
    balance: 90000,
    isPreviliged: false,
    cards: ['credit card', 'debit card'],
    address: {
                   city: "Hyderabad",
                   state: "Telangana"
             },
     getCustomerDetails: function(){
              return this.name+ "\t"+ this.accno+ "\t"+ this.balance;
     }
}

console.log(customer.name);

console.log(customer.balance);

console.log(customer.getCustomerDetails());

console.log(customer.address.city);

console.log(customer['name']);

console.log(customer.cards);