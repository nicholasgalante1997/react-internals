import { requestLogger } from '../logger';

class FiberAssistant {
  _logger = requestLogger();
  _root;
  _env;

  constructor(root) {
    this._root = root;
    this._env = process?.env?.NODE_ENV || 'production';
  }

  findByDisplayName(displayName, options = {}) {
    this._logger.group('ReactFiberAssistant:::findByDisplayName');

    if (this._root == null) {
      this._logger.error('fatal: react root is null.');
      return null;
    }

    const fiberRootNode = this._root?._internalRoot;
    const foundNodes = [];
    const condition = {
      type: 'displayName',
      value: displayName
    };

    this._logger.info('inside findByDisplayName');

    this.crawlTreeAndAppendOnCondition(
      fiberRootNode.current,
      foundNodes,
      condition
    );

    this._logger.groupEnd();

    return foundNodes;
  }

  crawlTreeAndAppendOnCondition(node, foundNodes, condition) {
    switch (condition.type) {
      case 'displayName': {
        this._logger.info('inside displayName case block');
        if (this.fiberNodeIsReactComponent(node)) {
          const fiberNodeDisplayName =
            node?.elementType?.displayName || node?.type?.displayName;
          if (fiberNodeDisplayName == condition.value) {
            foundNodes.push(node);
          }

          if (this.fiberNodeHasSibling(node)) {
            this.crawlTreeAndAppendOnCondition(
              node.sibling,
              foundNodes,
              condition
            );
          }

          if (this.fiberNodeHasChild(node)) {
            this.crawlTreeAndAppendOnCondition(
              node.child,
              foundNodes,
              condition
            );
          }
        }
        break;
      }
    }
  }

  fiberNodeHasChild(node) {
    return node.child !== null;
  }

  fiberNodeHasSibling(node) {
    return node.sibling !== null;
  }

  fiberNodeIsReactComponent(node) {
    this._logger.info(typeof node?.elementType);
    return (
      typeof node?.elementType === 'object' ||
      typeof node?.elementType === 'function' ||
      typeof node?.type === 'object' ||
      typeof node?.type === 'function'
    );
  }

  fiberNodeIsHtmlElement(node) {
    return (
      typeof node?.elementType === 'string' || typeof node?.type === 'string'
    );
  }
}

export default FiberAssistant;
