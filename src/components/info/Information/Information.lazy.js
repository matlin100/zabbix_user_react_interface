import React, { lazy, Suspense } from 'react';

const LazyInformation = lazy(() => import('./Information'));

const Information = props => (
  <Suspense fallback={null}>
    <LazyInformation {...props} />
  </Suspense>
);

export default Information;
