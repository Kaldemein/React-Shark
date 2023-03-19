import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={360}
    height={500}
    viewBox="0 0 360 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="391" y="539" rx="0" ry="0" width="53" height="31" />
    <rect x="0" y="0" rx="0" ry="0" width="350" height="420" />
    <rect x="0" y="434" rx="0" ry="0" width="123" height="32" />
    <rect x="307" y="435" rx="0" ry="0" width="44" height="32" />
  </ContentLoader>
);

export default MyLoader;
