export type SearchedData = {
    id:number,
    name:string,
    description:string,
    stock:number,
    imageUrl:string,
    price:number,
    categoryId:number,
    category:{
        createdAt:string,
        id:number,
        name:string
    }
}