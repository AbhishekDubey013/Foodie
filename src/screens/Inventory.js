
import React from 'react';
import Delete from '@material-ui/icons/Delete';
import { useCart, useDispatchCart } from '../components/ContextReducer';
import foodData from './foodData.json'; // Import the JSON data

export default function Cart() {
  const cartItems = useCart();
  const dispatch = useDispatchCart();

  if (foodData.foodItems.length === 0) {
    return (
      <div>
        <div className=' text-success fs-4'>No items in the cart!</div>
      </div>
    );
  }

  let totalPrice = 0;

  return (
    <div>
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
        <table className='table table-hover'>
          <thead className='text-success fs-4'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Option</th>
              <th scope='col'>Amount</th>
            </tr>
          </thead>
          <tbody className='text-success fs-4'>
            {foodData.foodItems.map((food, index) => {
              const cartItem = cartItems.find(item => item.id === index);
              const remainingQuantity = food.quantity - (cartItem ? cartItem.qty : 0);
              totalPrice += parseFloat(food.options[0].half);
              return (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{food.name}</td>
                  <td>{remainingQuantity}</td>
                  <td>{food.options[0].half}</td>
                  <td>{food.options[0].half}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className='text-success fs-4'>
          <h1 className='fs-2'>Total Price: {totalPrice.toFixed(2)}/-</h1>
        </div>
      </div>
    </div>
  );
}
