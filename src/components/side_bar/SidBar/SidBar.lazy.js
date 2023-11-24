import React, { lazy, Suspense } from 'react';

const LazySidBar = lazy(() => import('./SidBar'));

const SidBar = props => (
  <Suspense fallback={null}>
    <LazySidBar {...props} />
  </Suspense>
);

export default SidBar;
