document.querySelector('.btn1').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function () {
        if(this.status === 200){
            const customerDiv = document.getElementById('customer');
            const customerFromJson = JSON.parse(this.responseText);
            customerDiv.innerHTML = `
                <ul>
                    <li>${customerFromJson.id}</li>
                    <li>${customerFromJson.name}</li>
                    <li>${customerFromJson.company}</li>
                    <li>${customerFromJson.phone}</li>
                </ul>
            `;
        }
    }

    xhr.send();

})

document.querySelector('.btn2').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function () {
        if(this.status === 200){
            const customersDiv = document.getElementById('customers');
            const customers = JSON.parse(this.responseText);
            let output = '';

            customers.forEach(customer => {
                output += `
                    <ul>
                        <li>${customer.id}</li>
                        <li>${customer.name}</li>
                        <li>${customer.company}</li>
                        <li>${customer.phone}</li>
                    </ul>  
                `;
            })

            customersDiv.innerHTML = output;
        }
    }

    xhr.send();
})



