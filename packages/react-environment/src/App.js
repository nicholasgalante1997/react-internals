import React from 'react';
import Zed from './components/Zed';

/** @type {import('react').FC} */
const App = () => {
  return (
    <div id="react-internals__main-root">
      <Zed />
    </div>
  );
};

App.displayName = 'XApp';

export { App };
