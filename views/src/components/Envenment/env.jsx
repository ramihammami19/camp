import React from 'react';

const Card = ({ imgSrc, isNew, stock, title, description }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <div className="relative">
      <img className="w-full h-48 object-cover" src={imgSrc} alt="Placeholder" />
      {isNew && (
        <div className="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">
          New
        </div>
      )}
      <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">
      mawjoudin {stock} 
      </div>
    </div>
    <div className="p-4">
      <div className="text-lg font-medium text-gray-800 mb-2">{title}</div>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  </div>
);

const CardGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20">
    <Card
      imgSrc="./tent.avif"
      isNew={true}
      stock={10}
      title="Tente 3 place"
      description="hadi tente 3 place lil bi3 wala lil kra bi soum 3adi ahna n3ounou li m8arma ken bech tikri lila bi 10dt w ken bech tichri 100dt klmna ken theb titsfser    num : 93300845 "  
    />
    <Card
      imgSrc="./tent1.webp"
      isNew={false}
      stock={30}
      title="Tente 8 place"
      description="hadi tente 3 place lil bi3 wala lil kra bi soum 3adi ahna n3ounou li m8arma ken bech tikri lila bi 20dt w ken bech tichri 100dt klmna ken theb titsfser    num : 93300845 "      />
    <Card
      imgSrc="./tent3.jpg"
      isNew={true}
      stock={20}
      title="Tente 8 place"
      description="hadi tente 3 place lil bi3 wala lil kra bi soum 3adi ahna n3ounou li m8arma ken bech tikri lila bi 20dt w ken bech tichri 150dt klmna ken theb titsfser    num : 93300845 "      />
    <Card
      imgSrc="./tent4.jpg"
      isNew={false}
      stock={25}
      title="Tente 4 place"
      description="hadi tente 3 place lil bi3 wala lil kra bi soum 3adi ahna n3ounou li m8arma ken bech tikri lila bi 10dt w ken bech tichri 100dt klmna ken theb titsfser    num : 93300845 "      />
    <Card
      imgSrc="./tent5.jpg"
      isNew={false}
      stock={35}
      title="Tente 4 place"
      description="hadi tente 3 place lil bi3 wala lil kra bi soum 3adi ahna n3ounou li m8arma ken bech tikri lila bi 10dt w ken bech tichri 100dt klmna ken theb titsfser    num : 93300845 "      />
    <Card
      imgSrc="./tent6.jpg"
      isNew={false}
      stock={18}
      title="Tente 8 place"
      description="hadi tente 3 place lil bi3 wala lil kra bi soum 3adi ahna n3ounou li m8arma ken bech tikri lila bi 20dt w ken bech tichri 150dt klmna ken theb titsfser    num : 93300845 "      />
    

       <Card
      imgSrc="./cous5.webp"
      isNew={true}
      stock={30}
      title="sac couchage"
      description="sac couchage imperméable 2M toulha lil kra w lil bi3 ken bech tikri 7dt w ken bech tichri 10dt   klmna ken theb titsfser    num : 93300845 "  
    />
       <Card
      imgSrc="./cou1.jpeg"
      isNew={true}
      stock={25}couchage
      title="sac couchage"
      description="sac couchage carinthia  imperméable 2M toulha lil kra w lil bi3 ken bech tikri 7dt w ken bech tichri 10dt   klmna ken theb titsfser    num : 93300845 "  
    />
      <Card
      imgSrc="./cous.jpg"
      isNew={true}
      stock={35}
      title="sac couchage"
      description="sac couchage imperméable 2M toulha lil kra w lil bi3 ken bech tikri 7dt w ken bech tichri 10dt   klmna ken theb titsfser    num : 93300845 "  
    />
      <Card
      imgSrc="./dou.jpeg"
      isNew={true}
      stock={10}
      title="sac de camping"
      description="sac de camp  quechua 100L  imperméable w m3ha sac couchage  gratuit lil kra w lil bi3 ken bech tikri 10dt w ken bech tchri 70dt   klmna ken theb titsfser    num : 93300845 "  
    />
    <Card
      imgSrc="./dou1.jpg"
      isNew={true}
      stock={15}
      title="sac de camping"
      description="sac de camp  quechua 100L  imperméable w faha porte mnin tchragi taliphounk  gratuit lil kra w lil bi3 ken bech tikri 15dt w ken bech tchri 90dt   klmna ken theb titsfser    num : 93300845 "  
    />
    <Card
      imgSrc="./dou2.jpg"
      isNew={true}
      stock={20}
      title="sac de camping"
      description="sac de camp  100L  imperméable w m3ha  lil kra w lil bi3 ken bech tikri 10dt w ken bech tchri 70dt   klmna ken theb titsfser    num : 93300845 "  
    />
    <Card
      imgSrc="./sac3.jpg"
      isNew={true}
      stock={30}
      title="sac de camping"
      description="sac de camp  militaire 100L  imperméable w  lil kra w lil bi3 ken bech tikri 15dt w ken bech tchri 80dt   klmna ken theb titsfser    num : 93300845 "  
    />
  
  
  
  
  
  
  </div>
);

export default CardGrid;
