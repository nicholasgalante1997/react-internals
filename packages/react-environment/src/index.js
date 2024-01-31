import React from 'react';
import { createRoot } from 'react-dom/client';

import { fiberAssistantPolyfill, reactRootWindowPolyfill } from './lib';

import { App } from './App';
import FiberAssistant from './lib/react-internals/FiberAssistant';

const root = createRoot(document.getElementById('app'));
root.render(<App />);

reactRootWindowPolyfill(root);

const fiberAssistant = new FiberAssistant(root);
fiberAssistantPolyfill(fiberAssistant);
