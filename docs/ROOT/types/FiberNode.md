# FiberNode Type

> This is not a full shape of the `React.FiberNode` type. I cherry-picked what I felt was important to this spike.

```json
{
  /** */
  alternate: FiberNode;

  /** */
  child: FiberNode | null;

  deletions: null;
  dependencies: null;
  elementType: null | string | React.FC;
  flags: number; // 1024;
  index: number; // 0;
  key: null; // ???
  lanes: number; // 0;
  memoizedProps: null;
  memoizedState: {
    cache: boolean; // false;
    element: {
      '$$typeof': Symbol(react.element);
      key: null;
      props: {};
      ref: null;
      type:
    }
  }
}
```

## Findings

A fiber node with a `child` field of null and a `return` field that is not null indicates we've arrived at the leaf of a ReactFiber branch; FiberNodes compose a tree shape down from the FiberRootNode#current field.
