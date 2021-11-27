import './App.css';
import { SplitScreen } from './SplitScreen';

const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: 'green' }}>Left!</h1>;
}

const RightHandComponent = () => {
  return <h1 style={{ backgroundColor: 'red' }}>Right!</h1>;
}
function App() {
  return (
  <div>
    <SplitScreen
     left={LeftHandComponent}
     right={RightHandComponent}
     leftWeight={1}
     rightWeight={3}
    />
    </div>
  );
}

export default App;
