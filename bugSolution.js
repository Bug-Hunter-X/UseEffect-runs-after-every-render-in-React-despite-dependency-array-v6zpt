```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Conditional check to only log after the initial render
    if(count > 0){
        console.log('Count:', count);
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```