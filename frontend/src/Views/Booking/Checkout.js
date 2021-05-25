import React, { useState, } from "react"; 
import { useSelector,useDispatch} from 'react-redux'
import {toastOnError} from '../../utilities'
import {Modal,Button} from 'react-bootstrap'
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {makeBooking} from '../../actions/booking' 
import {Spinner} from 'react-bootstrap'
import Moment from 'react-moment';





const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const bookingData=props.bookingDetails
  const bookingState=useSelector((state)=>state.booking)
  const loading=bookingState.loading
  const dispatch=useDispatch()
  const date= <Moment   format="YYYY-MM-DD HH:mm ">
  {bookingData.date}            
     </Moment>
  console.log(loading,bookingData,date.props.children)

   
  const handleSubmit = async (event) => {
    
    event.preventDefault();

    if (!stripe || !elements) {
      
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    }); 
    
    console.log(bookingData)
   
    let formData =new FormData()
    formData.set("car",bookingData.car)
    formData.set("created_by",bookingData.created_by)
    formData.set("dealership",bookingData.dealership)
    formData.set("date",bookingData.date)
    formData.set("status",bookingData.status)
    dispatch(makeBooking(formData))
    props.onHide()
    
    if (error) {
      toastOnError(error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return ( 

    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Complete Payment
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="px-3 flex flex-col space-y-10">
    <h1 className="font-semibold text-2xl"> Card Details </h1>
    <form  onSubmit={handleSubmit}>
      <CardElement />
      
      <button className=" mt-8 bg-red-500 hover:bg-red-400 text-white py-2 px-6 rounded w-full" type="submit" disabled={!stripe}>
       {
         loading?
         <Spinner
         as="span"
         animation="border"
         size="sm"
         role="status"
         aria-hidden="true"
         className="mr-2" 
         />:null
       }
        Pay
      </button>
    </form>
    </div>
    </Modal.Body>
    <Modal.Footer>
   
      <Button variant="danger" onClick={props.onHide}>Cancel</Button>
    </Modal.Footer>
  </Modal>

    
  );
};
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const Checkout = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm {...props} />
    </Elements>
  );
};

export default Checkout;