import React, { lazy, Suspense } from 'react';

const LazyCiscoSwitchs = lazy(() => import('./CiscoSwitchs'));

const CiscoSwitchs = props => (
  <Suspense fallback={null}>
    <LazyCiscoSwitchs {...props} />
  </Suspense>
);

export default CiscoSwitchs;
