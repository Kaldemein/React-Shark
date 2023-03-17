import React from 'react';
import Banner from '../components/Banner';
import ShopSection from '../components/ShopSection';
import BottomBlock from '../components/BottomBlock';
const Home = ({ items, onClickAdd }) => {
  const BannerProps = {
    banners: [
      'https://cdn.shopify.com/s/files/1/1367/5207/files/GY77470_VIT66-008_AUS_Web_Banner_Desktop_3800x1700px_Vital_1900x.jpg?v=1674665842',
      'https://cdn.shopify.com/s/files/1/1367/5207/files/GY78832_ADHOC-006_AUS_Web_Banner_Desktop_3800x1700px_Power_1900x.jpg?v=1677075390',
      'https://cdn.shopify.com/s/files/1/1367/5207/files/GY78832_ADHOC-006_INTL_Web_Banner_Desktop_3800x1700px_Legacy_1900x.jpg?v=1677076667',
      'https://cdn.shopify.com/s/files/1/1367/5207/files/GY77468_C66-017_INTL_Web_Banner_Desktop_3800x1700px_Dual_1900x.jpg?v=1675856830',
    ],
    headlings: [
      'TRAINING ESSENTIALS: ADAPT & ARRIVAL',
      'POWER. MADE TO FAIL IN',
      'BUILD YOUR LEGACY',
    ],
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
      sortType: ['type', 'sex'],
      sortValue: ['pump cover', 'men'],
    },
  ];
  return (
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
      <Banner headling={BannerProps.headlings[0]} BannerBackground={BannerProps.banners[3]} />
      <BottomBlock background={BannerProps.bottomBlockBackground} />
    </div>
  );
};

export default Home;
