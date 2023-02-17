import React from 'react';
import Banner from '../components/Banner';
import ShopSection from '../components/ShopSection';
import BottomBlock from '../components/BottomBlock';
const Home = ({ items }) => {
  const backgroundImagesURL = {
    mainBanner:
      'https://cdn.shopify.com/s/files/1/1367/5207/files/GY77470_VIT66-008_AUS_Web_Banner_Desktop_3800x1700px_Vital_1900x.jpg?v=1674665842',
    secondBanner:
      'https://cdn.shopify.com/s/files/1/1367/5207/files/GY77468_C66-018_INTL_Web_Banner_Desktop_3800x1700px_Training_Arrival_Dual_1900x.jpg?v=1674665972',
    thirdBanner:
      'https://cdn.shopify.com/s/files/1/1367/5207/files/GY77468_C66-018_INTL_Web_Banner_Desktop_3800x1700px_Sports_Bras_1_1900x.jpg?v=1674666145',
    bottomBlockBackground: {
      leftBackground:
        'https://cdn.shopify.com/s/files/1/1367/5207/files/shop_womens_ab1dc1ab-c71b-40f1-b966-2b9292983d69_1900x.jpg?v=1675859825',
      rightBackground:
        'https://cdn.shopify.com/s/files/1/1367/5207/files/GY77468_C66-018_INTL_Web_Banner_Category_Image_1880x1460px_Shop_Mens_1900x.jpg?v=1674666252',
    },
  };

  const shopItems = [
    {
      sortType: ['sex'],
      sortValue: ['woman'],
    },
    {
      sortType: ['type', 'sex'],
      sortValue: ['training essentials', 'men'],
    },
    {
      sortType: ['type'],
      sortValue: ['pump cover'],
    },
  ];
  return (
    <div>
      <Banner backgroundImagesURL={backgroundImagesURL.mainBanner} />
      <ShopSection sort={shopItems[0]} headling={'SWEAT COLLECTION'} items={items} />
      <Banner backgroundImagesURL={backgroundImagesURL.secondBanner} />
      <ShopSection sort={shopItems[1]} headling={'All Mens Sale'} items={items} />
      <Banner backgroundImagesURL={backgroundImagesURL.thirdBanner} />
      <ShopSection sort={shopItems[2]} headling={'PUMP COVERS'} items={items} />
      <Banner backgroundImagesURL={backgroundImagesURL.secondBanner} />
      <BottomBlock background={backgroundImagesURL.bottomBlockBackground} />
    </div>
  );
};

export default Home;
