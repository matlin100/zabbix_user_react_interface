import React, { lazy, Suspense } from 'react';

const LazySinglHost = lazy(() => import('./SinglHost'));

const SinglHost = props => (
  <Suspense fallback={null}>
    <LazySinglHost {...props} />
  </Suspense>
);

export default SinglHost;
