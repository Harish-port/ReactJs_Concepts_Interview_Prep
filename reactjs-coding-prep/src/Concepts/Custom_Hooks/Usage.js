import { useState } from 'react'
import usePrevious from './usePrevious';
import { useFetch } from './UseFetch';
import useWindowSize from './useWindowSize';

export default function CustomHookUsage() {
    const [count, setCount] = useState(0);
    const previousCount = usePrevious(count);
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
    const { width, height } = useWindowSize();
    console.log(data);
    if (loading) return <>Loading..........</>
    return (
        <div>
            {/* {count}
            {previousCount} */}
            width: {width} <br />
            height  :  {height}<br />
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}
