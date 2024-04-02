import React, { ReactElement } from 'react';

import './global.scss';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Global = (props: any): ReactElement => {
  return <div {...props}>{props.children}</div>;
};

export default Global;
