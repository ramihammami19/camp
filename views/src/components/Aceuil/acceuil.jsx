import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faCar } from '@fortawesome/free-solid-svg-icons'; // Import the necessary icons

const Aceuil = () => {
  return (
    <div className="text-center p-10">
      <h1 className="font-bold text-4xl mb-4">
        a5ter dark <FontAwesomeIcon icon={faCar} /> {/* Adding the car icon here */}
      </h1>
      {/* <h1 className="text-3xl">Tailwind CSS</h1> */}

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {productCards.map((product, index) => (
          <div
            key={index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <a href="#">
              <img
                src={product.image}
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  {product.brand}
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {product.name}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {product.price}
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      {product.oldPrice}
                    </p>
                  </del>
                  <div className="ml-auto">
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>

      <div className="text-center py-10 px-10">
        <h2 className="font-bold text-2xl md:text-4xl mb-4">
          Thanks to{' '}
          <a
            href="https://www.facebook.com/rami.hammami.3766"
            className="underline font-black"
          >
            contact us
          </a>{' '}
          for more detail   
          <FontAwesomeIcon icon={faFaceSmile} /> {/* Adding the smile icon here */}
        </h2>
      </div>

      <script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></script>
      <script>
        {`kofiWidgetOverlay.draw('mohamedghulam', {
          'type': 'floating-chat',
          'floating-chat.donateButton.text': 'Support me',
          'floating-chat.donateButton.background-color': '#323842',
          'floating-chat.donateButton.text-color': '#fff',
        });`}
      </script>
    </div>
  );
};

const productCards = [
  {
    image: "car.avif",
    brand: 'camp car',
    name: 'toyota',
    price: '100dt/day',
    oldPrice: '150dt/day',
  },
  {
    image: "car2.jpg",
    brand: 'camp car',
    name: 'toyota',
    price: '100dt/day',
    oldPrice: '150dt/day',
  },
  {
    image: "car3.webp",
    brand: 'camp car',
    name: 'toyota',
    price: '100dt/day',
    oldPrice: '150dt/day',
  },
  {
    image: "car4.jpg",
    brand: 'camp car',
    name: 'volkswagen ',
    price: '150dt/day',
    oldPrice: '200dt/day',
  },
  {
    image: "car5.jpeg",
    brand: 'camp car',
    name: 'volkswagen ',
    price: '150dt/day',
    oldPrice: '200dt/day',
  },
  {
    image: "car6.jpg",
    brand: 'camp car',
    name: 'volkswagen ',
    price: '150dt/day',
    oldPrice: '200dt/day',
  },
];

export default Aceuil;
