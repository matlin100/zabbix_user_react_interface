import React, { lazy, Suspense } from 'react';

const LazyGraphs = lazy(() => import('./Graphs'));

const Graphs = props => (
  <Suspense fallback={null}>
    <LazyGraphs {...props} />
  </Suspense>
);

export default Graphs;
