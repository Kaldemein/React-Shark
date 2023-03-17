import React from 'react';
import Banner from '../components/Banner';
import ShopSection from '../components/ShopSection';
import BottomBlock from '../components/BottomBlock';

const BannerProps = {
  banners: [
    'https://cdn.shopify.com/s/files/1/1367/5207/files/GY77468_C66-017_INTL_Web_Banner_Desktop_3800x1700px_Adapt_1900x.jpg?v=1675936033',
    'https://cdn.shopify.com/s/files/1/1367/5207/files/GY77958_SWE66-006_NAM_Web_Banner_Desktop_3800x1700px_4e05c819-d964-4299-9b47-d1dc4676d616_1900x.jpg?v=1675936314',
    'https://cdn.shopify.com/s/files/1/1367/5207/files/WOMENS_BESTSELLERS_DESKTOP_9287aac6-b882-4fc7-9b4a-e1336ad9e2e7_1900x.png?v=1674671339',
    'https://cdn.shopify.com/s/files/1/1367/5207/files/GY77468_C66-018_AUS_Web_Banner_Desktop_3800x1700px_Training_1900x.jpg?v=1675936626',
  ],
  headlings: ['SWEAT', 'POWER. MADE TO FAIL IN', 'BUILD YOUR LEGACY'],
  bottomBlockBackground: {
    leftBackground:
      'https://cdn.shopify.com/s/files/1/1367/5207/files/vital_shorts_1900x.jpg?v=1675938770',
    rightBackground:
      'https://cdn.shopify.com/s/files/1/1367/5207/files/view_all_adapt_1900x.jpg?v=1675938917',
  },
};

const Women = ({ items, onClickAdd }) => {
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
        <Banner headling={BannerProps.headlings[0]} BannerBackground={BannerProps.banners[0]} />
        <ShopSection
          onClickAdd={onClickAdd}
          sort={shopItems[0]}
          headling={'SWEAT COLLECTION'}
          items={items}
        />
        <Banner headling={BannerProps.headlings[1]} BannerBackground={BannerProps.banners[1]} />
        <ShopSection
          onClickAdd={onClickAdd}
          sort={shopItems[1]}
          headling={'All Mens Sale'}
          items={items}
        />
        <Banner headling={BannerProps.headlings[2]} BannerBackground={BannerProps.banners[2]} />
        <ShopSection
          onClickAdd={onClickAdd}
          sort={shopItems[2]}
          headling={'PUMP COVERS'}
          items={items}
        />
        <Banner headling={BannerProps.headlings[3]} BannerBackground={BannerProps.banners[3]} />
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

export default Women;
