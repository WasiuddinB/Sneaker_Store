const PRODUCTS=[
    {
        id: 100,
        name: 'The White Jaws',
        price: 1650,
        image: require('../../assets/products/sneaker1.jpg'),
        description: 'A Very Cool Sneaker to wear on regular. Very comfortable for day to day use.\nIt has a rubber sole.\nFully Waterproof.\nVery lightweight.'
    },
    {
        id: 101,
        name: 'Dji RedNeck',
        price: 2200,
        image: require('../../assets/products/sneaker2.jpg'),
        description: 'A Very fashionable Sneaker that suits very well with the casual dresses. With this in your feet you wont need looks to attract people.\nBreathable.\nWaterproof.\nSmell-Proof.\nLightweight'
    },
    {
        id: 102,
        name: 'Runner 8262',
        price: 2150,
        image: require('../../assets/products/sneaker3.jpg'),
        description: 'In terms of a daily jogging shoe, we will be amazed to see any other shoe beating this shoes comfortability.\nVery comfortable.\nVery Rugged.\nWashable.'
    },
    {
        id:103,
        name: 'Dash of Yellow',
        price: 1950,
        image: require('../../assets/products/sneaker4.jpg'),
        description: 'A Very smart Sneaker to wear on occasions.It will go well with the environment having the bright colors in it.\nSoft.\nBright.\nLightweight.\nComfortable.'
    },
    {
        id:104,
        name: 'Multi-Colored',
        price: 1950,
        image: require('../../assets/products/sneaker5.jpg'),
        description: 'A Sneaker that has a combination of cool and smartness both.\nSoft.\nBright.\nLightweight.\nComfortable.'
    },
    {
        id:105,
        name: 'Grey Maniac',
        price: 1950,
        image: require('../../assets/products/sneaker6.jpg'),
        description: 'The grey goes well with the outdoor environments.\nSoft.\nBright.\nLightweight.\nComfortable.'
    },
    {
        id:106,
        name: 'White-Fox',
        price: 1950,
        image: require('../../assets/products/sneaker7.jpg'),
        description: 'A Very smart Sneaker to wear on occasions.It will go well with the environment having the bright colors in it.\nSoft.\nBright.\nLightweight.\nComfortable.'
    },
    {
        id:107,
        name: 'White-Lily',
        price: 1950,
        image: require('../../assets/products/sneaker8.jpg'),
        description: 'Who doesnt like a white sneaker that goes well with anything.\nWashable.\nSoft.\nBright.\nLightweight.\nComfortable.'
    },
];

export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id){
    return PRODUCTS.find((product)=>(product.id==id));
}