import React, { lazy, Suspense } from 'react';

const LazyZabbixDashboardt = lazy(() => import('./ZabbixDashboardt'));

const ZabbixDashboardt = props => (
  <Suspense fallback={null}>
    <LazyZabbixDashboardt {...props} />
  </Suspense>
);

export default ZabbixDashboardt;
