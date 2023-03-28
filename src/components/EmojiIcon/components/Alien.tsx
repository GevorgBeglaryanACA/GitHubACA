import React, {FC} from 'react';

const Alien: FC<React.HTMLAttributes<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="65"
      height="65"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path d="M0 64.4965H64.2351V0.261392H0V64.4965Z" fill="url(#patternAlien0)" />
      <defs>
        <pattern id="patternAlien0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#imageAlien0" transform="scale(0.015625)" />
        </pattern>
        <image
          id="imageAlien0"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Alien;
