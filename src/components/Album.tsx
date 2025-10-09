//TS: creo mi propio dato. NO se necesita importar este archivo
import type {Album} from '../types/types.ts'


type AlbumProps ={
  album:Album
  addToCart: (item:Album) => void
}


export default function Album({album, addToCart} : AlbumProps){  //addToCart es entonces una funcion q recibe un parametro item q es del tipo Album y no devuelve nada al ser void
    //se podria hacer destructuring de los elementos de cada album para evitar props.album.elemento
    // const{id,title,description,price}=props.album
    


    return(
        <div className="col-md-6 col-lg-4 my-4">
                <div className="card h-100 text-center">
                  <h2 className="fs-3 fw-bold text-uppercase mt-3">{album.title}</h2>
                  <h3 className="album-artist">By {album.artist}</h3> 
                  <img className="d-block mx-auto mb-3" src={album.image} alt="Reckless album" style={{ width: "200px"}}
/>
                  <div className="card-body mt-3">
                    <p>{album.description}</p>
                    <p className="fw-bold text-primary fs-4">{album.price} €</p>
                    
                    
                    
                    
                    
                    {/*para el boton agregar el carrito. {/* el callback es para que no se llame en automatico el evento, asi espera al evento */}
                    <button 
                        type="button" className="btn btn-dark w-100"
                            
                        onClick={ () => addToCart(album)}
                        
                     
                    >Add to cart</button>
                  </div>
                </div>
        </div>
        


        
    )
}