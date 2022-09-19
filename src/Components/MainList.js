import { useReducer } from "react";
import Items from "./Items";
import { reducer } from './reducer';

const initialState = {
    items : Items,
    totalItems : 4,
    modalMessage : "Items In Your Cart",
    grandTotal : 1199
}

const MainList = () => {
  const [ state , dispatch ] = useReducer(reducer,initialState);
  
  return (
    <div className="App-header">
      <h3> {state.totalItems} {state.modalMessage} </h3>
      <section className="item-details">
          {state.items.map((item) => {
            const { name, price, id , img, count } = item ;

            return(
              <div className="single-item" key={id}>
                  <img src={img} alt=""/>
                  <section>
                    <div className="details">
                    <div>
                    <h4>{name}</h4>
                      <p>${price}</p>
                      <button
                      className="App-link"
                      onClick={() => {
                        dispatch({
                        type : "DELETE",
                        payload : id })
                      }}
                        >remove </button>
                      </div>

                      <article>
                        <button
                        onClick={() => {
                          dispatch({
                          type : "INCREMENT",
                          payload : item })
                        }}>
                          +
                        </button>
                          <span>{count}</span>
                        <button
                        onClick={() => {
                          dispatch({
                          type : "DECREMENT",
                          payload : item
                        })
                        }}>
                          -
                        </button>
                      </article>
                    </div>
                  </section>
              </div>
            )
          })}
          </section>

      <footer>
       <h3>TOTAL : ${state.grandTotal} </h3>
       <button onClick={()=> dispatch({ type : "EMPTY_CART"})}>
          <h4 hidden={state.items.length <= 0}>CLEAR CART</h4>
       </button>
      </footer>
    </div>
  )
}



export default MainList;
