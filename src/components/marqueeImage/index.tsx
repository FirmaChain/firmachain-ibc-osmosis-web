import React from 'react';
import Marquee from 'react-fast-marquee';

import { MarqueeImageList, MarqueeImageItem } from './styles';

const MarqueeImage = ({ dataList }: { dataList: { name: string; img: string }[] }) => {
  return (
    <Marquee speed={20} gradient autoFill={true} style={{ overflow: 'hidden' }}>
      <MarqueeImageList>
        {[...dataList].map((data, index) => (
          <MarqueeImageItem key={index} src={data.img} alt={data.name} />
        ))}
      </MarqueeImageList>
    </Marquee>
  );
};

export default React.memo(MarqueeImage);
