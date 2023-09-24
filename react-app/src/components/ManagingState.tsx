import { MouseEvent } from "react";


function ManagingState(){
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    let selectedIndex = -1;


    //event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>managing state</h1>

      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {/* //map list-tems to values */}
        {items.map((item, index) => (
          //in react each element has onClick property, lets implement it here
          //append active class to highlight  
          <li
            // className="list-group-item active"
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
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

export default ManagingState