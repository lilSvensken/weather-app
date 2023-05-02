import React, { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';
import { PageLoader } from 'widgets/PageLoader';

const App = () => {
  return (
    <div className="app">
      <Suspense fallback={ <PageLoader /> }>
        <AppRouter />
      </Suspense>
    </div>
  );
};

export default App;
