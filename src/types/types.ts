//TS: creo mi propio dato. NO se necesita importar este archivo

export type Album ={
  id:number
  title:string
  artist:string
  image:string
  description:string
  price:number
}

//este tipo hereda todos los elementos del tipo Album y añade quantity
export type CartItem= Album & {
  quantity:number
}

export type AlbumId= Album['id'] //Esto es lo que se conoce como un lookup. Es un tipo q sea el atributo id del tipo Album 























  
