const kilometers = prompt("quanti chilometri vuoi percorrere?")
const age = prompt("quanti anni hai?")

let discount = 0;

if (age <= 18) {
    discount = 20
} else if (age >= 65) {
    discount = 40
}

let price = 0.21 * kilometers

if (discount != 0) {
    price -= (price / 100) * discount
}

console.log(`prezzo: €${price.toFixed(2)}`);
