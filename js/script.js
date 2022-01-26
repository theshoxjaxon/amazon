let products = [
  // 1
  {
    id: 1,
    title: "Leatherly Sofa",
    price: "$1624,95 ",
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
    id: 1,
    title: "Wooden Tables",
    price: "$624,95 ",
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
    id: 1,
    title: "Advanced Rotak 660",
    price: "$324,95 ",
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
    id: 1,
    title: "VT-55WX",
    price: "$162,95 ",
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
    id: 1,
    title: "Leatherly Sofa",
    price: "$624,95 ",
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
    id: 1,
    title: "Redmi Note 9",
    price: "$200",
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
    id: 1,
    title: "Avalon AVL-WM 1610, White",
    price: "$600,95",
    category: "home appliances",
    brand: "Avalon",
    color: "White",
    img: "https://olcha.uz/image/original/products/g0qzVTlg7L1Ob41GWng2bGAxIIQdMycBuErMN6cIdAyNvnogx2YgbdwNENDz.jpg",
    reting: 8,
    summary:
      "Buy Washing machine Avalon AVL-WM 1610, White with delivery In installments without a loan in installments - prices, reviews, specifications, catalog Washing machine",
  },
  {
    id: 1,
    title: "LG GC-B459SBDZ",
    price: "$800,95",
    category: "home appliances",
    brand: "LG",
    color: "Black",
    img: "https://olcha.uz/image/original/products/q8xo4aI3PQgINd7NIJjJzvMKE4tVNINUr6akzJcUiqFrUripivZ4RJUGMVHo.jpeg",
    reting: 8.2,
    summary:
      "Buy Refrigerator LG GC-B459SBDZ with delivery. In installments without credit in installments - prices, reviews, specifications, catalog Refrigerator LG GC-B459SBDZ",
  },
  {
    id: 1,
    title: "Artel VCC0220,",
    price: "$120,95",
    category: "home appliances",
    brand: "Artel",
    color: "Black",
    img: "https://olcha.uz/image/original/products/Axz9nhZESknXe0sex4z48VXfVnxuFcXRFXTOCQvYpeSppLvzb3QJDuHlKt0b.jpg",
    reting: 8,
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab veritatis aut quos quam temporibus, magnam eius ducimus libero. Voluptatibus, facilis?",
  },
  {
    id: 1,
    title: "Samsung MG30T5018AK",
    price: "$100,95",
    category: "home appliances",
    brand: "Samsung",
    color: "black",
    img: "https://olcha.uz/image/original/products/Gt1Q5vbVz725qaNCvzZgpIx33BbFZmvhRvEp2f7ifUlUoaxG580gk0jDdT31.jpeg",
    reting: 7.8,
    summary:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab veritatis aut quos quam temporibus, magnam eius ducimus libero. Voluptatibus, facilis?",
  },
  {
    id: 1,
    title: "Goodwell GWC 6401 4W",
    price: "$500,95",
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
    id: 1,
    title: "Car discs",
    price: "$340,95",
    category: "avto",
    brand: "NewStyle 003 R15",
    color: "Bluee",
    img: "https://olcha.uz/image/200x200/products/aQR8xaNgvM6hqqzNhoQbgDEf872hqPz0ufNyxYOneRxn7kkywoPsJSoIcSsh.jpeg",
    reting: 7.1,
    summary:
      "Buy car disc NewStyle 003 R15 4 pieces at a low price. Payment without credit - on olcha.uz. Tashkent, Tashkent region, Andijan, Bukhara, Jizzakh, Kashkadarya, Navoi, Namangan, Samarkand, Surkhandarya, Syrdarya, Fergana, Khorezm, Karakalpakstan - fast delivery",
  },
  {
    id: 1,
    title: "Steering wheel for car",
    price: "$180,95",
    category: "avto",
    brand: "Rul Mercedes Tiptronic",
    color: "Black",
    img: "https://olcha.uz/image/200x200/products/lh4aH0Wl6N2yJgBAyTtxwgy3lX9oMRTSbHwJw8TKaAGZ5vPAkyvlKfLFHEDi.jpeg",
    reting: 6.3,
    summary:
      "Buy steering wheel Mercedes Tiptronic at a low price. Payment without credit",
  },
  {
    id: 1,
    title: "Car fara",
    price: "$230",
    category: "avto",
    brand: "Audi dizayn",
    color: "Red",
    img: "https://olcha.uz/image/200x200/products/9fWzL90Tr8j5ft86LsSNbAHuP1X9fsEDcAwfhLKK8qt7eTjUhKCgq910GiuB.jpeg",
    reting: 8,
    summary:
      "Buy Chevrolet Malibu 2 taillights at low prices. Credit Free Headlight Chevrolet Malibu 2 term payment, guaranteed.",
  },
  {
    id: 1,
    title: "Car audio",
    price: "$100",
    category: "avto",
    brand: "Pioneer TS-6965V3",
    color: "Black",
    img: "https://olcha.uz/image/200x200/products/Nl2J99SvfXNoW5JwrhG3UgncmasXHbJX8rMQ51dptdKazwJ36iLH3i3YiGZR.jpeg",
    reting: 6,
    summary:
      "Buy Acoustics Pioneer TS-6965V3 at low prices. Credit-free Acoustics Pioneer TS-6965V3 term payment, guaranteed.",
  },
  {
    id: 1,
    title: "Car Radar",
    price: "$98",
    category: "avto",
    brand: "Lenovo V7 AHD",
    color: "Black and red",
    img: "https://olcha.uz/image/200x200/products/CtN50tdQVgVnPeDtgJIOyk95zRTeRzfBjf4K3U26gF5HOszManXnaAu8SJDa.jpeg",
    reting: 7.1,
    summary:
      "Buy Lenovo V7 AHD at low prices. Lenovo V7 AHD term payment without credit, guaranteed.",
  },
  // Alimardon Aka
  {
    id: 1,
    title: "Happy family",
    price: "$50,95",
    category: "Book",
    brand: "Hilol",
    color: "Yellow",
    img: "https://hilolnashr.uz/image/cache/catalog/Baxtiyor_oila_front-200x200.jpg",
    reting: 35.4,
    summary:
      " This book provides a complete and detailed explanation of the rules of Islam regarding family relations, and covers all the issues that a Muslim should know about family life.",
  },
  {
    id: 1,
    title: "The stars are to blame",
    price: "$45,95",
    category: "Book",
    brand: "Sharq-Ziyo-Zakovat",
    color: "White",
    img: "https://assets.asaxiy.uz/product/main_image/desktop//5f99136204126.png",
    reting: 10.4,
    summary:
      " During adolescence, a person's heart yearns for unconditional love. The protagonists of the play, who are seriously ill, feel it twice as deeply and try to appreciate their lives and enjoy every moment. It is this inner human feeling that follows the reader, the inner meaning that his life will never go back.",
  },
  {
    id: 1,
    title: "The shield of the believer is a detailed book of fasting",
    price: "$16,95",
    category: "Book",
    brand: "Hilol",
    color: "White",
    img: "https://hilolnashr.uz/image/cache/catalog/MSMY/qalqoni-web-200x200.jpg",
    reting: 55.1,
    summary:
      " Praise be to Allaah, Who has made fasting one of the fards of Islam, protecting the believers from their sins and mistakes.Greetings to our beloved Prophet Muhammad Mustafa, who taught his ummah all the secrets of fasting and showed infinite love and compassion to his ummah.",
  },
  {
    id: 1,
    title: "Book of narrations",
    price: "$11,95",
    category: "Book",
    brand: "Hilol",
    color: "Orange",
    img: "https://islom.uz/img/section/section_1489137205.jpg",
    reting: 46.2,
    summary:
      " If this book is useful in the upbringing of children, encourages our children to goodness, kindness, fairness, justice, pure faith, and serves to eliminate their spiritual shortcomings, the musannif will achieve its goal. would have achieved.",
  },
  {
    id: 1,
    title: "Iman and Khazan",
    price: "$14,95",
    category: "Book",
    brand: "Hilol",
    color: "White",
    img: "https://kitoblardunyosi.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/iymon-va-huzun-web-200x200w.jpg",
    reting: 3.6,
    summary:
      " Human Life Will Continue Trials. Overcoming them with patience and perseverance is a requirement of faith. Remember, if we are depressed in our faith, our lives will also be depressed.",
  },
  //  Jalol aka
  {
    id: 1,
    title: "Knifes",
    price: "$49.9",
    category: "kitchen appliances",
    brand: "Mr.Chef",
    color: "brown",
    img: "https://ae01.alicdn.com/kf/Hb562dccd00164606bf25b3bff88558ceP/MRCHEF-5pcs-Heavy-duty-Kitchen-Knife-set-8-Chefs-Knife-7-5Inch-cleaver-Pakkawood-Handle-german.jpg ",
    reting: 4.9,
    summary:
      "  MRCHEF 5pcs Heavy duty Kitchen Knife set 8 Chefs Knife & 7.5Inch cleaver Pakkawood Handle german stainless steel HRC58",
  },
  {
    id: 1,
    title: "95L 90 cm 5 Gas Burner",
    price: "$450,95",
    category: "kitchen appliances",
    brand: "Samsung",
    color: "grey",
    img: "https://images.samsung.com/is/image/samsung/p6pim/za/ny90t5010ss-fa/gallery/za-ny5000tm-ny90t5010ss-fa-350920462?$720_576_PNG$",
    reting: 5.0,
    summary:
      "Enjoy perfectly grilled food – much faster and more efficiently. The Power Grill Heater is 2-step adjustable to cook different types and quantities of food. The High Grill quickly and evenly cooks big dishes or a large number of items. Or use the Low Grill to cook small amounts and save energy.",
  },
  {
    id: 1,
    title: "Stand mixer50's Style SMF03RDEU",
    price: "$210,95",
    category: "kitchen appliances",
    brand: "Smeg",
    color: "Red",
    img: "https://m.media-amazon.com/images/I/71BtySVK6kL._SX425_.jpg",
    reting: 4.4,
    summary:
      "Elegant, functional and eclectic: the Full Color stand mixers are with a brilliant glossy hues for a full colour effect, one of the key distinguishing features of the new product aesthetic. A true explosion of colour that offers a host of potential new style combinations for your kitchen.",
  },
  {
    id: 1,
    title: "Nutri Ninja",
    price: "$102.99",
    category: "kitchen appliances",
    brand: "Ninja",
    color: "black",
    img: "https://b3h2.scene7.com/is/image/BedBathandBeyond/2020-05-08-10-54_622356561884_imageset?$529$&wid=200&hei=200",
    reting: 4.7,
    summary:
      "Product description,1000-Watt Base,Total Crushing Technology,72 oz. Pitcher and Lid,Stacked Blade Assembly,25-Recipe Inspiration Guide",
  },
  {
    id: 1,
    title: "Frigidaire Gallery",
    price: "$549,95",
    category: "kitchen appliances",
    brand: "Samsung",
    color: "light",
    img: "http://mobileimages.lowes.com/productimages/0107ce64-fd74-4761-926e-61c387930990/16436926.jpg",
    reting: 4.6,
    summary:
      "Welcome to the Frigidaire Family!  Here are some helpful places to start after installing your new Frigidaire appliance at home.",
  },
  //  Sardor Aka
  {
    id: 1,
    title: "Z Zegna",
    price: "999,9$",
    category: "Coat",
    brand: "Gucci",
    color: "blue",
    img: "https://cdn-images.farfetch-contents.com/17/23/73/13/17237313_35388457_1000.jpg",
    reting: 9.1,
    summary:
      " Z Zegna's focus on materials and construction is reflected in the design of this double-breasted coat. Crafted from a cashmere and wool blend, this piece boasts a classic silhouette and sophisticated navy blue colourway. Wool-cashmere blend, peak lapels , long sleeves , double-breasted button fastening , two front flap pockets",
  },
  {
    id: 1,
    title: "Eleventy",
    price: "1199,9$",
    category: "Coat",
    brand: "Gucci",
    color: "Cream",
    img: "https://cdn-images.farfetch-contents.com/15/80/61/85/15806185_28958649_1000.jpg",
    reting: 7.8,
    summary:
      "  Outer: Wool 80%, Polyamide 20% Lining: Acetate 68%, Polyester 32% . camel , wool blend ,notched lapels, front button fastening,long sleeves , two front flap pockets,chest patch pocket ,mid-length",
  },
  {
    id: 1,
    title: "Z Zegna",
    price: "$1,019",
    category: "Coat",
    brand: "Gucci",
    color: "Brown",
    img: "https://cdn-images.farfetch-contents.com/17/06/45/04/17064504_34238453_1000.jpg",
    reting: 7.8,
    summary:
      "  The model is 1.86 m wearing size 48 (IT/FR), Dry Clean Only, Lining: Viscose 100% Outer: Wool 90%, Cashmere 10%, brown,wool-cashmere blend,peak lapels,double-breasted button,fastening,long sleeves,two front flap pockets,long sleeves,English rear vents,straight hem",
  },
  {
    id: 1,
    title: "AMI Paris",
    price: "$1,013",
    category: "Coat",
    brand: "Gucci",
    color: "White",
    img: "https://cdn-images.farfetch-contents.com/15/13/45/46/15134546_26286146_1000.jpg",
    reting: 8.8,
    summary:
      " When it comes to coats, you've got to bring your A-game. Boasting a midi style and belted waist, this one from AMI Paris will keep you safe and warm while making you look amazing too. Winner, winner, winner. Featuring peaked lapels, a double-breasted front fastening, a belted waist, front flap pockets, long sleeves and a straight hem.",
  },
  {
    id: 1,
    title: "Jil Sander",
    price: "$6,704",
    category: "Coat",
    brand: "Gucci",
    color: "Black",
    img: "https://cdn-images.farfetch-contents.com/15/90/69/48/15906948_29546092_1000.jpg",
    reting: 8.9,
    summary:
      "  Since when has bad weather meant bad style? Own it whatever the clouds are up to with this cashmere coat from Jil Sander. Watch out Gene Kelly - we have a new favourite person to watch singing in the rain.",
  },
  // alisher aka
  {
    id: 1,
    title: "Anex Air-X",
    price: "$349.9",
    category: "baby carriage",
    brand: "ANEX",
    color: "gray",
    img: "https://anexbaby.com/static/content/thumbs/1830x/4/77/c372ig-a4ae9a3442b55781801a32c37b16f774.jpg",
    reting: 4.1,
    summary:
      "Air-X is a lightweight stroller, that can be easily folded with one hand. It is designed for parents that are always in motion. You can go out, spend time on long walks in the countryside, work and even travel by car or plane. Do what you want with the Air-X.",
  },
  {
    id: 1,
    title: "Belecoo 3 in 1",
    price: "$475.5",
    category: "baby carriage",
    brand: "BELECOO",
    color: "purple",
    img: "https://static2.mumzworld.com/media/catalog/product/s/s/ssp_3276_1.jpg",
    reting: 5,
    summary:
      "Belecoo 6 - 3-in-1 Pram stroller makes your outing comfortable and safe with easy to move wheels and strong steel frame. The reversible stroller seat allows the baby to face you when he or she is younger and face forward as they get older. Its easy to fold and compact design is convenient for storage at home during travels.",
  },
  {
    id: 1,
    title: "Yoga Lite Stroller",
    price: "$382.7",
    category: "baby carriage",
    brand: "TEKNUM",
    color: "Blue",
    img: "https://static2.mumzworld.com/media/catalog/product/s/b/sbf-tk_yls_bu-15.jpg",
    reting: 4.5,
    summary:
      "Yoga Lite offers One Second Single Hand Folding/Unfolding and Pushing. It is very easy to fold and unfold within 1 second. The Stroller has special Shock Proof Drive system that is so flexible, smooth and easy to push the Stroller single handed, while making sure for smooth ride and no disturbance even if the baby is asleep.",
  },
  {
    id: 1,
    title: "Sunny Stroller",
    price: "$317.7",
    category: "baby carriage",
    brand: "HAUCK",
    color: "Black",
    img: "https://static2.mumzworld.com/media/catalog/product/b/d/bdm-160527-hauck-sunny-wild-blooms-black-1577421898.jpg",
    reting: 4.3,
    summary:
      "Sunny - this super light and compact city companion can be used right from birth in lying position or combined with an infant car seat and loaded up to 25 kg. Folded away with one hand only, it fits almost any car boot. This sporty stroller is not only very comfy thanks to backrest and footrest being adjustable into lying position, but also very smooth to drive. The swivelling and lockable front wheels make Sunny very easy to push and steer. In addition, the large canopy with sun blend protects your child against all weathers.",
  },
  {
    id: 1,
    title: "Belecoo 8 Piano - 4 in 1 ",
    price: "$457.5",
    category: "baby carriage",
    brand: "BELECOO",
    color: "Black White",
    img: "https://static2.mumzworld.com/media/catalog/product/d/8/d8ts.jpg",
    reting: 5,
    summary:
      "All new 2019 model, a whole travel system package is here! 1 pram acts as a stroller and pram. Suitable for a convenient trip. It is designed using the latest technology and 3rd generation PU leather, to give a luxurious texture and quality to the product and a luxurious feeling to your baby. It gives you the satisfaction of using a leather at one fourth the cost of leather.",
  },
  // Shukrullo
  {
    id: 1,
    title: "Dyson Supersonic™ ",
    price: "$548",
    category: "healthe and beauty",
    brand: "Dyson",
    color: "blue, copper",
    img: "https://srv2.imgonline.com.ua/result_img/imgonline-com-ua-Resize-MtIst6ua00Jn2N.jpg",
    reting: 9,
    summary: `Five nozzles for styling. Including a new attachment for unruly hair.
      Intelligent outgoing air temperature control system.
      Powerful Dyson V9 digital motor.`,
  },
  {
    id: 1,
    title: "Dyson Corrale™ Straightener Professional Version",
    price: "$522",
    category: "healthe and beauty",
    brand: "Dyson",
    color: "Black",
    img: "https://srv2.imgonline.com.ua/result_img/imgonline-com-ua-Resize-MtIst6ua00Jn2N.jpg",
    reting: 8.5,
    summary: `Twice less hair damage. 2
    To create different styles.
    Without wire.`,
  },
  {
    id: 1,
    title: "Eau de toilette for men 8 Element",
    price: "$20",
    category: "healthe and beauty",
    brand: "FABERLIC",
    color: "Transparent",
    img: "https://srv4.imgonline.com.ua/result_img/imgonline-com-ua-Resize-1lXMy6xO5f4dv.png",
    reting: 7.8,
    summary: `Weight: 90.7 gr., Volume: 100 ml
    The 8 Element fragrance was created especially for Faberlic by perfumer Janek Kozheliuch.
    His element is air! For him there are no barriers and obstacles. Its freedom and depth capture and inspire. It gives the feeling of flying! His external coolness is fraught with hidden internal energy, which can burst into flames. His energy is the energy of life itself!`,
  },
  {
    id: 1,
    title: "Electric toothbrush Oclean Air 2",
    price: "$39",
    category: "healthe and beauty",
    brand: "Mi",
    color: "pink, blue, white",
    img: "https://www.imgonline.com.ua/result_img/imgonline-com-ua-Resize-iVZ4boUx9Z.jpg",
    reting: 8.3,
    summary: `Nutrition
    Battery capacity
    800 mAh
    Working time (min)
    57600
    Charging time (min)
    150
    Power consumption (W)
    2.5`,
  },
  {
    id: 1,
    title: "Chanel Paris - Riviera",
    price: "$157",
    category: "healthe and beauty",
    brand: "Chanel",
    color: "Transparent",
    img: "https://srv4.imgonline.com.ua/result_img/imgonline-com-ua-Resize-CouQk3SoGCUxy.jpg",
    reting: 9.1,
    summary: `Made in France
    Trade house: Chanel
    Perfumer: Olivier Polge
    Year of creation: 2019
    Purpose: unisex
    Type: eau de toilette
    Families: floral, fruity
    Fragrance notes: orange peel, floral notes, citruses, neroli, jasmine, benzoin, sandalwood`,
  },
  // muhammad rizo
  {
    id: 1,
    title: "Jazwares Roblox",
    price: "$12",
    category: "toys",
    brand: "Roblox",
    color: "blue",
    img: "https://i.ibb.co/HXMLf4y/toy1.jpg",
    reting: 7.8,
    summary:
      "Buy Game collectible figure Jazwares Roblox Core Figures Shred: Snowboard Boy W6 (ROB0202) Installment without installment loan - prices, reviews, specifications, catalog Jazwares Roblox Core Figures Shred: Snowboard Boy W6 (ROB0202)",
  },

  {
    id: 1,
    title: "Auldey Infinity",
    price: "$16",
    category: "toys",
    brand: "Holy Whisker",
    color: "green",
    img: "https://i.ibb.co/vkh1ZR0/toy2.jpg",
    reting: 9.0,
    summary:
      "Buy Top with launcher Auldey Infinity Nado Series Standard Holy Whisker (YW624301) with delivery in Tashkent, Tashkent region, Andijan, Bukhara, Jizzakh, Kashkadarya, Navoiy, Namangan, Samarkand, Surkhandarya, Syrdarya, Fergana, Khorezm, Karakalpakstan. Installment without installment loan - prices, reviews, specifications, catalog Auldey Infinity Nado Starter Spinning Top Holy Whisker Standard Series (YW624301)",
  },

  {
    id: 1,
    title: "Twister car",
    price: "$99.9",
    category: "toys",
    brand: "Twister",
    color: "blue",
    img: "https://i.ibb.co/1G2L588/toy3.jpg",
    reting: 8.0,
    summary: "Twister car for children, 2.4 GHz, with remote control",
  },

  {
    id: 1,
    title: "AUDI A8",
    price: "$120",
    category: "toys",
    brand: "DuDu cars",
    color: "blue",
    img: "https://i.ibb.co/wprGm0D/toy4.jpg",
    reting: 9.4,
    summary:
      "AUDI A8 Alloy Car Model Diecast & Toy Car Model Metal Toy Car Model High Model with Sound Light Toy Collection for Children Gift 1/32",
  },

  {
    id: 1,
    title: "King Kong",
    price: "$9.99",
    category: "toys",
    brand: "Kong",
    color: "black",
    img: "https://i.ibb.co/0Cx8CDh/toy5.jpg",
    reting: 7.0,
    summary:
      "King Kong Action Figures Toys Godzilla Action Figure Kingkong Action Figure Collectible Model Toy Christmas Gift",
  },
];
// Rasimlar 200x200 bo'liwi wart
