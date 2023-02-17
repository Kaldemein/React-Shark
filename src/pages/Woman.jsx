import React from 'react';
import Banner from '../components/Banner';
import ShopSection from '../components/ShopSection';
import BottomBlock from '../components/BottomBlock';

const backgroundImagesURL = {
  mainWomenBanner:
    'https://cdn.shopify.com/s/files/1/1367/5207/files/GY77468_C66-017_INTL_Web_Banner_Desktop_3800x1700px_Adapt_1900x.jpg?v=1675936033',
  secondWomenBanner:
    'https://cdn.shopify.com/s/files/1/1367/5207/files/GY77958_SWE66-006_NAM_Web_Banner_Desktop_3800x1700px_4e05c819-d964-4299-9b47-d1dc4676d616_1900x.jpg?v=1675936314',
  thirdWomenBanner:
    'https://cdn.shopify.com/s/files/1/1367/5207/files/WOMENS_BESTSELLERS_DESKTOP_9287aac6-b882-4fc7-9b4a-e1336ad9e2e7_1900x.png?v=1674671339',
  fourthWomenBanner:
    'https://cdn.shopify.com/s/files/1/1367/5207/files/GY77468_C66-018_AUS_Web_Banner_Desktop_3800x1700px_Training_1900x.jpg?v=1675936626',
  bottomBlockBackground: {
    leftBackground:
      'https://cdn.shopify.com/s/files/1/1367/5207/files/vital_shorts_1900x.jpg?v=1675938770',
    rightBackground:
      'https://cdn.shopify.com/s/files/1/1367/5207/files/view_all_adapt_1900x.jpg?v=1675938917',
  },
};

const Women = ({ items }) => {
  const shopItems = [
    {
      sortType: ['sex', 'title'],
      sortValue: ['woman', 'Sweat'],
    },
    {
      sortType: ['sex', 'type'],
      sortValue: ['woman', 'training essentials'],
    },
    {
      sortType: ['sex', 'title'],
      sortValue: ['woman', 'Vital'],
    },
    {
      sortType: ['sex', 'title'],
      sortValue: ['woman', 'Legacy'],
    },
  ];

  return (
    <div>
      <div>
        <Banner backgroundImagesURL={backgroundImagesURL.mainWomenBanner} />
        <ShopSection sort={shopItems[0]} headling={'SWEAT COLLECTION'} items={items} />
        <Banner backgroundImagesURL={backgroundImagesURL.secondWomenBanner} />
        <ShopSection sort={shopItems[1]} headling={'All Mens Sale'} items={items} />
        <Banner backgroundImagesURL={backgroundImagesURL.thirdWomenBanner} />
        <ShopSection sort={shopItems[2]} headling={'PUMP COVERS'} items={items} />
        <Banner backgroundImagesURL={backgroundImagesURL.fourthWomenBanner} />
        <ShopSection sort={shopItems[3]} headling={'PUMP COVERS'} items={items} />
        <BottomBlock background={backgroundImagesURL.bottomBlockBackground} />
      </div>
    </div>
  );
};

export default Women;
