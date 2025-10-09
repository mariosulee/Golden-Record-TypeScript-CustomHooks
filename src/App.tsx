
import Header from "./components/Header"
import Album from "./components/Album"
import useCart from "./hooks/useCart"

function App() {  //recordar q la funcion App es un componente de react
  

  const {data,cart,addToCart,removeFromCart,decreaseQuantity,increaseQuantity,clearCart,estaVacio, cartTotal} = useCart();  //como si fuera un destructuring. aqui voy colocando lo que haya en el return de mi custom hook para q este componente y sus hijos puedan usar los estados y funciones
  


  return (
    <>  {/* esto es un FRAGMENT de react en el que se pone todo el JSX*/}
      
      {/*pongo el componente Header en el que Header.jsx esta todo el codigo*/}
        
      <Header 
        //props
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
        estaVacio={estaVacio}
        cartTotal={cartTotal}
      />  


      <main className="container-xl mt-5">
          <h2 className="text-center">Vinyl records for sale</h2>

          <div className="row mt-5"> {/*para q se vea en grid*/}

            {/* Tarjeta de Álbum. El codigo entre {} es de JS */}
            {
              data.map((album) => (// el map nos va a generar un nuevo array y hay que devolverlo. Siempre devuelve un return que aqui va implicito. Accedo a cada objeto (album) del array
                   <Album    //muestro cada album 9 veces pq hay 9 componentes en el array. Album es el componente hijo aqui
                    key={album.id}  //esto lo indica react
                    album={album}   //le paso a cada componente Album un prop album que contiene un objeto con toda la info de cada album
                    addToCart={addToCart}
                   /> 
                ))//accedo asi a data que es un state y con map comienzo a iterar y generar un componente (un album) por cada elemento de ese array
              
                //esta siguiente lleva cierra el codigo JS:
            } 
  
          </div>
        
      </main>


      <footer className="bg-dark mt-5 py-5">
          <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">
              Golden Record - Mario Sulé Domínguez. All rights reserved © 2025
            </p>
          </div>
      </footer>

      
    </>
  )
}

export default App
