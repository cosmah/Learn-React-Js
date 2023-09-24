import { MouseEvent } from "react";


function HandlingEvents() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    //event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>LIST</h1>

      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {/* //map list-tems to values */}
        {items.map((item) => (
          //in react each element has onClick property, lets implement it here
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default HandlingEvents;
