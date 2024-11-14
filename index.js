const input = prompt("enter Flavor")
const flavors = input.split(",")

console.log(flavors)
let flavorCounts = {}
flavors.forEach(flavor => {
    if (flavorCounts[flavor]) {
        flavorCounts[flavor]++
    }
    else {
        flavorCounts[flavor] = 1
    }


});
console.table(flavorCounts)