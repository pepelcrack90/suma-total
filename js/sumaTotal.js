const IVA = 1.17
class sumaTotal extends Array {
    sum(key) {
        return this.reduce((a, b) => (a + (b[key] || 0)) * IVA, 0);
    }
}
const productos = new sumaTotal(...[
    { description: 'plantas', Amount: 5000 },
    { description: 'decoracion', Amount: 1000 },
    { description: 'materiales', Amount: 75000 },
    { description: 'muebles', Amount: 3500 },
    { description: 'electrodomesticos', Amount: 25000 },
]);
if (confirm("quiere ver su carrito?")) {
    console.table(productos)
}

console.log("su total mas impuestos es:", productos.sum('Amount'));