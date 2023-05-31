import { useState } from 'react';
import axios from 'axios';

const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const checkoutHandler = async (e) => {
    e.preventDefault();
    const { data: { key } } = await axios.get("http://www.localhost:5002/api/getkey")
console.log(key);
    const  {data} = await axios.post("http://localhost:5002/api/checkout", {
        amount
    })
    console.log(data);

    const options = {
        key,
        amount: data.data.order.amount,
        currency: "INR",
        name: "6 Pack Programmer",
        description: "Tutorial of RazorPay",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: data.data.order.id,
        callback_url: "http://localhost:5002/api/paymentverification",
        prefill: {
            name: name,
            email: email,
            contact: "9975040577"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };
    const razor = new window.Razorpay(options);
    console.log(razor);
    razor.open();
}

//   const handleSubmit = async (e) => {
//     e.preventDefault();
// console.log(email);
// console.log(amount);
//     // Create a Razorpay order
//     const orderResponse = await axios.post('/create-order', {
//       amount,
//       name,
//       email,
//     });

//     const { id, amount: orderAmount, currency } = orderResponse.data;

//     // Initialize Razorpay payment
//     const razorpay = new window.Razorpay({
//       key: 'YOUR_RAZORPAY_API_KEY',
//       amount: orderAmount,
//       currency,
//       name: 'Your Organization',
//       description: 'Donation',
//       order_id: id,
//       handler: function (response) {
//         // Handle the payment success
//         console.log('Payment success:', response);
//       },
//       prefill: {
//         name,
//         email,
//       },
//     });

//     // Open Razorpay payment modal
//     razorpay.open();
//   };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Make a Donation</h1>
      <form onSubmit={checkoutHandler} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount (in INR)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-700"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-700"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-700"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Donate
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
