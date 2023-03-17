import React from 'react';
import Banner from '../components/Banner';
import ShopSection from '../components/ShopSection';
import BottomBlock from '../components/BottomBlock';

const BannerProps = {
  banners: [
    'https://cdn.shopify.com/s/files/1/1367/5207/files/GY78832_ADHOC-008_INTL_Web_Banner_Desktop_3800x1700px_1_1900x.jpg?v=1675945844',
    'https://cdn.shopify.com/s/files/1/1367/5207/files/GY77468_C66-018_AUS_Web_Banner_Desktop_3800x1700px_Arrival_1_1900x.jpg?v=1674723163',
    'https://cdn.shopify.com/s/files/1/1367/5207/files/MENS_SHORTS_DESKTOP_1900x.png?v=1674723341',
    'https://cdn.shopify.com/s/files/1/1367/5207/files/MENS_BESTSELLERS_DESKTOP_9e8f5c1c-6373-48e3-829d-c1151a7c826e_1900x.png?v=1674064033',
  ],
  headling: [
    'POWER. MADE TO FAIL IN',
    'AT YOUR LEISURE',
    'BUILD YOUR LEGACY',
    'REDEFINE YOUR POTENTIAL',
  ],
  bottomBlockBackground: {
    leftBackground:
      'https://cdn.shopify.com/s/files/1/1367/5207/files/MENS_SUB_CAT_JOGGERS_4e2a1ddf-9881-42f0-be3d-edc7f7f01743_1900x.png?v=1674064072',
    rightBackground:
      'https://cdn.shopify.com/s/files/1/1367/5207/files/MENS_SUB_CAT_TOP_71a1af70-79ad-44e2-9bd0-9e6efb44def0_1900x.png?v=1674064077',
  },
};

const Men = ({ items, onClickAdd }) => {
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
        <Banner headling={BannerProps.headling[0]} BannerBackground={BannerProps.banners[0]} />
        <ShopSection
          onClickAdd={onClickAdd}
          sort={shopItems[0]}
          headling={'SWEAT COLLECTION'}
          items={items}
        />
        <Banner headling={BannerProps.headling[1]} BannerBackground={BannerProps.banners[1]} />
        <ShopSection
          onClickAdd={onClickAdd}
          sort={shopItems[1]}
          headling={'All Mens Sale'}
          items={items}
        />
        <Banner headling={BannerProps.headling[2]} BannerBackground={BannerProps.banners[2]} />
        <ShopSection
          onClickAdd={onClickAdd}
          sort={shopItems[2]}
          headling={'PUMP COVERS'}
          items={items}
        />
        <Banner headling={BannerProps.headling[3]} BannerBackground={BannerProps.banners[3]} />
        <ShopSection
          onClickAdd={onClickAdd}
          sort={shopItems[3]}
          headling={'PUMP COVERS'}
          items={items}
        />
        <BottomBlock background={BannerProps.bottomBlockBackground} />
      </div>
    </div>
  );
};

export default Men;
