# ReactDOMRoot Type

```json
{
  /** This is our entrypoint to directly work with the instance of the ReactFiber that we've created that directly represents our DOM application structure */
  _internalRoot: FiberRootNode;

  prototype: {

    /** Mounts our react application to the DOM */
    render(App);

    /** Unmounts our react application from the DOM */
    unmount();
  }
}
```
