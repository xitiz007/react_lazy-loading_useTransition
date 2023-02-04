import { useState, useTransition } from "react";

const Transition = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const list = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        list.push(e.target.value);
      }
      setList(list);
    });
  }
  return (
    <div>
      <input type="text" onChange={handleChange} value={input} />
      {isPending ? (
        <h2>Loading....</h2>
      ) : (
        list.map((item, index) => <div key={index}>{item}</div>)
      )}
    </div>
  );
};

export default Transition;
