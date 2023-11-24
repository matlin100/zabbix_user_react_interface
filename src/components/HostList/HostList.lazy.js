import React, { lazy, Suspense } from 'react';

const LazyHostList = lazy(() => import('./HostList'));

const HostList = props => (
  <Suspense fallback={null}>
    <LazyHostList {...props} />
  </Suspense>
);

export default HostList;
