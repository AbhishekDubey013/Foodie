
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import foodData from './foodData.json'; 

export default function MyOrder() {
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        // Set the order data from imported JSON
        console.log(foodData.foodItems); 
        setOrderData(foodData.foodItems); // Assuming foodData is an array of objects
    }, []);

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='container'>
                <div className='row'>
                    {orderData.map((data, index) => (
                        data.orderData ? (
                            <React.Fragment key={index}>
                                {data.orderData.order_data.slice(0).reverse().map((item, itemIndex) => (
                                    <React.Fragment key={itemIndex}>
                                        {item.map((arrayData, arrayIndex) => (
                                            <div className='col-12 col-md-6 col-lg-3' key={arrayIndex}>
                                                <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                    <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{arrayData.name}</h5>
                                                        <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                            <span className='m-1'>{arrayData.quantity}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </React.Fragment>
                        ) : null
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
