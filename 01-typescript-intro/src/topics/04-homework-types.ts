/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe2 {
    name: string;
    age: number;
    address: {
        calle: string;
        pais: string;
        ciudad: string;
    },
    showAddress:()=> string;
}

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress(): string;
}

interface Address{
    street: string;
    country: string;
    city: string;
}


const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};
