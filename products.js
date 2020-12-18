//slide1 slide2 slide3 properties
$(document).ready(function(){
    $('#slide,#slide2,#slide3').slick({
        breakpoints: {
            760: {
                slideToShow:5,
                slideToScroll:5,
            },
        },
        autoplay:false,
        autoplaySpeed:2000,
        adaptiveHeight:true,
        slideToShow:3,
        slideToScroll:3,
        infinite:true,
        arrows: true,
    })
})


//sample_product.txt 
var products = [{
    "productId": "PKT-42061",
    "name": "Best of Vinexus 2017 Rotwein (6er-Paket)",
    "url": "https://www.vinexus.de/best-of-vinexus-2017-rotwein-6er-paket.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=PKT-42061&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/PKT-42061_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/1c/fc/8e/PKT-420615a507118ac631_200x200.jpg",
    "price": 49.3,
    "priceText": "€49,30",
    "oldPrice": 58.0,
    "oldPriceText": "€58,00",
    "category": ["Wein > Art > Pakete > Art > Aktionspakete", "Sale > Kategorien im Sale > Pakete", "Wein > Art > Pakete", "Wein > Art > Pakete > Art > Rotwein Pakete"],
    "categories": ["Wein", "Art", "Pakete", "Art", "Aktionspakete", "Sale", "Kategorien im Sale", "Rotwein Pakete"],
    "lastUpdateTime": 1518099000473,
    "inStock": true,
    "insertTime": 1514899645359,
    "publishTime": 1514899645359,
    "brand": "Unsere Selektion",
    "params": {
        "weight": "6 kg",
        "basePrice": "4.5 Liter (10,96 € * / 1 Liter)",
        "likeCount": "2",
        "manLogo": "https://www.vinexus.de/media/image/41/42/bd/unsere-selektion-logo.gif",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "",
        "region": "",
        "art": "",
        "stars": "",
        "tastes": "",
        "isAb": "",
        "rebsorte": ""
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "FT-SW-0344-NV",
    "name": "Veuve Clicquot Ponsardin Brut Magnum (1,5L)",
    "url": "https://www.vinexus.de/veuve-clicquot-ponsardin-brut-magnum-1-5l.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=FT-SW-0344-NV&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/FT-SW-0344_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/b6/98/4b/FT-SW-034459a187aaa03bf_200x200.jpg",
    "price": 107.0,
    "priceText": "€107,00",
    "oldPriceText": "",
    "category": ["Champagner & Sekt > Art > Champagner"],
    "categories": ["Champagner & Sekt", "Art", "Champagner"],
    "lastUpdateTime": 1518099000624,
    "inStock": true,
    "insertTime": 1511520818423,
    "publishTime": 1511520818423,
    "brand": "Veuve Clicquot",
    "params": {
        "weight": "1 kg",
        "basePrice": "1.5 Liter (71,33 € * / 1 Liter)",
        "likeCount": "",
        "manLogo": "https://www.vinexus.de/media/image/0b/b4/94/veuve-clicquot.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Frankreich",
        "region": "Champagne",
        "art": "Champagner",
        "stars": "",
        "tastes": "brut,",
        "isAb": "",
        "rebsorte": ""
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "PKT-2821",
    "name": "Weinregion Baden - erstklassige Weingüter (6er-Paket)",
    "url": "https://www.vinexus.de/weinregion-baden-erstklassiger-weingueter-6er-paket.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=PKT-2821&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/PKT-2821_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/fd/a8/fb/PKT-28215a7aa11df2e92_200x200.jpg",
    "price": 66.78,
    "priceText": "€66,78",
    "oldPrice": 74.2,
    "oldPriceText": "€74,20",
    "category": ["Wein > Art > Pakete > Art > Genießer-Pakete", "Wein > Art > Pakete"],
    "categories": ["Wein", "Art", "Pakete", "Genießer-Pakete"],
    "lastUpdateTime": 1518099000702,
    "inStock": true,
    "insertTime": 1517390747188,
    "publishTime": 1517390747188,
    "brand": "Unsere Selektion",
    "params": {
        "weight": "6 kg",
        "basePrice": "4.5 Liter (14,84 € * / 1 Liter)",
        "likeCount": "",
        "manLogo": "https://www.vinexus.de/media/image/41/42/bd/unsere-selektion-logo.gif",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "true",
        "land": "",
        "region": "",
        "art": "",
        "stars": "",
        "tastes": "",
        "isAb": "",
        "rebsorte": "Cuvée"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "PKT-5109",
    "name": "5 Sterne Platter 2018 - Ausgezeichnete Weine aus Südafrika (6er-Paket)",
    "url": "https://www.vinexus.de/5-sterne-platter-2018-ausgezeichnete-weine-aus-suedafrika-6er-paket.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=PKT-5109&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/PKT-5109_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/ae/02/f2/PKT-51095a2641cd068a8_200x200.jpg",
    "price": 107.64,
    "priceText": "€107,64",
    "oldPrice": 119.6,
    "oldPriceText": "€119,60",
    "category": ["Wein > Art > Pakete > Art > Rotwein Pakete", "Wein > Art > Pakete", "Sale > Kategorien im Sale > Pakete"],
    "categories": ["Wein", "Art", "Pakete", "Art", "Rotwein Pakete", "Sale", "Kategorien im Sale"],
    "lastUpdateTime": 1518099000472,
    "inStock": true,
    "insertTime": 1512503620976,
    "publishTime": 1512503620976,
    "brand": "Unsere Selektion",
    "params": {
        "weight": "6 kg",
        "basePrice": "4.5 Liter (23,92 € * / 1 Liter)",
        "likeCount": "",
        "manLogo": "https://www.vinexus.de/media/image/41/42/bd/unsere-selektion-logo.gif",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "",
        "region": "",
        "art": "",
        "stars": "",
        "tastes": "",
        "isAb": "",
        "rebsorte": ""
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "PKT-5641",
    "name": "Pinotage aus Südafrika (6er-Paket)",
    "url": "https://www.vinexus.de/pinotage-aus-suedafrika-6er-paket.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=PKT-5641&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/PKT-5641_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/d5/e5/cc/PKT-56415a71662b5ed2b_200x200.jpg",
    "price": 46.2,
    "priceText": "€46,20",
    "oldPrice": 54.35,
    "oldPriceText": "€54,35",
    "category": ["Wein", "Wein > Art > Pakete", "Wein > Art > Pakete > Art > Gemischte Pakete", "Sale > Kategorien im Sale > Pakete"],
    "categories": ["Wein", "Art", "Pakete", "Gemischte Pakete", "Sale", "Kategorien im Sale"],
    "lastUpdateTime": 1518099000702,
    "inStock": true,
    "insertTime": 1517285302769,
    "publishTime": 1517285302769,
    "brand": "Unsere Selektion",
    "params": {
        "weight": "6 kg",
        "basePrice": "4.5 Liter (10,27 € * / 1 Liter)",
        "likeCount": "",
        "manLogo": "https://www.vinexus.de/media/image/41/42/bd/unsere-selektion-logo.gif",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "true",
        "land": "",
        "region": "",
        "art": "",
        "stars": "",
        "tastes": "",
        "isAb": "",
        "rebsorte": "Pinotage"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "PKT-456",
    "name": "Bouchard Finlayson - südafrikanische Eleganz in Weiß (6er-Paket)",
    "url": "https://www.vinexus.de/bouchard-finlayson-suedafrikanische-eleganz-in-weiss-6er-paket.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=PKT-456&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/PKT-456_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/28/ab/b7/PKT-45659f2c8ea38271_200x200.jpg",
    "price": 94.18,
    "priceText": "€94,18",
    "oldPrice": 110.8,
    "oldPriceText": "€110,80",
    "category": ["Wein > Art > Pakete > Art > Südafrika", "Wein > Art > Pakete"],
    "categories": ["Wein", "Art", "Pakete", "Art", "Südafrika"],
    "lastUpdateTime": 1518099000651,
    "inStock": true,
    "insertTime": 1511464668510,
    "publishTime": 1511464668510,
    "brand": "Bouchard Finlayson",
    "params": {
        "weight": "6 kg",
        "basePrice": "4.5 Liter (20,93 € * / 1 Liter)",
        "likeCount": "",
        "manLogo": "https://www.vinexus.de/media/image/73/29/84/bouchard-finlayson.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Südafrika",
        "region": "",
        "art": "",
        "stars": "",
        "tastes": "",
        "isAb": "",
        "rebsorte": "Cuvée"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "WK-ZI-0010-16",
    "name": "Casa Vinicola Minini Primitivo Puglia IGT Piane del Levante 2016",
    "url": "https://www.vinexus.de/casa-vinicola-minini-primitivo-puglia-igt-piane-del-levante-2016.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=WK-ZI-0010-16&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/WK-ZI-0010_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/16/1e/e7/WK-ZI-00105a2f16c5113b6_200x200.jpg",
    "price": 6.25,
    "priceText": "€6,25",
    "oldPriceText": "",
    "category": ["Wein > Art > Rotweine", "Wein > Land > Italien", "Wein > Rebsorte > Zinfandel / Primitivo"],
    "categories": ["Wein", "Art", "Rotweine", "Land", "Italien", "Rebsorte", "Zinfandel / Primitivo"],
    "lastUpdateTime": 1518099000506,
    "inStock": true,
    "insertTime": 1511396237710,
    "publishTime": 1511396237710,
    "brand": "Casa Vinicola Minini",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (8,33 € * / 1 Liter)",
        "likeCount": "",
        "manLogo": "https://www.vinexus.de/media/image/fa/59/f3/casa-vinicola-minini.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Italien",
        "region": "Apulien",
        "art": "",
        "stars": "",
        "tastes": "trocken,üppig & opulent,",
        "isAb": "true",
        "rebsorte": "Zinfandel / Primitivo"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "IT-LG-0006-16",
    "name": "Peter Zemmer Raut Lagrein DOC 2016",
    "url": "https://www.vinexus.de/peter-zemmer-raut-lagrein-doc-2016.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=IT-LG-0006-16&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/IT-LG-0006_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/38/6a/c5/IT-LG-00065a682b5006bb2_200x200.jpg",
    "price": 12.25,
    "priceText": "€12,25",
    "oldPrice": 13.99,
    "oldPriceText": "€13,99",
    "category": ["Wein > Art > Rotweine"],
    "categories": ["Wein", "Art", "Rotweine"],
    "lastUpdateTime": 1518099000608,
    "inStock": true,
    "insertTime": 1511424119838,
    "publishTime": 1511424119838,
    "brand": "Peter Zemmer",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (16,33 € * / 1 Liter)",
        "likeCount": "",
        "manLogo": "https://www.vinexus.de/media/image/94/5a/e0/peter-zemmer.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Italien",
        "region": "Südtirol",
        "art": "",
        "stars": "",
        "tastes": "trocken,",
        "isAb": "",
        "rebsorte": "Lagrein"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "IT-GW-0009-16",
    "name": "Peter Zemmer Gewürztraminer DOC 2016",
    "url": "https://www.vinexus.de/peter-zemmer-gewuerztraminer-doc-2016.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=IT-GW-0009-16&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/IT-GW-0009_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/48/61/d8/IT-GW-000959a1960152ab0_200x200.jpg",
    "price": 13.2,
    "priceText": "€13,20",
    "oldPrice": 13.99,
    "oldPriceText": "€13,99",
    "category": ["Wein > Art > Weißweine"],
    "categories": ["Wein", "Art", "Weißweine"],
    "lastUpdateTime": 1518099000433,
    "inStock": true,
    "insertTime": 1511424906451,
    "publishTime": 1511424906451,
    "brand": "Peter Zemmer",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (17,60 € * / 1 Liter)",
        "likeCount": "",
        "manLogo": "https://www.vinexus.de/media/image/94/5a/e0/peter-zemmer.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Italien",
        "region": "Südtirol",
        "art": "",
        "stars": "",
        "tastes": "trocken,saftig & harmonisch,",
        "isAb": "",
        "rebsorte": "Gewürztraminer"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "KK-SW-0442-NV",
    "name": "Du Toitskloof Cape Secco Rosé",
    "url": "https://www.vinexus.de/du-toitskloof-cape-secco-rose.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=KK-SW-0442-NV&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/KK-SW-0442_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/f6/ac/c6/KK-SW-044259a1a20b4bba9_200x200.jpg",
    "price": 5.8,
    "priceText": "€5,80",
    "oldPriceText": "",
    "category": ["Champagner & Sekt > Art > Neue Welt Sekt", "Champagner & Sekt > Land > Südafrika", "Champagner & Sekt"],
    "categories": ["Champagner & Sekt", "Art", "Neue Welt Sekt", "Land", "Südafrika"],
    "lastUpdateTime": 1518099000485,
    "inStock": true,
    "insertTime": 1511366679567,
    "publishTime": 1511366679567,
    "brand": "Du Toitskloof",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (7,73 € * / 1 Liter)",
        "likeCount": "2",
        "manLogo": "https://www.vinexus.de/media/image/cf/bc/b7/du-toitskloof.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Südafrika",
        "region": "Worcester",
        "art": "Neue Welt Sekt",
        "stars": "<meta itemprop=\"ratingValue\" content=\"10\">\n<meta itemprop=\"worstRating\" content=\"1\">\n<meta itemprop=\"bestRating\" content=\"10\">\n<meta itemprop=\"ratingCount\" content=\"1\">\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<span class=\"rating--count-wrapper\">\n(<span class=\"rating--count\">1</span>)\n</span>",
        "tastes": "brut,leicht & frisch,",
        "isAb": "",
        "rebsorte": ""
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "PKT-993",
    "name": "Doolhof - Weine aus dem Tal des Labyrinths (6er-Paket)",
    "url": "https://www.vinexus.de/doolhof-weine-aus-dem-tal-des-labyrinths-6er-paket.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=PKT-993&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/PKT-993_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/f0/d5/93/PKT-99359a1b67eb94a1_200x200.jpg",
    "price": 73.3,
    "priceText": "€73,30",
    "oldPrice": 91.62,
    "oldPriceText": "€91,62",
    "category": ["Wein > Art > Pakete > Art > Südafrika", "Wein > Art > Pakete"],
    "categories": ["Wein", "Art", "Pakete", "Art", "Südafrika"],
    "lastUpdateTime": 1518099000462,
    "inStock": true,
    "insertTime": 1511519979996,
    "publishTime": 1511519979996,
    "brand": "Doolhof",
    "params": {
        "weight": "6 kg",
        "basePrice": "4.5 Liter (16,29 € * / 1 Liter)",
        "likeCount": "",
        "manLogo": "https://www.vinexus.de/media/image/12/g0/69/doolhof.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Südafrika",
        "region": "",
        "art": "",
        "stars": "",
        "tastes": "",
        "isAb": "",
        "rebsorte": ""
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "KK-SW-0439-NV",
    "name": "Du Toitskloof Cape Secco Blanc",
    "url": "https://www.vinexus.de/du-toitskloof-cape-secco-blanc.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=KK-SW-0439-NV&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/KK-SW-0439_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/da/f1/23/KK-SW-043959a1a2039b14d_200x200.jpg",
    "price": 5.8,
    "priceText": "€5,80",
    "oldPriceText": "",
    "category": ["Champagner & Sekt > Art > Neue Welt Sekt", "Champagner & Sekt > Land > Südafrika", "Champagner & Sekt > Art > Sekt"],
    "categories": ["Champagner & Sekt", "Art", "Neue Welt Sekt", "Land", "Südafrika", "Sekt"],
    "lastUpdateTime": 1518099000568,
    "inStock": true,
    "insertTime": 1511417235938,
    "publishTime": 1511417235938,
    "brand": "Du Toitskloof",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (7,73 € * / 1 Liter)",
        "likeCount": "1",
        "manLogo": "https://www.vinexus.de/media/image/cf/bc/b7/du-toitskloof.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Südafrika",
        "region": "Worcester",
        "art": "Neue Welt Sekt",
        "stars": "",
        "tastes": "brut,leicht & frisch,",
        "isAb": "true",
        "rebsorte": ""
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "ZA-SW-0001-NV",
    "name": "Pongrácz Méthode Cap Classique Rosé",
    "url": "https://www.vinexus.de/pongracz-methode-cap-classique-rose.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=ZA-SW-0001-NV&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/ZA-SW-0001_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/45/70/69/ZA-SW-00015a682d1a76ba9_200x200.jpg",
    "price": 17.86,
    "priceText": "€17,86",
    "oldPriceText": "",
    "category": ["Champagner & Sekt > Art > Methode Traditionelle", "Champagner & Sekt > Land > Südafrika", "Champagner & Sekt"],
    "categories": ["Champagner & Sekt", "Art", "Methode Traditionelle", "Land", "Südafrika"],
    "lastUpdateTime": 1518099000621,
    "inStock": true,
    "insertTime": 1511383537511,
    "publishTime": 1511383537511,
    "brand": "Pongrácz",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (23,81 € * / 1 Liter)",
        "likeCount": "1",
        "manLogo": "https://www.vinexus.de/media/image/b8/7d/2f/pongracz.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Südafrika",
        "region": "Stellenbosch",
        "art": "Methode Traditionelle",
        "stars": "<meta itemprop=\"ratingValue\" content=\"10\">\n<meta itemprop=\"worstRating\" content=\"1\">\n<meta itemprop=\"bestRating\" content=\"10\">\n<meta itemprop=\"ratingCount\" content=\"1\">\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<span class=\"rating--count-wrapper\">\n(<span class=\"rating--count\">1</span>)\n</span>",
        "tastes": "brut,",
        "isAb": "",
        "rebsorte": ""
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "IT-ZI-0007-16",
    "name": "Teanum Òtre Primitivo 2016",
    "url": "https://www.vinexus.de/teanum-otre-primitivo-2016.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=IT-ZI-0007-16&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/IT-ZI-0007_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/49/1c/c5/IT-ZI-00075a682b88e6f94_200x200.jpg",
    "price": 9.9,
    "priceText": "€9,90",
    "oldPriceText": "",
    "category": ["Wein > Art > Rotweine", "Wein", "Wein > Land > Italien", "Wein > Rebsorte > Zinfandel / Primitivo", "Selektionen > Empfehlungen > Bestseller", "Selektionen > Geschmack > Trocken"],
    "categories": ["Wein", "Art", "Rotweine", "Land", "Italien", "Rebsorte", "Zinfandel / Primitivo", "Selektionen", "Empfehlungen", "Bestseller", "Geschmack", "Trocken"],
    "lastUpdateTime": 1518099000658,
    "inStock": true,
    "insertTime": 1511374680073,
    "publishTime": 1511374680073,
    "brand": "Cantine Teanum",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (13,20 € * / 1 Liter)",
        "likeCount": "6",
        "manLogo": "https://www.vinexus.de/media/image/e4/92/bf/cantine-teanum.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Italien",
        "region": "Apulien",
        "art": "",
        "stars": "<meta itemprop=\"ratingValue\" content=\"9\">\n<meta itemprop=\"worstRating\" content=\"1\">\n<meta itemprop=\"bestRating\" content=\"10\">\n<meta itemprop=\"ratingCount\" content=\"12\">\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star-half\"></i>\n<span class=\"rating--count-wrapper\">\n(<span class=\"rating--count\">12</span>)\n</span>",
        "tastes": "trocken,üppig & opulent,",
        "isAb": "",
        "rebsorte": "Zinfandel / Primitivo"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "FT-SW-0474-NV",
    "name": "McGuigan Black Label Sparkling Shiraz",
    "url": "https://www.vinexus.de/mcguigan-black-label-sparkling-shiraz.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=FT-SW-0474-NV&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/FT-SW-0474_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/15/8f/c5/FT-SW-04745a3a778dc1f2b_200x200.jpg",
    "price": 11.95,
    "priceText": "€11,95",
    "oldPriceText": "",
    "category": ["Champagner & Sekt > Art > Sparkling Shiraz", "Champagner & Sekt > Land > Australien", "Champagner & Sekt"],
    "categories": ["Champagner & Sekt", "Art", "Sparkling Shiraz", "Land", "Australien"],
    "lastUpdateTime": 1518099000534,
    "inStock": true,
    "insertTime": 1511439571665,
    "publishTime": 1511439571665,
    "brand": "McGuigan",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (15,93 € * / 1 Liter)",
        "likeCount": "33",
        "manLogo": "https://www.vinexus.de/media/image/4f/2c/6b/mcguigan.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Australien",
        "region": "Barossa Valley",
        "art": "Sparkling Shiraz",
        "stars": "<meta itemprop=\"ratingValue\" content=\"10\">\n<meta itemprop=\"worstRating\" content=\"1\">\n<meta itemprop=\"bestRating\" content=\"10\">\n<meta itemprop=\"ratingCount\" content=\"7\">\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<span class=\"rating--count-wrapper\">\n(<span class=\"rating--count\">7</span>)\n</span>",
        "tastes": "süß,üppig & opulent,",
        "isAb": "",
        "rebsorte": ""
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "MA-SB-0091-16",
    "name": "Marisco The Kings Favour Sauvignon Blanc 2016",
    "url": "https://www.vinexus.de/marisco-the-kings-favour-sauvignon-blanc-2016.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=MA-SB-0091-16&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/MA-SB-0091_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/67/0e/60/MA-SB-00915a5ef35410521_200x200.jpg",
    "price": 14.36,
    "priceText": "€14,36",
    "oldPrice": 16.9,
    "oldPriceText": "€16,90",
    "category": ["Wein > Art > Weißweine", "Wein > Land > Neuseeland > Marlborough", "Wein > Land > Neuseeland"],
    "categories": ["Wein", "Art", "Weißweine", "Land", "Neuseeland", "Marlborough"],
    "lastUpdateTime": 1518099000571,
    "inStock": true,
    "insertTime": 1511430448179,
    "publishTime": 1511430448179,
    "brand": "Marisco",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (19,15 € * / 1 Liter)",
        "likeCount": "3",
        "manLogo": "https://www.vinexus.de/media/image/49/6a/a7/marisco.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Neuseeland",
        "region": "Marlborough",
        "art": "",
        "stars": "",
        "tastes": "trocken,",
        "isAb": "true",
        "rebsorte": "Sauvignon Blanc"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "IT-ZI-0056-16",
    "name": "Doppio Passo Primitivo Salento IGT 2016",
    "url": "https://www.vinexus.de/doppio-passo-primitivo-salento-igt-2016.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=IT-ZI-0056-16&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/IT-ZI-0056_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/a4/2e/6b/IT-ZI-005659a1a12019ef4_200x200.jpg",
    "price": 7.9,
    "priceText": "€7,90",
    "oldPrice": 8.9,
    "oldPriceText": "€8,90",
    "category": ["Wein > Art > Rotweine", "Sale", "Wein", "Selektionen > Geschmack > Halbtrocken", "Wein > Land > Italien", "Wein > Rebsorte > Zinfandel / Primitivo"],
    "categories": ["Wein", "Art", "Rotweine", "Sale", "Selektionen", "Geschmack", "Halbtrocken", "Land", "Italien", "Rebsorte", "Zinfandel / Primitivo"],
    "lastUpdateTime": 1518099000518,
    "inStock": true,
    "insertTime": 1511372427416,
    "publishTime": 1511372427416,
    "brand": "Doppio Passo",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (10,53 € * / 1 Liter)",
        "likeCount": "8",
        "manLogo": "https://www.vinexus.de/media/image/68/39/ff/doppio-passo.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Italien",
        "region": "Apulien",
        "art": "",
        "stars": "",
        "tastes": "halbtrocken,üppig & opulent,",
        "isAb": "",
        "rebsorte": "Zinfandel / Primitivo"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "FR-GR-0016-NV",
    "name": "Château de Saint Cosme Little James Basket Press rouge",
    "url": "https://www.vinexus.de/chateau-de-saint-cosme-little-james-basket-press-rouge.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=FR-GR-0016-NV&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/FR-GR-0016_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/e1/ff/7d/FR-GR-001659a17d6891fbe_200x200.jpg",
    "price": 7.95,
    "priceText": "€7,95",
    "oldPriceText": "",
    "category": ["Selektionen > Weinbewerter > Robert Parker", "Wein > Art > Rotweine", "Wein", "Selektionen > Empfehlungen > Best Bewertet", "Wein > Land > Frankreich"],
    "categories": ["Selektionen", "Weinbewerter", "Robert Parker", "Wein", "Art", "Rotweine", "Empfehlungen", "Best Bewertet", "Land", "Frankreich"],
    "lastUpdateTime": 1518099000621,
    "inStock": true,
    "insertTime": 1511377004115,
    "publishTime": 1511377004115,
    "brand": "Château de Saint Cosme",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (10,60 € * / 1 Liter)",
        "likeCount": "20",
        "manLogo": "https://www.vinexus.de/media/image/38/fa/85/chateau-de-saint-cosme.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Frankreich",
        "region": "Rhône",
        "art": "",
        "stars": "<meta itemprop=\"ratingValue\" content=\"9\">\n<meta itemprop=\"worstRating\" content=\"1\">\n<meta itemprop=\"bestRating\" content=\"10\">\n<meta itemprop=\"ratingCount\" content=\"3\">\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star-half\"></i>\n<span class=\"rating--count-wrapper\">\n(<span class=\"rating--count\">3</span>)\n</span>",
        "tastes": "trocken,",
        "isAb": "true",
        "rebsorte": "Grenache / Garnacha"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "ZA-CH-0051-16",
    "name": "Louisvale Chardonnay unwooded 2016",
    "url": "https://www.vinexus.de/louisvale-chardonnay-unwooded-2016.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=ZA-CH-0051-16&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/ZA-CH-0051_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/84/d8/cb/ZA-CH-005159a285c1dd85c_200x200.jpg",
    "price": 8.9,
    "priceText": "€8,90",
    "oldPriceText": "",
    "category": ["Wein > Art > Weißweine", "Wein > Land > Südafrika"],
    "categories": ["Wein", "Art", "Weißweine", "Land", "Südafrika"],
    "lastUpdateTime": 1518099000571,
    "inStock": true,
    "insertTime": 1511378364753,
    "publishTime": 1511378364753,
    "brand": "Louisvale Wines",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (11,87 € * / 1 Liter)",
        "likeCount": "",
        "manLogo": "https://www.vinexus.de/media/image/74/e1/ef/louisvale.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Südafrika",
        "region": "Stellenbosch",
        "art": "",
        "stars": "",
        "tastes": "Exotisch + kräftig,",
        "isAb": "true",
        "rebsorte": "Chardonnay"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "DE-WB-0015-16",
    "name": "Friedrich Altenkirch Boogie 2016",
    "url": "https://www.vinexus.de/friedrich-altenkirch-boogie-2016.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=DE-WB-0015-16&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/DE-WB-0015_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/39/d5/70/DE-WB-00155a7aa01f1b143_200x200.jpg",
    "price": 6.95,
    "priceText": "€6,95",
    "oldPriceText": "",
    "category": ["Wein > Art > Weißweine", "Wein > Land > Deutschland > Rheingau", "Wein > Land > Deutschland"],
    "categories": ["Wein", "Art", "Weißweine", "Land", "Deutschland", "Rheingau"],
    "lastUpdateTime": 1518099000602,
    "inStock": true,
    "insertTime": 1511428313029,
    "publishTime": 1511428313029,
    "brand": "Altenkirch",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (9,27 € * / 1 Liter)",
        "likeCount": "3",
        "manLogo": "https://www.vinexus.de/media/image/98/8a/78/altenkirch.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Deutschland",
        "region": "Rheingau",
        "art": "",
        "stars": "<meta itemprop=\"ratingValue\" content=\"8\">\n<meta itemprop=\"worstRating\" content=\"1\">\n<meta itemprop=\"bestRating\" content=\"10\">\n<meta itemprop=\"ratingCount\" content=\"1\">\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star-empty\"></i>\n<span class=\"rating--count-wrapper\">\n(<span class=\"rating--count\">1</span>)\n</span>",
        "tastes": "trocken,",
        "isAb": "",
        "rebsorte": "Weiße Cuvée"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "PKT-155",
    "name": "Allesverloren Tinta Barocca (5+1-Paket)",
    "url": "https://www.vinexus.de/allesverloren-tinta-barocca-5-1-paket.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=PKT-155&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/PKT-155_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/39/f4/67/PKT-1555a4c7c405b9c7_200x200.jpg",
    "price": 58.75,
    "priceText": "€58,75",
    "oldPrice": 70.5,
    "oldPriceText": "€70,50",
    "category": ["Wein > Art > Pakete > Art > Südafrika", "Wein > Art > Pakete", "Sale > Kategorien im Sale > Pakete"],
    "categories": ["Wein", "Art", "Pakete", "Art", "Südafrika", "Sale", "Kategorien im Sale"],
    "lastUpdateTime": 1518099000476,
    "inStock": true,
    "insertTime": 1511369434293,
    "publishTime": 1511369434293,
    "brand": "Allesverloren Estate",
    "params": {
        "weight": "6 kg",
        "basePrice": "4.5 Liter (13,06 € * / 1 Liter)",
        "likeCount": "",
        "manLogo": "https://www.vinexus.de/media/image/00/df/49/allesverloren.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Südafrika",
        "region": "",
        "art": "",
        "stars": "<meta itemprop=\"ratingValue\" content=\"9\">\n<meta itemprop=\"worstRating\" content=\"1\">\n<meta itemprop=\"bestRating\" content=\"10\">\n<meta itemprop=\"ratingCount\" content=\"5\">\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star-half\"></i>\n<span class=\"rating--count-wrapper\">\n(<span class=\"rating--count\">5</span>)\n</span>",
        "tastes": "",
        "isAb": "",
        "rebsorte": "Tinta Barocca"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "EX-CS-0002-12",
    "name": "Excelsior Evanthius Cabernet Sauvignon Reserve 2012",
    "url": "https://www.vinexus.de/excelsior-evanthius-cabernet-sauvignon-reserve-2012.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=EX-CS-0002-12&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/EX-CS-0002_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/1c/7b/be/EX-CS-00025a59ab16ccb6d_200x200.jpg",
    "price": 12.5,
    "priceText": "€12,50",
    "oldPriceText": "",
    "category": ["Wein > Art > Rotweine", "Wein > Land > Südafrika", "Wein", "Wein > Rebsorte > Cabernet Sauvignon", "Wein > Land > Südafrika > Robertson"],
    "categories": ["Wein", "Art", "Rotweine", "Land", "Südafrika", "Rebsorte", "Cabernet Sauvignon", "Robertson"],
    "lastUpdateTime": 1518099000624,
    "inStock": true,
    "insertTime": 1511451857924,
    "publishTime": 1511451857924,
    "brand": "Excelsior Estate",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (16,67 € * / 1 Liter)",
        "likeCount": "9",
        "manLogo": "https://www.vinexus.de/media/image/2b/bc/b9/excelsior-estate.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Südafrika",
        "region": "Robertson",
        "art": "",
        "stars": "<meta itemprop=\"ratingValue\" content=\"10\">\n<meta itemprop=\"worstRating\" content=\"1\">\n<meta itemprop=\"bestRating\" content=\"10\">\n<meta itemprop=\"ratingCount\" content=\"4\">\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<span class=\"rating--count-wrapper\">\n(<span class=\"rating--count\">4</span>)\n</span>",
        "tastes": "trocken,",
        "isAb": "true",
        "rebsorte": "Cabernet Sauvignon"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "FT-SW-0574-NV",
    "name": "Juliusspital Echter Secco Pink",
    "url": "https://www.vinexus.de/juliusspital-echter-secco-pink.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=FT-SW-0574-NV&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/FT-SW-0574_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/a6/6d/b1/FT-SW-057459a18ad962c99_200x200.jpg",
    "price": 8.95,
    "priceText": "€8,95",
    "oldPriceText": "",
    "category": ["Champagner & Sekt > Art > Sekt Deutschland", "Champagner & Sekt > Land > Deutschland"],
    "categories": ["Champagner & Sekt", "Art", "Sekt Deutschland", "Land", "Deutschland"],
    "lastUpdateTime": 1518099000418,
    "inStock": true,
    "insertTime": 1511384513683,
    "publishTime": 1511384513683,
    "brand": "Juliusspital",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (11,93 € * / 1 Liter)",
        "likeCount": "",
        "manLogo": "https://www.vinexus.de/media/image/f1/8a/64/juliusspital.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Deutschland",
        "region": "Franken",
        "art": "Sekt Deutschland",
        "stars": "<meta itemprop=\"ratingValue\" content=\"9\">\n<meta itemprop=\"worstRating\" content=\"1\">\n<meta itemprop=\"bestRating\" content=\"10\">\n<meta itemprop=\"ratingCount\" content=\"3\">\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star-half\"></i>\n<span class=\"rating--count-wrapper\">\n(<span class=\"rating--count\">3</span>)\n</span>",
        "tastes": "brut,",
        "isAb": "",
        "rebsorte": ""
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "ZA-PI-0036-15",
    "name": "Raka Pinotage 2015",
    "url": "https://www.vinexus.de/raka-pinotage-2015.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=ZA-PI-0036-15&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/ZA-PI-0036_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/79/e5/0a/ZA-PI-003659a28d455c343_200x200.jpg",
    "price": 12.95,
    "priceText": "€12,95",
    "oldPriceText": "",
    "category": ["Wein > Art > Rotweine", "Wein > Rebsorte > Pinotage", "Wein > Land > Südafrika > Walker Bay"],
    "categories": ["Wein", "Art", "Rotweine", "Rebsorte", "Pinotage", "Land", "Südafrika", "Walker Bay"],
    "lastUpdateTime": 1518099000592,
    "inStock": true,
    "insertTime": 1511520762995,
    "publishTime": 1511520762995,
    "brand": "Raka Wines",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (17,27 € * / 1 Liter)",
        "likeCount": "",
        "manLogo": "https://www.vinexus.de/media/image/7a/fa/a3/raka-wines.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Südafrika",
        "region": "Walker Bay",
        "art": "",
        "stars": "",
        "tastes": "trocken,Rund + harmonisch,",
        "isAb": "true",
        "rebsorte": "Pinotage"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "MV-SW-0531-NV",
    "name": "Kirsten Riesling Brut",
    "url": "https://www.vinexus.de/kirsten-riesling-brut.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=MV-SW-0531-NV&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/MV-SW-0531_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/70/f9/2b/MV-SW-053159a1ad41377b5_200x200.jpg",
    "price": 13.95,
    "priceText": "€13,95",
    "oldPriceText": "",
    "category": ["Champagner & Sekt > Art > Sekt Deutschland", "Champagner & Sekt > Land > Deutschland"],
    "categories": ["Champagner & Sekt", "Art", "Sekt Deutschland", "Land", "Deutschland"],
    "lastUpdateTime": 1518099000477,
    "inStock": true,
    "insertTime": 1511375637507,
    "publishTime": 1511375637507,
    "brand": "Kirsten",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (18,60 € * / 1 Liter)",
        "likeCount": "1",
        "manLogo": "https://www.vinexus.de/media/image/6c/09/23/kirsten.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Deutschland",
        "region": "Mosel",
        "art": "Sekt Deutschland",
        "stars": "",
        "tastes": "brut,leicht & frisch,",
        "isAb": "",
        "rebsorte": ""
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "AR-BL-0243-16",
    "name": "Callia Magna Malbec 2016",
    "url": "https://www.vinexus.de/callia-magna-malbec-2016.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=AR-BL-0243-16&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/AR-BL-0243_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/59/b1/44/AR-BL-02435a79ceb9a0793_200x200.jpg",
    "price": 8.95,
    "priceText": "€8,95",
    "oldPrice": 9.45,
    "oldPriceText": "€9,45",
    "category": ["Wein > Art > Rotweine", "Wein > Rebsorte > Malbec"],
    "categories": ["Wein", "Art", "Rotweine", "Rebsorte", "Malbec"],
    "lastUpdateTime": 1518099000660,
    "inStock": true,
    "insertTime": 1511523816287,
    "publishTime": 1511523816287,
    "brand": "Bodegas Callia",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (11,93 € * / 1 Liter)",
        "likeCount": "",
        "manLogo": "https://www.vinexus.de/media/image/95/41/59/callia.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Argentinien",
        "region": "San Juan",
        "art": "",
        "stars": "<meta itemprop=\"ratingValue\" content=\"8\">\n<meta itemprop=\"worstRating\" content=\"1\">\n<meta itemprop=\"bestRating\" content=\"10\">\n<meta itemprop=\"ratingCount\" content=\"7\">\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star-empty\"></i>\n<span class=\"rating--count-wrapper\">\n(<span class=\"rating--count\">7</span>)\n</span>",
        "tastes": "vegan,trocken,üppig & opulent,",
        "isAb": "",
        "rebsorte": "Malbec"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "WK-SH-0167-16",
    "name": "Penfolds Koonunga Hill Shiraz 2016",
    "url": "https://www.vinexus.de/penfolds-koonunga-hill-shiraz-2016.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=WK-SH-0167-16&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/WK-SH-0167_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/f7/cb/65/WK-SH-01675a795121830d9_200x200.jpg",
    "price": 12.95,
    "priceText": "€12,95",
    "oldPriceText": "",
    "category": ["Wein > Art > Rotweine"],
    "categories": ["Wein", "Art", "Rotweine"],
    "lastUpdateTime": 1518099000704,
    "inStock": true,
    "insertTime": 1513173458657,
    "publishTime": 1513173458657,
    "brand": "Penfolds",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (17,27 € * / 1 Liter)",
        "likeCount": "",
        "manLogo": "https://www.vinexus.de/media/image/40/12/95/penfolds.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Australien",
        "region": "Barossa Valley",
        "art": "",
        "stars": "",
        "tastes": "vegan,trocken,",
        "isAb": "true",
        "rebsorte": "Shiraz / Syrah"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "ZA-BL-0341-15",
    "name": "Allesverloren 1704 Red 2015",
    "url": "https://www.vinexus.de/allesverloren-1704-red-2015.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=ZA-BL-0341-15&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/ZA-BL-0341_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/2f/3f/3f/ZA-BL-034159fd6204f0e71_200x200.jpg",
    "price": 9.95,
    "priceText": "€9,95",
    "oldPrice": 12.95,
    "oldPriceText": "€12,95",
    "category": ["Wein > Art > Rotweine", "Wein > Land > Südafrika", "Sale > Kategorien im Sale > Rotweine", "Sale"],
    "categories": ["Wein", "Art", "Rotweine", "Land", "Südafrika", "Sale", "Kategorien im Sale"],
    "lastUpdateTime": 1518099000647,
    "inStock": true,
    "insertTime": 1511365615016,
    "publishTime": 1511365615016,
    "brand": "Allesverloren Estate",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (13,27 € * / 1 Liter)",
        "likeCount": "4",
        "manLogo": "https://www.vinexus.de/media/image/00/df/49/allesverloren.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Südafrika",
        "region": "Swartland",
        "art": "",
        "stars": "<meta itemprop=\"ratingValue\" content=\"8\">\n<meta itemprop=\"worstRating\" content=\"1\">\n<meta itemprop=\"bestRating\" content=\"10\">\n<meta itemprop=\"ratingCount\" content=\"1\">\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star-empty\"></i>\n<span class=\"rating--count-wrapper\">\n(<span class=\"rating--count\">1</span>)\n</span>",
        "tastes": "trocken,",
        "isAb": "",
        "rebsorte": "Cuvée"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "SC-CS-0230-14",
    "name": "Rickety Bridge Paulina´s Reserve Cabernet Sauvignon 2014",
    "url": "https://www.vinexus.de/rickety-bridge-the-bridge-2012.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=SC-CS-0230-14&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/SC-CS-0230_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/e6/7e/f4/SC-CS-02305a38b8221df19_200x200.jpg",
    "price": 24.8,
    "priceText": "€24,80",
    "oldPriceText": "",
    "category": ["Wein > Art > Rotweine", "Wein > Land > Südafrika"],
    "categories": ["Wein", "Art", "Rotweine", "Land", "Südafrika"],
    "lastUpdateTime": 1518099000689,
    "inStock": true,
    "insertTime": 1513947436623,
    "publishTime": 1513947436623,
    "brand": "Rickety Bridge",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (33,07 € * / 1 Liter)",
        "likeCount": "",
        "manLogo": "https://www.vinexus.de/media/image/5a/3a/df/rickety-bridge.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Südafrika",
        "region": "Franschhoek",
        "art": "",
        "stars": "",
        "tastes": "trocken,",
        "isAb": "",
        "rebsorte": "Cabernet Sauvignon"
    },
    "language": "DE",
    "currency": ""
}, {
    "productId": "DE-RI-0153-15",
    "name": "Balthasar Ress 'Von Unserm' Rheingau Riesling trocken 2015",
    "url": "https://www.vinexus.de/balthasar-ress-von-unserm-rheingau-riesling-trocken-2015.html?_sgm_campaign=scn_61868394b28e4000&_sgm_source=DE-RI-0153-15&_sgm_action=click",
    "image": "https://www.wine-logistix.de/magento_pic/efulfillment/DE-RI-0153_2_.jpg",
    "imageS": "https://www.vinexus.de/media/image/a1/bf/87/DE-RI-015359a160cea71a3_200x200.jpg",
    "price": 11.2,
    "priceText": "€11,20",
    "oldPriceText": "",
    "category": ["Wein > Art > Weißweine"],
    "categories": ["Wein", "Art", "Weißweine"],
    "lastUpdateTime": 1518099000624,
    "inStock": true,
    "insertTime": 1511519418140,
    "publishTime": 1511519418140,
    "brand": "Balthasar Ress",
    "params": {
        "weight": "1 kg",
        "basePrice": "0.75 Liter (14,93 € * / 1 Liter)",
        "likeCount": "1",
        "manLogo": "https://www.vinexus.de/media/image/c7/74/d5/balthasar-ress.png",
        "taxText": "inkl. MwSt. zzgl. Versandkosten",
        "stockText": "Auf Lager. Lieferzeit 1-3 Werktage",
        "isNew": "",
        "land": "Deutschland",
        "region": "Rheingau",
        "art": "",
        "stars": "<meta itemprop=\"ratingValue\" content=\"8\">\n<meta itemprop=\"worstRating\" content=\"1\">\n<meta itemprop=\"bestRating\" content=\"10\">\n<meta itemprop=\"ratingCount\" content=\"1\">\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star\"></i>\n<i class=\"icon--star-empty\"></i>\n<span class=\"rating--count-wrapper\">\n(<span class=\"rating--count\">1</span>)\n</span>",
        "tastes": "trocken,",
        "isAb": "",
        "rebsorte": "Riesling"
    },
    "language": "DE",
    "currency": ""
}]


//slide1 is divided into 3 views(slider1-2-3)
document.getElementById('slider1').innerHTML = products?.slice(0,5).map(product =>
    `<div class="product-wrapper">
    ${parseInt(100*(product?.oldPrice-product?.price)/product?.oldPrice) ? `<div class="sale"> % ${parseInt(100*(product?.oldPrice-product?.price)/product?.oldPrice)}</div>`:""}
    ${product.params.likeCount ? `<i class="far fa-heart like">${ product.params.likeCount }</i>`: ""}
        ${product?.params.isNew ? `<div class="new"> NEU </div>`: "" }
        <img class="product-image" src=${product?.imageS}>    
        <div class="product-name"> ${product?.name} </div>
        <div class="landArtRegion">${product?.params.land ? ` ${product?.params.land}` :""}
        ${product?.params.region ?` | ${product?.params.region} ` :""}
        ${product?.params.art ?` | ${product?.params.art} ` :""}  </div>         
        <div><span class="nPrice">${product?.priceText}</span><span class="oPrice">${product?.oldPriceText}</span></div>
        <div class="basePrice"> ${product?.params.basePrice} </div>
    </div>`
).join('')

 document.getElementById('slider2').innerHTML = products?.slice(3, 8).map(product =>
    `<div class="product-wrapper">
    ${parseInt(100*(product?.oldPrice-product?.price)/product?.oldPrice) ? `<div class="sale"> % ${parseInt(100*(product?.oldPrice-product?.price)/product?.oldPrice)}</div>`:""}
    ${product.params.likeCount ? `<i class="far fa-heart like">${ product.params.likeCount }</i>`: ""}
    ${product?.params.isNew ? `<div class="new"> NEU </div>`: "" }
    <img class="product-image" src=${product?.imageS}>    
    <div class="product-name"> ${product?.name} </div>
    <div class="landArtRegion">${product?.params.land ? ` ${product?.params.land}` :""}
    ${product?.params.region ?` | ${product?.params.region} ` :""}
    ${product?.params.art ?` | ${product?.params.art} ` :""}  </div>         
    <div><span class="nPrice">${product?.priceText}</span><span class="oPrice">${product?.oldPriceText}</span></div>
    <div class="basePrice"> ${product?.params.basePrice} </div>
</div>`
).join('')

document.getElementById('slider3').innerHTML = products?.slice(6, 11).map(product =>
    `<div class="product-wrapper">
        ${parseInt(100*(product?.oldPrice-product?.price)/product?.oldPrice) ? `<div class="sale"> % ${parseInt(100*(product?.oldPrice-product?.price)/product?.oldPrice)}</div>`:""}
        ${product.params.likeCount ? `<i class="far fa-heart like">${ product.params.likeCount }</i>`: ""}
        ${product?.params.isNew ? `<div class="new"> NEU </div>`: "" }
        <img class="product-image" src=${product?.imageS}>
        <div class="product-name"> ${product?.name} </div>
        <div class="landArtRegion">${product?.params.land ? ` ${product?.params.land}` :""}
        ${product?.params.region ?` | ${product?.params.region} ` :""}
        ${product?.params.art ?` | ${product?.params.art} ` :""}  </div>         
        <div><span class="nPrice">${product?.priceText}</span><span class="oPrice">${product?.oldPriceText}</span></div>
        <div class="basePrice"> ${product?.params.basePrice} </div>
   </div>`
).join('')


//slide2 is divided into 3 views(slider4-5-6)
document.getElementById('slider4').innerHTML = products?.slice(9,14).map(product =>
    `<div class="product-wrapper">
    ${parseInt(100*(product?.oldPrice-product?.price)/product?.oldPrice) ? `<div class="sale"> % ${parseInt(100*(product?.oldPrice-product?.price)/product?.oldPrice)}</div>`:""}
    ${product.params.likeCount ? `<i class="far fa-heart like">${ product.params.likeCount }</i>`: ""}
        ${product?.params.isNew ? `<div class="new"> NEU </div>`: "" }
        <img class="product-image" src=${product?.imageS}>
        <div class="product-name"> ${product?.name} </div>
        <div class="landArtRegion">${product?.params.land ? ` ${product?.params.land}` :""}
        ${product?.params.region ?` | ${product?.params.region} ` :""}
        ${product?.params.art ?` | ${product?.params.art} ` :""}  </div>         
        <div><span class="nPrice">${product?.priceText}</span><span class="oPrice">${product?.oldPriceText}</span></div>
        <div class="basePrice"> ${product?.params.basePrice} </div>
    </div>`
).join('')

document.getElementById('slider5').innerHTML = products?.slice(12, 17).map(product =>
    `<div class="product-wrapper">
    ${parseInt(100*(product?.oldPrice-product?.price)/product?.oldPrice) ? `<div class="sale"> % ${parseInt(100*(product?.oldPrice-product?.price)/product?.oldPrice)}</div>`:""}
    ${product.params.likeCount ? `<i class="far fa-heart like">${ product.params.likeCount }</i>`: ""}
        ${product?.params.isNew ? `<div class="new"> NEU </div>`: "" }
        <img class="product-image" src=${product?.imageS}>
        <div class="product-name"> ${product?.name} </div>
        <div class="landArtRegion">${product?.params.land ? ` ${product?.params.land}` :""}
        ${product?.params.region ?` | ${product?.params.region} ` :""}
        ${product?.params.art ?` | ${product?.params.art} ` :""}  </div>         
        <div><span class="nPrice">${product?.priceText}</span><span class="oPrice">${product?.oldPriceText}</span></div>
        <div class="basePrice"> ${product?.params.basePrice} </div>
   </div>`
).join('')

document.getElementById('slider6').innerHTML = products?.slice(15,20).map(product =>
    `<div class="product-wrapper">
    ${parseInt(100*(product?.oldPrice-product?.price)/product?.oldPrice) ? `<div class="sale"> % ${parseInt(100*(product?.oldPrice-product?.price)/product?.oldPrice)}</div>`:""}
    ${product.params.likeCount ? `<i class="far fa-heart like">${ product.params.likeCount }</i>`: ""}
        ${product?.params.isNew ? `<div class="new"> NEU </div>`: "" }
        <img class="product-image" src=${product?.imageS}>
        <div class="product-name"> ${product?.name} </div>
        <div class="landArtRegion">${product?.params.land ? ` ${product?.params.land}` :""}
        ${product?.params.region ?` | ${product?.params.region} ` :""}
        ${product?.params.art ?` | ${product?.params.art} ` :""}  </div>         
        <div><span class="nPrice">${product?.priceText}</span><span class="oPrice">${product?.oldPriceText}</span></div>
        <div class="basePrice"> ${product?.params.basePrice} </div>
    </div>`
).join('')


//slide3 is divided into 3 views(slider7-8-9)
document.getElementById('slider7').innerHTML = products?.slice(18, 23).map(product =>
    `<div class="product-wrapper">
    ${parseInt(100*(product?.oldPrice-product?.price)/product?.oldPrice) ? `<div class="sale"> % ${parseInt(100*(product?.oldPrice-product?.price)/product?.oldPrice)}</div>`:""}
    ${product.params.likeCount ? `<i class="far fa-heart like">${ product.params.likeCount }</i>`: ""}
        ${product?.params.isNew ? `<div class="new"> NEU </div>`: "" }
        <img class="product-image" src=${product?.imageS}>
        <div class="product-name"> ${product?.name} </div>
        <div class="landArtRegion">${product?.params.land ? ` ${product?.params.land}` :""}
        ${product?.params.region ?` | ${product?.params.region} ` :""}
        ${product?.params.art ?` | ${product?.params.art} ` :""}  </div>          
        <div><span class="nPrice">${product?.priceText}</span><span class="oPrice">${product?.oldPriceText}</span></div>
        <div class="basePrice"> ${product?.params.basePrice} </div>
   </div>`
).join('')

document.getElementById('slider8').innerHTML = products?.slice(21,26).map(product =>
    `<div class="product-wrapper">
    ${parseInt(100*(product?.oldPrice-product?.price)/product?.oldPrice) ? `<div class="sale"> % ${parseInt(100*(product?.oldPrice-product?.price)/product?.oldPrice)}</div>`:""}
    ${product.params.likeCount ? `<i class="far fa-heart like">${ product.params.likeCount }</i>`: ""}
        ${product?.params.isNew ? `<div class="new"> NEU </div>`: "" }
        <img class="product-image" src=${product?.imageS}>
        <div class="product-name"> ${product?.name} </div>
        <div class="landArtRegion">${product?.params.land ? ` ${product?.params.land}` :""}
        ${product?.params.region ?` | ${product?.params.region} ` :""}
        ${product?.params.art ?` | ${product?.params.art} ` :""}  </div>         
        <div><span class="nPrice">${product?.priceText}</span><span class="oPrice">${product?.oldPriceText}</span></div>
        <div class="basePrice"> ${product?.params.basePrice} </div>
    </div>`
).join('')

document.getElementById('slider9').innerHTML = products?.slice(24, 29).map(product =>
    `<div class="product-wrapper">
    ${parseInt(100*(product?.oldPrice-product?.price)/product?.oldPrice) ? `<div class="sale"> % ${parseInt(100*(product?.oldPrice-product?.price)/product?.oldPrice)}</div>`:""}
    ${product.params.likeCount ? `<i class="far fa-heart like"> ${ product.params.likeCount }</i>`: ""}
        ${product?.params.isNew ? `<div class="new"> NEU </div>`: "" }
        <img class="product-image" src=${product?.imageS}>
        <div class="product-name"> ${product?.name} </div>
        <div class="landArtRegion">${product?.params.land ? ` ${product?.params.land}` :""}
        ${product?.params.region ?` | ${product?.params.region} ` :""}
        ${product?.params.art ?` | ${product?.params.art} ` :""}  </div> 
        <div><span class="nPrice">${product?.priceText}</span><span class="oPrice">${product?.oldPriceText}</span></div>
        <div class="basePrice"> ${product?.params.basePrice} </div>
   </div>`
).join('')
