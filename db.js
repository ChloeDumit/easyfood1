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
    category: "vegan",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      longinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    name: "Mushroom Wellington",
    price: "700",
  },

  {
    category: "gluten_free",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      longinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    name: "Chickpea Curry",
    price: "500",
  },
  {
    category: "gluten_free",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      longinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    name: "Chicken Pizza",
    price: "300",
  },
  {
    category: "gluten_free",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      longinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    name: "Garlic butter Steak",
    price: "300",
  },
  {
    category: "traditional",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      longinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    name: "Chicken Taquitos",
    price: "400",
  },
  {
    category: "vegan",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      longinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    name: "Carne Asada",
    price: "300",
  },
  {
    category: "veggie",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      longinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    name: "Ratatouille",
    price: "500",
  },
  {
    category: "vegan",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      longinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    name: "Vegan mac N cheese",
    price: "300",
  },
  {
    category: "veggie",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      longinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    name: "Veggie Burger",
    price: "200",
  },
  {
    category: "vegan",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      longinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    name: "Mushroom Stroganoff",
    price: "200",
  },
  {
    category: "traditional",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      longinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    name: "Chicken noodle soup",
    price: "300",
  },
  {
    category: "traditional",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      longinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    name: "Honey garlic shrimp",
    price: "700",
  },
  {
    category: "gluten_free",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      longinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    name: "Honey soy Salmon",
    price: "900",
  },
  {
    category: "veggie",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      longinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    name: "Eggplant Parmesan",
    price: "800",
  },
  {
    category: "traditional",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      longinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    name: "Broccoli soup",
    price: "350",
  },
  {
    category: "gluten_free",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      longinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    name: "Pizza",
    price: "600",
  },
  {
    category: "veggie",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    longinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    name: "Lasagna Soup",
    price: "800",
  },
  {
    category: "veggie",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    longinfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    name: "Chickpea Stew",
    price: "800",
  },
];
async function asyncCall(products) {
products.forEach((obj) => {
  db.collection("products")
    .add({
      name: obj.name,
      info: obj.info,
      longinfo: obj.longinfo,
      price: obj.price,
      category: obj.category,
    })
    .then((docRef) => {
      console.log("Product registered with ID: ", docRef.id);
    })
    .catch((error) => {
      console.log("Error adding document: ", error);
    });
});
}

asyncCall(products)