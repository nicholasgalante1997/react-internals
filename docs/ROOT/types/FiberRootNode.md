# FiberRootNode Type

```json
{
  /** Unknown */
  callbackNode: null;

  /** Unknown */
  callbackPriority: number; // 0;

  /** Since this exists in the FiberRootNode, I'm inclined to lean towards an understanding that this is the html element that we've supplied to `createRoot` which our react app will be mounted onto. */
  containerInfo: HTMLElement; // div#app;

  /** Unknown */
  context: {};

  /**
  * Come back to this one
  */
  current: FiberNode;

  /** Unknown */
  effectDuration: number; // 0;


}
```
