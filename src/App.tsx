import { useEffect } from "react";
import "./App.css";
import { useCounterStore } from "./store";

const setCount = () => {
  useCounterStore.setState({ count: 1 });
};

const App = () => {
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />;
};

const OtherComponent = ({ count }: { count: number }) => {
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    setCount();
  }, []);

  return (
    <div>
      <p>Zustand counter</p>
      <br />
      <div>
        <button onClick={incrementAsync}>Increment</button>
        <br />
        <button onClick={decrement}>Decrement</button>
        <br />
        {count}
      </div>
    </div>
  );
};

export default App;
