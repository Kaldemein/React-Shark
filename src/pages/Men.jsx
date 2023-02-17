import React from 'react';
import Banner from '../components/Banner';
import ShopSection from '../components/ShopSection';
import BottomBlock from '../components/BottomBlock';

const backgroundImagesURL = {
  mainWomenBanner:
    'https://cdn.shopify.com/s/files/1/1367/5207/files/GY78832_ADHOC-008_INTL_Web_Banner_Desktop_3800x1700px_1_1900x.jpg?v=1675945844',
  secondWomenBanner:
    'https://cdn.shopify.com/s/files/1/1367/5207/files/GY77468_C66-018_AUS_Web_Banner_Desktop_3800x1700px_Arrival_1_1900x.jpg?v=1674723163',
  thirdWomenBanner:
    'https://cdn.shopify.com/s/files/1/1367/5207/files/MENS_SHORTS_DESKTOP_1900x.png?v=1674723341',
  fourthWomenBanner:
    'https://cdn.shopify.com/s/files/1/1367/5207/files/MENS_BESTSELLERS_DESKTOP_9e8f5c1c-6373-48e3-829d-c1151a7c826e_1900x.png?v=1674064033',
  bottomBlockBackground: {
    leftBackground:
      'https://cdn.shopify.com/s/files/1/1367/5207/files/MENS_SUB_CAT_JOGGERS_4e2a1ddf-9881-42f0-be3d-edc7f7f01743_1900x.png?v=1674064072',
    rightBackground:
      'https://cdn.shopify.com/s/files/1/1367/5207/files/MENS_SUB_CAT_TOP_71a1af70-79ad-44e2-9bd0-9e6efb44def0_1900x.png?v=1674064077',
  },
};

const Men = ({ items }) => {
  const shopItems = [
    {
      sortType: ['sex', 'type'],
      sortValue: ['men', 'rest day'],
    },
    {
      sortType: ['sex', 'title'],
      sortValue: ['men', 'Arrival'],
    },
    {
      sortType: ['sex', 'title'],
      sortValue: ['men', 'Shorts'],
    },
    {
      sortType: ['sex', 'color'],
      sortValue: ['men', 'Black'],
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

export default Men;
