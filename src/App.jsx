import React, { useState } from 'react';
 

const products = [
  {
    id: 1,
    name: 'Vintage Inspired Strawberry and Daisy Mug',
    href: '#',
    price: 45,
    imageSrc: 'https://i.etsystatic.com/52160164/r/il/ed0629/6116404207/il_794xN.6116404207_khox.jpg',
  },
  {
    id: 2,
    name: 'Gothicat Round Ceramic Mug',
    href: '#',
    price: 48,
    imageSrc: 'https://i.pinimg.com/564x/8d/e3/b1/8de3b19caec126044b6e4bff9681cefe.jpg',
  },
  {
    id: 3,
    name: 'White Autumn Pumpkin And Hedgehog Mug',
    href: '#',
    price: 130,
    imageSrc: 'https://www.lululoveshome.co.uk/cdn/shop/files/image_6551920e-fc42-4021-bf06-32cd3e8234eb_720x.jpg?v=1724366705',
  },
  {
    id: 4,
    name: 'Snoopy Mug',
    href: '#',
    price: 49,
    imageSrc: 'https://i.pinimg.com/736x/2b/45/10/2b45100f2c186c0ea7467bdbfe3df3bd.jpg',
  },
  {
    id: 5,
    name: 'Holoday Christmas Mug',
    href: '#',
    price: 49,
    imageSrc: 'https://i.pinimg.com/564x/91/9f/a8/919fa82a7d2e5f364b0a9a9aeeef065b.jpg',
  },
  {
    id: 6,
    name: 'Snowman Mug',
    href: '#',
    price: 59,
    imageSrc: 'https://i.pinimg.com/564x/5d/60/ed/5d60ed022fa1745101d7fe17b561acf4.jpg',
  },
  {
    id: 7,
    name: 'Blueberry Fields Mug',
    href: '#',
    price: 45,
    imageSrc: 'https://i.pinimg.com/564x/0c/e7/a3/0ce7a32081339127c0750f2aefd56e46.jpg',
  },
  {
    id: 8,
    name: 'Breakfast cup',
    href: '#',
    price: 72,
    imageSrc: 'https://i.etsystatic.com/26678687/r/il/6cfeb0/6249473589/il_600x600.6249473589_2wl6.jpg',
  },
  {
    id: 9,
    name: 'Banana Handmade and Hand painted Ceramic Mug',
    href: '#',
    price: 115,
    imageSrc: 'https://i.etsystatic.com/30293758/r/il/e8aa47/4829281925/il_794xN.4829281925_ah32.jpg',
  },
  {
    id: 10,
    name: 'Floral Espresso Cup with Soucer',
    href: '#',
    price: 125,
    imageSrc: 'https://i.etsystatic.com/47633427/r/il/6704d5/6287808548/il_794xN.6287808548_ikww.jpg',
  },
  {
    id: 11,
    name: 'Cute Fox Mug',
    href: '#',
    price: 99,
    imageSrc: 'https://i.pinimg.com/564x/b2/cf/d4/b2cfd44efd03f6eab00eaf9ea104bd2b.jpg',
  },
  {
    id: 12,
    name: 'Autumn Ceramic Coffee Cup',
    href: '#',
    price: 45,
    imageSrc: 'https://i.pinimg.com/564x/e7/cc/ce/e7ccceca8bb4eab0a9443df41a330f8f.jpg',
  }
];

export default function Example() {
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState(''); //
  const [discount, setDiscount] = useState(0);
  const shippingCost = 100;

  // เพิ่มสินค้าในตะกร้า
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // ลบสินค้าออกจากตะกร้า
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // เพิ่มหรือลดจำนวนสินค้า
  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  // คำนวณราคารวม
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // ฟังก์ชันเลือกคูปอง
  const handleCouponSelect = (selectedCoupon) => {
    setCoupon(selectedCoupon);
    if (selectedCoupon === 'DISCOUNT10') {
      setDiscount(0.1); // ลด 10%
    } else if (selectedCoupon === 'DISCOUNT20') {
      setDiscount(0.2); // ลด 20%
    } else {
      setDiscount(0);
    }
  };

  return (
    <div className="bg-[#FAF7F0]">
      {/* แสดงรายการสินค้า */}
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h1 className="text-5xl font-bold mb-16 text-center text-[#914F1E] ">Product List</h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
          <div key={product.id} className="group flex flex-col justify-between">
            <div className="w-full h-64 overflow-hidden rounded-lg bg-gray-200">
              <img
                src={product.imageSrc}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-[#994D1C]">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-[#914F1E]">฿{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-[#A66E38] text-white py-2 rounded-lg hover:bg-[#A67B5B]"
            >
              Add to Cart
            </button>
          </div>          
          ))}
        </div>
      </div>

      {/* ตะกร้าสินค้า */}
      <div className="bg-[#FAF7F0] p-4 rounded-lg mt-4 mx-auto max-w-2xl border-4 border-[#914F1E]">
        <h2 className="text-2xl font-bold mb-4 text-[#914F1E]">Shopping Cart</h2>
        {cart.length > 0 ? (
          <div>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-4 border-b-2 border-[#914F1E] pb-4">
                <div className='flex items-start'>
                <img src={item.imageSrc} alt={item.name} className="w-16 h-16 object-cover rounded border border-[#914F1E] " />
                  <div className="ml-5">
                  <h4 className="text-left text-[#914F1E]">{item.name}</h4>
                  <p className="text-left text-[#914F1E]">Price: ฿{item.price}</p>
                  <p className="text-left text-[#914F1E]">Quantity</p>
                  <div className="flex items-center mt-1">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
                     className="border-2 border-[#914F1E] rounded-md w-6 h-6 flex items-center justify-center mx-1 text-[#914F1E] " >-</button>
                    <span className="mx-2 text-[#914F1E]">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="border-2 border-[#914F1E] rounded-md w-6 h-6 flex items-center justify-center mx-1 text-[#914F1E]">+</button>
                  </div>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-[#FF6600]">Remove</button>
              </div>
            ))}
            <p className="text-lg text-[#914F1E]">Subtotal: ฿{totalPrice}</p>
            <p className="text-lg text-[#914F1E]">Shipping: ฿{shippingCost}</p>
            <p className="text-lg text-[#914F1E]">Discount: ฿{(totalPrice * discount).toFixed(2)}</p>
            <p className="text-xl font-bold text-[#914F1E]">Total: ฿{(totalPrice + shippingCost - totalPrice * discount).toFixed(2)}</p>

            {/* ส่วนคูปอง */}
            <div className="mt-4 ">
              <h3 className='text-[#914F1E]'>Select a Coupon</h3>
              <button onClick={() => handleCouponSelect('DISCOUNT10')} className="mt-2 mr-2 bg-[#C1E2A4] text-[#914F1E] py-1 px-3 rounded-lg">10% Off</button>
              <button onClick={() => handleCouponSelect('DISCOUNT20')} className="mt-2 bg-[#C4D7FF] text-[#914F1E] py-1 px-3 rounded-lg ">20% Off</button>
            </div>
          </div>
        ) : (
          <p className='text-[#914F1E]'>Cart is empty</p>
        )}
      </div>
    </div>
  );
}
