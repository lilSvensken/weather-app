import React, { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';
import { PageLoader } from 'widgets/PageLoader';
import { Header } from 'widgets/Header';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Suspense fallback={ <PageLoader /> }>
        <AppRouter />
      </Suspense>
    </div>
  );
};

export default App;
