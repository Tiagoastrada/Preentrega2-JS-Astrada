let welcome = prompt("bienvenido! cuál es tu nombre?")
console.log(`Bienvenido ${welcome}`)

const Remeras = [
    {name:"Remera clasica manga corta", price:2200},
    {name:"Remera térmica deportiva", price:3200},
    {name:"Remera clasica manga larga", price:2400}
]

const Buzos = [
    {name:"Buzo Overzice para verano", price:3600},
    {name:"Buzo Algodón para invierno", price:4800},
    {name:"Buzo Algodón sin capucha", price:4700}
]

const Carritodecompra = []
let total = 0

let hamName = Remeras.map(product => product.name)
let hamPrice = Remeras.map(product => product.price)

lomName = Buzos.map (product => product.name)
lomPrice = Buzos.map (product => product.price)

function opcionRemeras() {
    selection = Number(prompt(`Remeras disponibles:
    1- ${hamName[0]}: $${hamPrice[0]}
    2- ${hamName[1]}: $${hamPrice[1]}
    3- ${hamName[2]}: $${hamPrice[2]}
    
    4- Salir`
    ))

    while (selection != "") {
    if (selection == 1) {
        carrito.push(Remeras[0]);
        total += hamPrice[0];
        opcionRemeras()
        break;
    } else if(selection == 2) {
        carrito.push(Remeras[1]);
        total += hamPrice[1];
        opcionRemeras()
        break;
    } else if(selection == 3) {
        carrito.push(Remeras[2]);
        total += hamPrice[2];
        opcionRemeras()
        break;
    } else if(selection == 4) {
        interact();
        break;
    }else {
        alert("Elija entre las opciones que se muestran");
        continue;
    }
    }

}

function opcionBuzos() {
    selection = Number(prompt(`Buzos disponibles:
    1- ${lomName[0]}: $${lomPrice[0]}
    2- ${lomName[1]}: $${lomPrice[1]}
    3- ${lomName[2]}: $${lomPrice[2]}
    
    4- Salir`
    ))

    while (selection != "") {
        if (selection == 1) {
            carrito.push(Buzos[0]);
            total += lomPrice[0];
            opcionBuzos()
            break;
        } else if(selection == 2) {
            carrito.push(Buzos[1]);
            total += lomPrice[1];
            opcionBuzos()
            break;
        } else if(selection == 3) {
            carrito.push(Buzos[2]);
            total += lomPrice[2];
            opcionBuzos()
            break;
        } else if(selection == 4) {
            interact();
            break;
        }else{
            alert("Elija entre las opciones que se muestran");
            continue;
        }
    };
}

function showCarrito() {

    carrito.sort( (a, b) => {
    if(a.price < b.price) {
        return -1;
    }if(a.price > b.price) {
        return 1;
    }if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
    } if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
    }
        return 0;
    });

    console.log(`**CARRITO DE COMPRAS**`)

    for (let articles of carrito) {
        console.log(articles.name + " $" + articles.price)
    };
    console.log(`.
    Total: $${total}`);

    buy = Number(prompt(`
    1- realizar compra
    2- Volver al menu`
    ))

    if (buy === 1) {
        alert("gracias por su compra")
        console.log("COMPRA REALIZADA")
    } else {
        interact();
    }
}

function deleteCarrito() {
    borrar = Number(prompt("¿qué prenda quieres eliminar?"))

    carPrices = carrito.map (carProducts => carProducts.price);
    total -= carPrices[borrar-1];

    carrito.splice(borrar-1, 1);

    showCarrito();
}

function interact() {
    while (welcome != "") {
        let Catálogo = Number(prompt(`Elija que prendas quiere ver:
        1- Remeras
        2- Buzos
        3- Ver Carrito
        4- Eliminar del carrito
        
        5-Salir`
        ));

        if (Catálogo === 1) {
            opcionRemeras();
            break;
        } else if(Catálogo === 2) {
            opcionBuzos();
            break;
        } else if(Catálogo === 3) {
            showCarrito();
            break;
        } else if(Catálogo === 4) {
            deleteCarrito();
            break;
        } else if(Catálogo === 5) {
            break;
        } else {
            alert("Por favor elija entre las prendas disponibles");
            continue;
        }


    }
}

interact();
