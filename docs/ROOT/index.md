# React Root

> This is a research spike into leveraging the react-root constructed by our initial call to `REACTDOMClient.createRoot` to query for a given component and it's metadata based off the FuntionComponent property `displayName`.

## What is the React Root?

It is a complex type internal to React. It is the return type of our call to `REACTDOMClient.createRoot(document.getElementById('app'))`. We typically only leverage the react root to render our tree if we elect to client side render. If we leverage SSR or Static Page Hydration, we likely never interact directly with the root.

There are several important types we're working with when we start to directly work with the ReactDOMRoot instance.
