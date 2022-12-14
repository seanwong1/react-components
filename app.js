const { useState } = React;

const App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Banana', 'Apple']} />
  </div>
);

const GroceryList = (props) => (
  <ul>
    {props.items.map((item) => (
      <GroceryListItem item={item} />
    ))}
  </ul>
);

const GroceryListItem = (props) => {
  const [isOver, setIsOver] = useState(false);
  const style = {
    fontWeight: isOver ? 'bold' : 'normal'
  };

  return (
    <li style={style} onMouseEnter={() => setIsOver(!isOver)} onMouseLeave={() => setIsOver(!isOver)}>
      {props.item}</li>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));