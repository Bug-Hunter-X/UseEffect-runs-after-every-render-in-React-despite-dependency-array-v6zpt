# React useEffect Bug: Unexpected Execution

This repository demonstrates a common React issue where the `useEffect` hook runs more frequently than expected, even with a specified dependency array. This can lead to performance problems and unexpected behavior.

## Bug Description

The `useEffect` hook within the provided `MyComponent` is intended to log the current value of `count` to the console whenever `count` changes. However, the effect executes on every render, including the initial render, despite the dependency array only including `count`.

## Solution

The issue arises because the `useEffect` hook, by design, also executes during the initial render.   Therefore, only changes to the count after the initial render are logged. The solution is to introduce a conditional check within the `useEffect` hook.