let products = [
  // 1
  {
    title: "Leatherly Sofa",
    price: "1624,99 $",
    category: "Furniture",
    brand: "La-Z-Boy.",
    color: "Steel",
    img: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd633af54/images/700000/704909.jpg?sfrm=jpg",
    reting: 6.1,
    summary:
      "Designed to provide comfort around the clock, our versatile sleepers are quality-crafted for lasting durability and feature standard ComfortCore cushions for soft but firm support as you sit and relax. Inside, you’ll find a luxurious Supreme Comfort™ mattress, perfect for providing sweet dreams through the night.",
  },
  // 2
  {
    title: "Wooden Tables",
    price: "624,99 $",
    category: "Furniture",
    brand: "Lazurit.",
    color: "Board color",
    img: "https://mnogomebeli.com/upload/iblock/1b3/1b34a3646e39946844b2d9b0268c8279.jpg",
    reting: 6.5,
    summary:
      "Available in queen, full and twin mattress sizes, our sleep sofas, loveseats and chairs accommodate rooms of any size. Perfectly proportioned, our twin sleep chairs make the most of small spaces, while our sleep sofas and loveseats easily transform a den or living room into a cozy guest room. With these sleepers, there’s always room to stay the night.",
  },
  //   3
  {
    title: "Advanced Rotak 660",
    price: "324,99 $",
    category: "Graden",
    brand: "Bosch",
    color: "Black with Blue",
    img: "https://www.ies.uz/wp-content/uploads/2020/02/color-combination-1-scaled.jpg",
    reting: 8.2,
    summary:
      "Kupit' Elektricheskaya gazonokosilka Bosch Advanced Rotak 660 s dostavkoy po Tashkente, Tashkentskoy oblasti, Andizhan, Bukhara, Dzhizak, Kashkadar'ya, Navoiy, Namangan, Samarkand, Surkhandar'ya, Syrdar'ya, Fergana, Khorezm, Karakalpakstan. V rassrochku bez kredita v rassrochku - tseny, otzyvy, kharakteristiki, katalog Elektricheskaya gazonokosilka Bosch Advanced Rotak 660",
  },
  //   4
  {
    title: "VT-55WX",
    price: "162,99 $",
    category: "Water Cooler",
    brand: "Vital",
    color: "bright gray",
    img: "https://www.coolershop.ru/image/cache/catalog/kulery/s-holodilnikom/AEL-LC-AEL-47b-white-silver-01-800x800.jpg",
    reting: 4.9,
    summary:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
  },
  //    5
  {
    title: "Leatherly Sofa",
    price: "624,99 $",
    category: "TV box",
    brand: "Xiaomi",
    color: "Black",
    img: "https://img.gkbcdn.com/p/2018-11-08/xiaomi-mi-box-s-international-version-1571976982059._w500_p1_.jpg",
    reting: 6.1,
    summary:
      "Xiaomi Mi Box S TV box is based on Amlogic S905X and has 4 Cortex-A53 cores. Mali-450 is used as an accelerator. 2 GB of RAM is enough to perform all tasks. The amount of flash memory is 8 GB. The set-top box is equipped with Android 8.1 Oreo OS and the Android TV proprietary shell, which allows it to connect the TV to popular video resources, download various applications from Google Play, play and listen to music. The remote works via Bluetooth, and it has buttons for launching various video services such as Netflix and Live TV, as well as the ability to use the Google Assistant voice assistant, thanks to which you can control the set-top box by issuing voice commands",
  },
  //  mashrab aka
  {
    title: "Redmi Note 9",
    price: "200$",
    category: "Phone",
    brand: "Mi",
    color: "Red",
    img: "https://texnomart.uz/images/gallery/product/83833/13904/cart.jpg",
    reting: 7.8,
    summary:
      "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab veritatis aut quos quam temporibus, magnam eius ducimus libero. Voluptatibus, facilis?",
  },

  //Maishiy Texnikalar
  {
    title: "Avalon AVL-WM 1610, White",
    price: "600$",
    category: "home appliances",
    brand: "Avalon",
    color: "White",
    img: "https://olcha.uz/image/original/products/g0qzVTlg7L1Ob41GWng2bGAxIIQdMycBuErMN6cIdAyNvnogx2YgbdwNENDz.jpg",
    reting: 8,
    summary:
      "Buy Washing machine Avalon AVL-WM 1610, White with delivery In installments without a loan in installments - prices, reviews, specifications, catalog Washing machine",
  },
  {
    title: "LG GC-B459SBDZ",
    price: "800$",
    category: "home appliances",
    brand: "LG",
    color: "Black",
    img: "https://olcha.uz/image/original/products/q8xo4aI3PQgINd7NIJjJzvMKE4tVNINUr6akzJcUiqFrUripivZ4RJUGMVHo.jpeg",
    reting: 8.2,
    summary:
      "Buy Refrigerator LG GC-B459SBDZ with delivery. In installments without credit in installments - prices, reviews, specifications, catalog Refrigerator LG GC-B459SBDZ",
  },
  {
    title: "Artel VCC0220,",
    price: "120$",
    category: "home appliances",
    brand: "Artel",
    color: "Black",
    img: "https://olcha.uz/image/original/products/Axz9nhZESknXe0sex4z48VXfVnxuFcXRFXTOCQvYpeSppLvzb3QJDuHlKt0b.jpg",
    reting: 8,
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab veritatis aut quos quam temporibus, magnam eius ducimus libero. Voluptatibus, facilis?",
  },
  {
    title: "Samsung MG30T5018AK",
    price: "100$",
    category: "home appliances",
    brand: "Samsung",
    color: "black",
    img: "https://olcha.uz/image/original/products/Gt1Q5vbVz725qaNCvzZgpIx33BbFZmvhRvEp2f7ifUlUoaxG580gk0jDdT31.jpeg",
    reting: 7.8,
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab veritatis aut quos quam temporibus, magnam eius ducimus libero. Voluptatibus, facilis?",
  },
  {
    title: "Goodwell GWC 6401 4W",
    price: "500$",
    category: "home appliances",
    brand: "Goodwell",
    color: "White",
    img: "https://olcha.uz/image/original/products/a6XFfUpTmOfkMzoPMe27jsIIGNv1Urdb3wOQNAiiDKkgiehtWyc3UJ3LmAHT.jpeg",
    reting: 9,
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab veritatis aut quos quam temporibus, magnam eius ducimus libero. Voluptatibus, facilis?",
  },
  // tohir aka
  {
    title: "Car discs",
    price: "340$",
    category: "avto",
    brand: "NewStyle 003 R15",
    color: "Bluee",
    img: "https://olcha.uz/image/200x200/products/aQR8xaNgvM6hqqzNhoQbgDEf872hqPz0ufNyxYOneRxn7kkywoPsJSoIcSsh.jpeg",
    reting: 7.1,
    summary:
      "Buy car disc NewStyle 003 R15 4 pieces at a low price. Payment without credit - on olcha.uz. Tashkent, Tashkent region, Andijan, Bukhara, Jizzakh, Kashkadarya, Navoi, Namangan, Samarkand, Surkhandarya, Syrdarya, Fergana, Khorezm, Karakalpakstan - fast delivery",
  },
  {
    title: "Steering wheel for car",
    price: "180$",
    category: "avto",
    brand: "Rul Mercedes Tiptronic",
    color: "Black",
    img: "https://olcha.uz/image/200x200/products/lh4aH0Wl6N2yJgBAyTtxwgy3lX9oMRTSbHwJw8TKaAGZ5vPAkyvlKfLFHEDi.jpeg",
    reting: 6.3,
    summary:
      "Buy steering wheel Mercedes Tiptronic at a low price. Payment without credit",
  },
  {
    title: "Car fara",
    price: "230$",
    category: "avto",
    brand: "Audi dizayn",
    color: "Red",
    img: "https://olcha.uz/image/200x200/products/9fWzL90Tr8j5ft86LsSNbAHuP1X9fsEDcAwfhLKK8qt7eTjUhKCgq910GiuB.jpeg",
    reting: 8,
    summary:
      "Buy Chevrolet Malibu 2 taillights at low prices. Credit Free Headlight Chevrolet Malibu 2 term payment, guaranteed.",
  },
  {
    title: "Car audio",
    price: "100$",
    category: "avto",
    brand: "Pioneer TS-6965V3",
    color: "Black",
    img: "https://olcha.uz/image/200x200/products/Nl2J99SvfXNoW5JwrhG3UgncmasXHbJX8rMQ51dptdKazwJ36iLH3i3YiGZR.jpeg",
    reting: 6,
    summary:
      "Buy Acoustics Pioneer TS-6965V3 at low prices. Credit-free Acoustics Pioneer TS-6965V3 term payment, guaranteed.",
  },
  {
    title: "Car Radar",
    price: "98$",
    category: "avto",
    brand: "Lenovo V7 AHD",
    color: "Black and red",
    img: "https://olcha.uz/image/200x200/products/CtN50tdQVgVnPeDtgJIOyk95zRTeRzfBjf4K3U26gF5HOszManXnaAu8SJDa.jpeg",
    reting: 7.1,
    summary:
      "Buy Lenovo V7 AHD at low prices. Lenovo V7 AHD term payment without credit, guaranteed.",
  },
];
// Rasimlar 200x200 bo'liwi wart
