
const productArray = [
    {
        id: "1",
        name: "Alaska",
        price: '10'
    },
    {
        id: "2",
        name: "Blue",
        price: '10'
    },
    {
        id: "3",
        name: "Classic Black and Gold",
        price: '10'
    },
    {
        id: "4",
        name: "Drawstring Solar System",
        price: '10'
    },
    {
        id: "5",
        name: "Earth",
        price: '10'
    },
    {
        id: "6",
        name: "Fall",
        price: '10'
    },
    {
        id: "7",
        name: "Fall2",
        price: '10'
    },
    {
        id: "8",
        name: "Frosted Green",
        price: '10'
    },
    {
        id: "9",
        name: "Galaxy",
        price: '10'
    },
    {
        id: "10",
        name: "Green Tea",
        price: '10'
    },
    {
        id: "11",
        name: "Jade",
        price: '10'
    },
    {
        id: "12",
        name: "Jasper",
        price: '10'
    },
    {
        id: "13",
        name: "Jodeci",
        price: '10'
    },
    {
        id: "14",
        name: "Mars",
        price: '10'
    },
    {
        id: "15",
        name: "Moss",
        price: '10'
    },
    {
        id: "16",
        name: "Orginal Solar System",
        price: '10'
    },
    {
        id: "17",
        name: "Orange Lotus Flower",
        price: '10'
    },
    {
        id: "18",
        name: "Oxy",
        price: '10'
    },
    {
        id: "19",
        name: "Peace",
        price: '10'
    },
    {
        id: "20",
        name: "Pearlicious",
        price: '10'
    },
    {
        id: "21",
        name: "Protection",
        price: '10'
    },
    {
        id: "22",
        name: "Protection1",
        price: '10'
    },
    {
        id: "23",
        name: "Protection2",
        price: '10'
    },
    {
        id: "24",
        name: "Purple",
        price: '10'
    },
    {
        id: "25",
        name: "Purple Lotus Flower",
        price: '10'
    },
    {
        id: "26",
        name: "Purple Protection",
        price: '10'
    },
    {
        id: "27",
        name: "Queendom",
        price: '40'
    },
    {
        id: "28",
        name: "Red Lotus Flower",
        price: '10'
    },
    {
        id: "29",
        name: "Strawberry Cream",
        price: '10'
    },
    {
        id: "30",
        name: "Summer Blues",
        price: '10'
    },
    {
        id: "31",
        name: "Summer Rays",
        price: '10'
    },
    {
        id: "32",
        name: "Summer Shells",
        price: '10'
    },
    {
        id: "33",
        name: "Summer Sunset",
        price: '10'
    },
    {
        id: "34",
        name: "Sundial",
        price: '10'
    },
    {
        id: "35",
        name: "Tiger Lotus Flower",
        price: '10'
    },
    {
        id: "36",
        name: "Unicorn",
        price: '10'
    },
    {
        id: "37",
        name: "Vixen",
        price: '10'
    },
    {
        id: "38",
        name: "Wyseria",
        price: '40'
    },
    {
        id: "39",
        name: "Yellow Lotus Flower",
        price: '10'
    },

]

function getProductData(id){
    let productData = productArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log('Product does not exist');
    }
    return productData;

}

module.exports = { productArray, getProductData };