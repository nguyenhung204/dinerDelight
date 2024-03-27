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




async function fetchDataKhaiVi() {
  const docRef = collection(db, "khai vị");
  let fooditems = "";
  const querySnapshot = await getDocs(docRef);
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    fooditems += renderFoodCard(item.name, item.price, item.img);
    console.log(doc.id, " => ", doc.data());
  });
  
}
  const khaivi = document.querySelector('#khaivi');

   khaivi.addEventListener('click', function(){
    fetchDataKhaiVi();
    document.getElementById('foods-container').innerHTML = "fooditems";
  }
  );
   




