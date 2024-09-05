import React, { useEffect, useRef, useState } from 'react';
import { useCartDispatch, useCartState } from './ContexReducer';

function Card(props) {
  let dispatch = useCartDispatch();
  let data = useCartState();
  const priceRef = useRef();
  const priceOption = Object.keys(props.options);

  // Set initial values for qty and size
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOption[0]); 

  // useEffect is only used if priceOption changes
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  const finalPrice = qty * parseInt(props.options[size] || 0, 10);

  const handleAddtoCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food)
    console.log(new Date())
    if (food.length !== 0) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size, img: props.foodItem.img })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size, img: props.foodItem.img })


    // setBtnEnable(true)

  }
 

  return (
    <>
      <div className="card mt-3 d-flex justify-content-center" style={{ width: "18rem" }}>
        <img
          src={props.foodItem.img} // Update as per the correct prop name
          className="card-img-top p-3 rounded"
          alt="..."
          style={{ height: '280px', width: '280px', objectFit: 'cover', borderRadius: '20px' }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5> {/* Update as per the correct prop name */}
          <p className="card-text">{props.foodItem.description}</p> {/* Update as per the correct prop name */}
          <div className='d-flex align-items-center justify-content-center container w-100'>
            <select
              onChange={(e) => setQty(e.target.value)}
              value={qty}
              style={{ backgroundColor: '#03fc03', padding: '2px 9px' }}
              className='m-2 h-100 rounded'
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                );
              })}
            </select>
            <select
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
              style={{ backgroundColor: '#03fc03', fontFamily: 'Poppins', padding: '2px 4px', border: 'none', color: 'black', outline: 'none' }}
              value={size}
              className='m-2 h-100 rounded'
            >
              {priceOption.map((val) => {
                return <option value={val} key={val}>{val}</option>;
              })}
            </select>
          </div>
          <div className=''>
            ₹{finalPrice}/-
          </div>
          <hr />
          <div className='d-flex'>
            <button className='btn btn-warning justify-center mx-auto' onClick={handleAddtoCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
