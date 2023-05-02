import React, { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';
import { PageLoader } from 'widgets/PageLoader';
import { Header } from 'widgets/Header';

const App = () => {
  return (
    // app-light-theme будет подставляться при переключении темы на светлую
    <div className="app app-light-theme">
      <Header />
      <Suspense fallback={ <PageLoader /> }>
        <AppRouter />
      </Suspense>
    </div>
  );
};

export default App;
