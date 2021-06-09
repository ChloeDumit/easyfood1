const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyCYbWgOjzo_Q_O-fj4-KoPgJTJWcpfzrcM",
  authDomain: "easyfood-4d7ac.firebaseapp.com",
  projectId: "easyfood-4d7ac",
});

var db = firebase.firestore();

var products = [
  {
    name: "Hielo1",
    info: "kfkabfkasf",
    price: "300",
    category: "vegan"
  },

  {
    name: "Hielo125",
    info: "kfkabfkasf",
    price: "300",
    category: "vegan"
  },
];

products.forEach((obj) => {
  db.collection("products")
    .add({
      name: obj.name,
      info: obj.info,
      price: obj.price,
      category: obj.category
    })
    .then((docRef) => {
      console.log("producto registrado");
    })
    .catch((error) => {
      console.log("error");
    });
});
