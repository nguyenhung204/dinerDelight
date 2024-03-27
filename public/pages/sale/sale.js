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


async function fetchDataSale() {
  const docRef = collection(db, "sale");
  let saleitems = "";
  const querySnapshot = await getDocs(docRef);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    saleitems += renderCardSale(item.img,item.dname,item.fdate, item.ldate);
    console.log(doc.id, " => ", doc.data());
  });
  console.log(querySnapshot);
  document.getElementById("sales-container").innerHTML = saleitems;
  console.log(saleitems);
}
fetchDataSale();