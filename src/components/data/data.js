const data_base = [
  {
    id: 0,
    title: "Apple iPhone 14 128GB",
    price: 1168.86,
    count: 1,
    max_count: 30,
    promo: 1168.86 * 0.7,
    img: "https://f01.esfr.pl/foto/4/111512612561/fabfb6db948c962e7b838a3e8f72ed70/apple-iphone-14-128gb-polnoc,111512612561_8.jpg",
    category: "electronics",
    rating: "4.9",
  },
  {
    id: 1,
    title: "Samsung Galaxy A53 5G 6/128GB",
    price: 476.49,
    count: 1,
    max_count: 80,
    promo: 476.49 * 0.7,
    img: "https://f00.esfr.pl/foto/7/101642927985/e9978789fe6bb94f5d2faa250c78bd69/samsung-smartfon-galaxy-a53-5g-6-128-bk-samsung,101642927985_8.jpg",
    category: "electronics",
    rating: "4.8",
  },
  {
    id: 2,
    title: "Acer Nitro 5 AN515-57-72CC 15,6",
    price: 1590.1,
    count: 1,
    max_count: 125,
    promo: 1590.1 * 0.7,
    img: "https://f00.esfr.pl/foto/4/113046153329/7182cc2dfa0f7655f9dd6311fd927f6c/acer-laptop-nitro-5-i7-16gb-1tbssd-3070-w11,113046153329_8.jpg",
    category: "electronics",
    rating: "4.2",
  },
  {
    id: 3,
    title: "HP Victus 15",
    price: 976.69,
    count: 1,
    max_count: 178,
    promo: 976.69 * 0.7,
    img: "https://f01.esfr.pl/foto/9/112216597233/d9d028ed740f45dd8c252ac50538e4ca/hp-laptop-victus-r5-16gb-512ssd-1650-w11,112216597233_8.jpg",
    category: "electronics",
    rating: "4.6",
  },
  {
    id: 4,
    title: "PC Actina AMD Ryzen 5 5600X  RX6700XT ",
    price: 1563.43,
    count: 1,
    max_count: 20,
    promo: 1590.1 * 0.7,
    img: "https://f00.esfr.pl/foto/4/99378452833/c6338451ddfcaae4d45f323aa20f39e5/komputer-actin-ic-5600x-16gb-1t-6700xt-w_1,99378452833_8.jpg",
    category: "electronics",
    rating: "4.2",
  },
  {
    id: 5,
    title: "Komputer ASUS ROG Strix G10CE",
    price: 1249.26,
    count: 1,
    max_count: 27,
    promo: 1249.26 * 0.7,
    img: "https://f01.esfr.pl/foto/1/102824872617/a6ba0b17b3d207e476cc8d85e1825816/asus-rog-strix-g10ce-51140f1570-intel-core-i5-11400f-16gb-512gb-rtx3060,102824872617_8.jpg",
    category: "electronics",
    rating: "4.2",
  },
  {
    id: 6,
    title: "MICROSOFT Xbox Series X ",
    price: 567.39,
    count: 1,
    max_count: 8,
    promo: 567.39 * 0.7,
    img: "https://f00.esfr.pl/foto/2/55206079313/8fc039053786c3bb0300a9370236eb4e/microsoft-xbox-series-x,55206079313_8.jpg",
    category: "electronics",
    rating: "4.9",
  },
  {
    id: 7,
    title: "SAMSUNG QE65Q77B 65 QLED 4K 120HZ",
    price: 973.81,
    count: 1,
    max_count: 22,
    promo: 973.81 * 0.7,
    img: "https://f01.esfr.pl/foto/2/101544603169/de0b540bbe05eeb61b60f41c684ee026/samsung-qe65q77b-qled-tv-uhd-4k,101544603169_8.jpg",
    category: "electronics",
    rating: "4.6",
  },
  {
    id: 8,
    title: "Monitor iiyama G-Master G2766HSU-B1 1ms 165Hz",
    price: 215.59,
    count: 1,
    max_count: 34,
    promo: 215.59 * 0.7,
    img: "https://f01.esfr.pl/foto/1/93620519521/7ef3c590f0e325ea51fdb13fc90de452/iiyama-monitor-iiyama-27-g2766hsu-b1-165hz,93620519521_8.jpg",
    category: "electronics",
    rating: "4.7",
  },
  {
    id: 9,
    title: "Gigabyte GeForce RTX 3060  12GB GDDR6",
    price: 499.78,
    count: 1,
    max_count: 76,
    promo: 499.78 * 0.7,
    img: "https://f00.esfr.pl/foto/6/87299091945/95aaf99ca198ceac1e9cccf72885a9a9/msi-karta-graf-msi-rtx-3060-eagle-12g-2-0,87299091945_8.jpg",
    category: "electronics",
    rating: "5",
  },
  {
    id: 10,
    title: "Intel® Core™ i7-11700K BOX",
    price: 381.6,
    count: 1,
    max_count: 87,
    promo: 381.6 * 0.7,
    img: "https://f01.esfr.pl/foto/8/79113169545/1e8e67401240293323d74fc7c2578ff6/intel-procesor-intel-core-i7-11700k-3-6ghz-box,79113169545_8.jpg",
    category: "electronics",
    rating: "4.6",
  },
  {
    id: 11,
    title: "ASUS TUF Gaming F15",
    price: 1090.69,
    count: 1,
    max_count: 98,
    promo: 1090.69 * 0.7,
    img: "https://f00.esfr.pl/foto/8/110482550465/87e9baa92fc3b5472f07b7d1f798730f/asus-laptop-fx506-i5-16gb-512ssd-3060-w11,110482550465_8.jpg",
    category: "electronics",
    rating: "4.5",
  },
  {
    id: 12,
    title: "LEGO Technic 42141 McLaren Formula 1™",
    price: 141.04,
    count: 1,
    max_count: 70,
    promo: 141.04 * 0.7,
    img: "https://cdn.al.to/i/setup/images/prod/big/product-new-big,,2022/6/pr_2022_6_8_10_34_45_764_00.jpg",
    category: "toys",
    rating: "4.8",
  },
  {
    id: 13,
    title: "LEGO Technic 42145 Airbus H175",
    price: 156.99,
    count: 1,
    max_count: 150,
    promo: 156.99 * 0.7,
    img: "https://prod-api.mediamarkt.pl/api/images/gallery_545_400/thumbnails/images/23/23037449/1-helikopter-ratunkowy-airbus-h175-42145.jpg",
    category: "toys",
    rating: "4.6",
  },
  {
    id: 14,
    title: "LEGO Technic 42083 Bugatti Chiron ",
    price: 357.48,
    count: 1,
    max_count: 79,
    promo: 357.48 * 0.7,
    img: "https://cdn.al.to/i/setup/images/prod/big/product-new-big,,2021/6/pr_2021_6_7_14_31_40_432_00.jpg",
    category: "toys",
    rating: "4.9",
  },
  {
    id: 15,
    title: "LEGO Harry Potter 71043 Castle Hogwart",
    price: 432.67,
    count: 1,
    max_count: 37,
    promo: 432.67 * 0.7,
    img: "https://cdn.al.to/i/setup/images/prod/big/product-new-big,,2021/8/pr_2021_8_16_13_37_27_740_00.jpg",
    category: "toys",
    rating: "5",
  },
  {
    id: 16,
    title: "Hot Wheels cars 3 pack",
    price: 4.53,
    count: 1,
    max_count: 92,
    promo: 4.53 * 0.7,
    img: "https://cdn.al.to/i/setup/images/prod/big/product-new-big,,2017/12/pr_2017_12_21_13_59_52_717_00.jpg",
    category: "toys",
    rating: "4",
  },
  {
    id: 17,
    title: "Mattel Jurassic World Rajasaurus",
    price: 19.56,
    count: 1,
    max_count: 75,
    promo: 19.56 * 0.7,
    img: "https://cdn.al.to/i/setup/images/prod/big/product-new-big,,2022/4/pr_2022_4_14_15_7_44_881_00.jpg",
    category: "toys",
    rating: "4.1",
  },
  {
    id: 18,
    title: "LEGO Architecture 21057 Singapur",
    price: 50.09,
    count: 1,
    max_count: 178,
    promo: 50.09 * 0.7,
    img: "https://cdn.al.to/i/setup/images/prod/big/product-new-big,,2021/12/pr_2021_12_29_15_55_41_608_00.jpg",
    category: "toys",
    rating: "4.6",
  },
  {
    id: 19,
    title: "Dumel Discovery Magic Jinn",
    price: 20.26,
    count: 1,
    max_count: 29,
    promo: 20.26 * 0.7,
    img: "https://cdn.al.to/i/setup/images/prod/big/product-new-big,,2021/11/pr_2021_11_4_15_54_4_881_00.jpg",
    category: "toys",
    rating: "3.8",
  },
  {
    id: 20,
    title: "LEGO ART 31203 World Map",
    price: 247.95,
    count: 1,
    max_count: 131,
    promo: 247.95 * 0.7,
    img: "https://cdn.al.to/i/setup/images/prod/big/product-new-big,,2021/8/pr_2021_8_17_14_55_22_112_00.jpg",
    category: "toys",
    rating: "4.8",
  },
  {
    id: 21,
    title: "Spin Master Bakugan Evolutions",
    price: 47.58,
    count: 1,
    max_count: 14,
    promo: 47.58 * 0.7,
    img: "https://cdn.al.to/i/setup/images/prod/big/product-new-big,,2022/8/pr_2022_8_22_10_39_50_680_00.jpg",
    category: "toys",
    rating: "4.2",
  },
];

export default data_base;
