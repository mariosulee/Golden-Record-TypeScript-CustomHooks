// esto no es un jsx porque un custom hook solo debe tener logica, nada de template

import{ useState, useEffect, useMemo} from 'react'
import { db } from '../data/db'
import type { Album, CartItem} from '../types/types.ts'


const useCart= () => {
   const initialCart=() : CartItem[] => {  //lo q se va a retornar es un tipo : CartItem que es un extendido del tipo Album
    const localStorageCart=localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []  //si localstoragecart tiene algo, lo convierto de string a array con parse, y si no, devuelvo el arreglo vacio
  }


  const[data]=useState(db)   // inicio el state con el array db localizado en db.js
  const[cart,setCart]=useState(initialCart) //lo inicio con el contenido guardado en localStorage


  useEffect( () => {
    localStorage.setItem('cart', JSON.stringify(cart)) //localstorage no permite objetos o arrays asiq lo paso a string
  }, [cart]) //cada vez que cart cambie ejecutar el codigo ese

  function addToCart(item:Album){

      const itemExists=cart.findIndex( (album) => album.id ===item.id)  //este metodo no muta el array, y compruebo que el id del item sea igual al del estado album. Devuelve -1 si el elemnto no se ha añadido al carrito aun, y sino devuelve el indice del primer elemento q cumple la condicion
      
      if(itemExists>=0){
        console.log("Este elemento ya existe en el carrito")
        
        const copiaCart=[...cart] //tomo una copia del carrito
        copiaCart[itemExists].quantity++  //aumento la cantidad en el album cuyo indice sea usando una copia para no modificar el estado de cart
        setCart( copiaCart )  //siempre q escriba en mi carrito tengo que setearlo, OJO que no hay corchetes

      } else{
        console.log("agregando item al carrito...")
        const newItem:CartItem = {...item, quantity:1} //newItem es de tipo CartItem y como ya tiene añadida la cantidad, 
        
        setCart( [...cart, newItem] ) // llamo a la funcion setCart q modifica el estado cart, la cual añade a lo q hay en carrito el album al que has hecho click
        //con los corchetes devuelvo un array, sino estuviesen estaria devolviendo un objeto ya que item (album) es un objeto. asiq lo convierto a un array
      } 

      saveLocalStorage()
  }



  function removeFromCart(id: Album['id']){
    console.log(`Eliminando articulo ID  ${id}`)
    setCart( prevCart => prevCart.filter (album => album.id !== id) )  //basicamente settear el cart con todos los albumes que no tengan el id del que eliminamos pulsando la cruz roja
  }


  function increaseQuantity(id: Album['id']){
    console.log("se ha añadido una unidad al articulo", id)
    
    const updatedCart=cart.map( item => {  //accedo a cada item del carrito. Map creara otro array que se guardara en updatedCart

      if(item.id===id){
        return{      //llaves pq se esta devolviendo un objeto con todas las propiedades del item album pero cambiando el valor de quantity
          ...item,  
          quantity:item.quantity+1
        }
      }
      return item //si no cumple el if, devuelve el item SIN cambios
    })
    setCart(updatedCart)
  }

  function decreaseQuantity( id: Album['id']){
    console.log("Se ha decrementado la cantidad del articulo", id)
    const updatedCart=cart.map(item=> {
        if(item.id===id && item.quantity>1){
          return{
            ...item,
            quantity:item.quantity-1
          }
        }
        return item
    })
    setCart(updatedCart)
  }


  function clearCart(){
    setCart([])
    console.log("Se ha vaciado el carrito")
  }


  function saveLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))  //localstorage no puede almacenar arrays asi q lo convierto a string
  }


   //State derivado: porque va a depender de otro estado, en este caso de cart 
    const estaVacio = useMemo( () => cart.length===0 ,  [cart])  //cart es el array de dependencias. Vuelve a hacer el render cuando carrito cambio. useMemo se podria usar tb con cartTotal

    //Para el total a pagar, hacer otro state derivado (q es una funcion, cuando se llama se tienen q poner los parentesis) con el array method reduce, el cual iterara sobre el estado cart. Este reduce toma dos parámetros: uno es el total acumulado, y otro es el item (q es el elemento actual). Retornamos la formula
    const cartTotal = ()=> cart.reduce ( (total, item) => total + (item.quantity*item.price), 0) //el carrito empieza en 0

















    return{  //se recomienda que sea un objeto lo que se devuelva
        data,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        estaVacio,
        cartTotal
    }
    // asi se hace que todas estas funciones esten disponibles donde importe este custom hook, q en mi caso es App.jsx

}

export default useCart