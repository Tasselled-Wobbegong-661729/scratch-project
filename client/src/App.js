
import Signup from './component/Signup';
function App() {
  return (
    <div className="App">
      <main>
        <h1>React App Scratch Project</h1>
        <br /><br />
        <button>Sign Up!</button>
        <Signup trigger={true} > 
          <h3>All Fields Are equired !</h3>
        </Signup> 
      </main>
    </div>
  );
}

export default App;
