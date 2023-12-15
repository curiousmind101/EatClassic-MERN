import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getOrders from "../actions/orderActions";
import { IoCallOutline } from "react-icons/io5";

const Orders = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orderReducer);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    user && dispatch(getOrders(user));
  }, [dispatch]);
  console.log(orders);
  return (
    <div className="mt-32">
      {orders ? (
        orders.map((item) => (
          <div key={item._id}>
            <div className="border shadow-lg rounded-lg w-4/5 lg:w-2/3 p-4 m-4 mx-auto">
              <div className="pt-0 text-sm ps-2 pb-3 flex justify-between">
                <p>{item.createdAt.substring(0, 10)}</p>
                <p>{item.createdAt.substring(11, 19)}</p>
              </div>
              <hr className="bg-gray-500 h-1/2" />
              <div>
                {item.products.map((prod) => (
                  <div key={prod.name}>
                    <div className="flex justify-between text-slate-700 font-normal p-1 ps-4">
                      <p>{prod.name}</p>
                      <p className="text-orange-500">
                        x<span className="text-black">{prod.quantity}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between p-2">
                <p className="">Total</p>
                <p>Rs. {item.total / 100}</p>
              </div>
              <div className="flex justify-between p-2">
                <p>Payment status</p>
                <p className="text-sm  bg-green-300 border-green-600 border rounded-md p-1 py-0">
                  {item.payment_status.toUpperCase()}
                </p>
              </div>
              <div className="flex justify-between p-2 ">
                <p>Delivery/PickUp status</p>
                <p className="text-sm bg-yellow-300 border-yellow-500 border rounded-md p-1 py-0">
                  {item.delivery_status.toUpperCase()}
                </p>
              </div>
              <hr className="bg-gray-500 h-1/2" />
              <div className="p-2 flex justify-between">
                <div className="flex justify-between align-middle">
                  <IoCallOutline className="mt-1" />
                  <p>{item.shipping.phone}</p>
                </div>
                <div className="flex justify-between">
                  <p>Address:&nbsp;</p>
                  <p className="">
                    {item.shipping.address.line1},&nbsp;
                    {item.shipping.address.line2}
                    &nbsp;
                    {item.shipping.address.city},&nbsp;
                    {item.shipping.address.postal_code},&nbsp;
                    {item.shipping.address.country}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="mt-48 font-bold mx-auto">
          You haven't ordered anything yet.
        </div>
      )}
    </div>
  );
};

export default Orders;
