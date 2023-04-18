const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// Buenas tardes!! Mi nombre es Gabriel Lloveras y esta es mi actividad E2!!

// { A }
//Las pizzas que tengan un id impar.
const pizzasImpares = pizzas.filter(function(pizza) {
  return pizza.id % 2 !== 0;
});

console.log('Las pizzas impares son: ', pizzasImpares);

// { B }
//¿Hay alguna pizza que valga menos de $600?
const pizza600 = pizzas.filter(function(pizza){
  return pizza.precio <= 600;
})

console.log('Las pizzas que valen menos de $600 son: ',pizza600);

// { C }
//El nombre de cada pizza con su respectivo precio.
console.log('Conozca nuestros precios y especialidades!!!');
const pizzaXPrecio = pizzas.map(function(pizza){
  return console.log(`La ${pizza.nombre} tiene un valor de ${pizza.precio}`)
})

// { D }
//Todos los ingredientes de cada pizza 
const pizzaIngredientes = pizzas.forEach(function(pizza) {
  console.log(`Ingredientes de la pizza ${pizza.nombre}:`);
  pizza.ingredientes.forEach(function(ingrediente) {
    console.log(`- ${ingrediente}`);
  });
});

