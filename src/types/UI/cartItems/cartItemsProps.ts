export type cartItemsProps = {
    img:string,
    name:string,
    size:'Маленькая 20' |'Средняя 30' |'Большая 35',
    type: 'традиционное' | 'тонкое',
    ingredients?:string[],
    stock:number,
    price:number,
    id:number,
    productId:number
}