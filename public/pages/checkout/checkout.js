
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const db = getFirestore();
// const docRef = doc(db,"menu","oYJiIZgXI8fcHgePEysV");
// const docSnap = await getDoc(docRef);
// console.log(docSnap.data());

    const data = [
        {
            price: 10000,
            name: "Salad cá hồi",
            img: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60017509_saladtom_1.jpg"
        },
        {
            price: 10000,
            name: "Salad mùa xuân",
            img: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60017509_saladtom_1.jpg"
        },
        {
            price: 10000,
            name: "Há cảo truyền thống Hàn Quốc",
            img: "https://brand-pcms.ggg.systems/media/catalog/product/cache/fccf9bc1c56510f6f2e84ded9c30a375/6/0/60017509_saladtom_1.jpg"
        }
    ];


    const foodContainer = document.getElementById("foods-container");
    if (foodContainer) {
        let allItems = "";
        data.forEach(item => {
            const foodCard = renderCard(item.name, item.price, item.img);
            allItems +=  foodCard;
        });
        foodContainer.innerHTML = allItems;
    }


loadData();