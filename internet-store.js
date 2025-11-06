catalog = [
    {
        item: "Iphone",
        type: "Elektronika",
        price: 1399,
    },
    {
        item: "Krekls",
        type: "Apģērbi",
        price: 30,
    },
    {
        item: "Cepure",
        type: "Apģērbi",
        price: 15,
    },
    {
        item: "Dators",
        type: "Elektronika",
        price: 999,
    },
    {
        item: "Soma",
        type: "Apģērbi",
        price: 50,
    },
]


function getByType(list, type) {
    for (i = 0; i < list.length; i++) {
        if (list[i].type == type) {
            console.log("Produkts: " + list[i].item + "\nKategorija: " + type);
            console.log("-----------");
        }
    }
}

function getSum(list) {
    sum = 0;
    for (i = 0; i < list.length; i++) {
        sum += list[i].price;
    }
    console.log("Kopējā summa: " + sum);
    return sum;
}

console.log("Apģērbi:")
getByType(catalog, "Apģērbi")
console.log("Elektronika:")
getByType(catalog, "Elektronika")
getSum(catalog);