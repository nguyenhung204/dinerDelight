import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCevP3Z0E30qo_HaQgXPhj0oW7bk0ZasIk",
  authDomain: "web1-hk2.firebaseapp.com",
  projectId: "web1-hk2",
  storageBucket: "web1-hk2.appspot.com",
  messagingSenderId: "1066525732699",
  appId: "1:1066525732699:web:398249d18008d82cb1b47e"
};
const app = initializeApp(firebaseConfig);
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const db = getFirestore();



async function fetchDataStater() {
  const docRef = collection(db, "khai vị");
  let fooditems = "";
  const querySnapshot = await getDocs(docRef);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    fooditems += renderFoodCard(item.name, item.price, item.img);
    //console.log(doc.id, " => ", doc.data());
    document.getElementById('foods-container').innerHTML = fooditems;
  });
}
async function fetchDataBeef() {
  const docRef = collection(db, "Bò");
  let fooditems = "";
  const querySnapshot = await getDocs(docRef);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    fooditems += renderFoodCard(item.name, item.price, item.img);
    //console.log(doc.id, " => ", doc.data());
    document.getElementById('foods-container').innerHTML = fooditems;
  });
}
async function fetchDataPork() {
  const docRef = collection(db, "heo");
  let fooditems = "";
  const querySnapshot = await getDocs(docRef);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    fooditems += renderFoodCard(item.name, item.price, item.img);
    //console.log(doc.id, " => ", doc.data());
    document.getElementById('foods-container').innerHTML = fooditems;
  });
}
async function fetchDataSeaFood() {
  const docRef = collection(db, "haiSan");
  let fooditems = "";
  const querySnapshot = await getDocs(docRef);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    fooditems += renderFoodCard(item.name, item.price, item.img);
    //console.log(doc.id, " => ", doc.data());
    document.getElementById('foods-container').innerHTML = fooditems;
  });
}
async function fetchDataWine() {
  const docRef = collection(db, "wine");
  let fooditems = "";
  const querySnapshot = await getDocs(docRef);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    fooditems += renderFoodCard(item.name, item.price, item.img);
    //console.log(doc.id, " => ", doc.data());
    document.getElementById('foods-container').innerHTML = fooditems;
  });
}
async function fetchDataDesert() {
  const docRef = collection(db, "Trang mieng");
  let fooditems = "";
  const querySnapshot = await getDocs(docRef);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    fooditems += renderFoodCard(item.name, item.price, item.img);
    //console.log(doc.id, " => ", doc.data());
    document.getElementById('foods-container').innerHTML = fooditems;
  });
}
const starter = document.querySelector('#starter');
const beef = document.querySelector('#beef');
const pork = document.querySelector('#pork');
const seafood = document.querySelector('#seaFood');
const wine = document.querySelector('#wine');
const dessert = document.querySelector('#dessert');



starter.addEventListener('click', function () {
  fetchDataStater();
});
beef.addEventListener('click', function () {
  fetchDataBeef();
});
pork.addEventListener('click', function () {
  fetchDataPork();
});
seafood.addEventListener('click', function () {
  fetchDataSeaFood();
});
wine.addEventListener('click', function () {
  fetchDataWine();
});
dessert.addEventListener('click', function () {
  fetchDataDesert();
});

fetchDataStater();











