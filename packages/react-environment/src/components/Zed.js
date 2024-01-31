import React from 'react';

const zedSelectors = {
  ids: {
    root: 'react-internals__zed-container',
    node: 'react-internals__zed-node'
  }
};

/** @type {import('react').FC} */
const Zed = () => {
  return (
    <div id={zedSelectors.ids.root}>
      <img
        id={zedSelectors.ids.node}
        src="/cool-pikachu.jpg"
        alt="A hand-drawn profile picture of Pikachu in a hat and sunglasses looking dope."
      />
    </div>
  );
};

Zed.displayName = 'XZed';

export default Zed;
