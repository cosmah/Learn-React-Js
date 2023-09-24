import Message from './message';
import ListGroup from './components/ListGroup';
import HandlingEvents from './components/HandlingEvents';
import ManagingState from './components/ManagingState';

function App(){
  return (
    <div>
      <Message></Message>
      <ListGroup></ListGroup>
      <HandlingEvents></HandlingEvents>
      <ManagingState></ManagingState>
    </div>
  );
}

export default App;
