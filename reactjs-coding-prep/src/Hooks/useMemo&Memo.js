// useMemo Hook

// Purpose
// useMemo memoizes a computed value to avoid unnecessary recalculations during re-renders.

// use case
// Used inside a functional component to optimize expensize computations


// Syntax
const memoizedValue = useMemo(() => computeExpensiveValue(data), [data]);

// Example
import { useMemo } from 'react';

const myComponent = ({ data }) => {
    const computedValue = useMemo(() => {
        return data * 2;
    }, [data]);

    return <div>Computed Value : {computedValue}</div>
}

// How it works?
// 1. If data does not change the computation is not re-executed.
// 2. Prevents unnecessary recalculations within the component.

React.memo(Higher - Order Component);

// Purpose
React.memo memorizes a whole component to prevent unnecessary re - renders when props havent changed

// Use Case
Used to wrap functional components that receive the same props frequently, preventing re - renders.

// Syntax
const MemoizedComponent = React.memo(Component);

// Example
import React from 'react';

const MyComponent = ({ value }) => {
    return <div>{value}</div>
}

export default React.memo(MyComponent)

