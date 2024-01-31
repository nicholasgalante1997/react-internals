import { requestLogger } from '@/lib/logger';

function fiberAssistantPolyfill(fiberAssistant) {
  'use strict';

  const logger = requestLogger();
  logger.group('FIBER_ASSISTANT_WINDOW_ATTACHMENT_GROUP');
  if (typeof window !== 'undefined') {
    Object.defineProperty(window, '_fiberAssistant', {
      value: fiberAssistant,
      writable: false
    });
  }
  logger.info(
    'Wrote `fiberAssistant` to window under property name "reactInstanceRoot". Try running: `console.log(window.reactInstanceRoot);` to inspect it further.'
  );
  logger.groupEnd();
}

function reactRootWindowPolyfill(root) {
  'use strict';

  const logger = requestLogger();
  logger.group('REACT_ROOT_WINDOW_ATTACHMENT_GROUP');
  if (typeof window !== 'undefined') {
    Object.defineProperty(window, '__REACT_DOM_ROOT__', {
      value: root,
      writable: false
    });
  }
  logger.info(
    'Wrote `reactRoot` to window under property name "reactInstanceRoot". Try running: `console.log(window.reactInstanceRoot);` to inspect it further.'
  );
  logger.groupEnd();
}

export { reactRootWindowPolyfill, fiberAssistantPolyfill };
