import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={440}
    height={588}
    viewBox="0 0 445 588"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="0" rx="0" ry="0" width="440" height="532" />
    <rect x="0" y="434" rx="0" ry="0" width="189" height="32" />
    <rect x="307" y="435" rx="0" ry="0" width="44" height="32" />
    <rect x="0" y="550" rx="0" ry="0" width="269" height="29" />
    <rect x="388" y="546" rx="0" ry="0" width="56" height="38" />
  </ContentLoader>
);

export default Skeleton;
