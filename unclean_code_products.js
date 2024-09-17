let products=[
    { id: 1, name: 'Laptop', cost: 999 },
    { id: 2, name: 'Smartphone', cost: 599 },
    { id: 3, name: 'Headphones', cost: 199 }
];

function getProduct (id) {
    for (let product of products) {
        if (product.id == id) {
            return product;
        }
    }
    return null;
}

function addProduct (name, cost) {
    let maxId = 0;
    for (let product of products) {
        if( product.id > maxId ) {
            maxId = product.id;
        }
    }
    products.push({ id: maxId + 1, name: name, cost: cost });
}

function listProduct() {
    for (let product of products) {
        console.log(product.name + " costs " + product.cost + "€")
    };
}

// Use functions
let product1= getProduct(2);
console.log(product1);
addProduct("Tablet", 399);
listProduct();