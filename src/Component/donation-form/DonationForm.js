import { useState } from 'react';
import axios from 'axios';

const DonationForm = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [IfcsCode, setIfscCode] = useState('');
  const [img, setImg] = useState('')
const [mobile, setMobile] = useState(null)


  const checkoutHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", img)
    formData.append("name", name)
    formData.append("amount", amount)
    formData.append("email", email)
    formData.append("mobile", mobile)
    formData.append("accountNo", accountNo)
    formData.append("IfcsCode", IfcsCode)
    const { data: { key } } = await axios.get("http://www.localhost:5002/api/getkey")
    const  {data} = await axios.post("http://localhost:5002/api/checkout", formData)


    const options = {
        key,
        amount: data.data.order.amount,
        currency: "INR",
        name: "Ojas NGO",
        description: "Tutorial of RazorPay",
        image: "https://res.cloudinary.com/dhb8194g1/image/upload/v1685601809/xuaje00bhabfiq14acvt.png",
        order_id: data.data.order.id,
        handler: async function (response){
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature)
          const payLoad = {
            razorpay_order_id :response.razorpay_order_id,
            razorpay_payment_id:response.razorpay_payment_id , 
            razorpay_signature:response.razorpay_signature  
          }
          const  {data} = await axios.post("http://localhost:5002/api/paymentverification", payLoad)
          console.log(data);

      },        prefill: {
            name: name,
            email: email,
            contact: mobile
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
    <div className="max-w-md mx-auto mt-2 p-2">
      <h1 className="text-2xl font-bold mb-4 text-1C6FB text-center ">Make a Donation</h1>
      <form onSubmit={checkoutHandler} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            Amount (in INR) <span class="text-yellow-500 text-2xl">*</span>
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
            Name <span class="text-yellow-500 text-2xl">*</span>

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
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Account No <span class="text-yellow-500 text-2xl">*</span>

          </label>
          <input
            type="text"
            id="name"
            value={accountNo}
            onChange={(e) => setAccountNo(e.target.value)}
            required
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-700"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            IFSC Code <span class="text-yellow-500 text-2xl">*</span>

          </label>
          <input
            type="text"
            id="name"
            value={IfcsCode}
            onChange={(e) => setIfscCode(e.target.value)}
            required
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-700"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address <span class="text-yellow-500 text-2xl">*</span>

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
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
             Contact No <span class="text-yellow-500 text-2xl">*</span>
          </label>
          <input
            type="number"
            id="email"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-gray-700"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700"  >
            Profile 
          </label>
          <input
            type="file"
            id="email"
            onChange={(e) => setImg(e.target.files[0])}
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
