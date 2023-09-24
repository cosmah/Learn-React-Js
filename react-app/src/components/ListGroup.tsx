function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  return (
    <>
      <h1>LIST</h1>

      {items.length === 0 && <p>No item found</p>}
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
