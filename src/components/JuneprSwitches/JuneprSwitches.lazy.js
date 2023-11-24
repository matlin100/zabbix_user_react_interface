import React, { lazy, Suspense } from 'react';

const LazyJuneprSwitches = lazy(() => import('./JuneprSwitches'));

const JuneprSwitches = props => (
  <Suspense fallback={null}>
    <LazyJuneprSwitches {...props} />
  </Suspense>
);

export default JuneprSwitches;
