function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No item found</p>
  //     </>
  //   );

// render <p>No item found</p> through a fucntion to avoid redundancy
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  }

  return (
    <>
      <h1>LIST</h1>
      {getMessage()}
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      <ul className="list-group">
        {/* //converting to li element using map() */}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
