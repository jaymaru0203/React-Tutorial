import './App.css';
import Button from './Button';

const App = () => {
  return (
    <div className="body">
        <h1>Hello User!</h1>
        <h2>Welcome to React Learning!</h2>
        <hr/>
        <p style={{textAlign: "center", color: "blue"}}>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem</p>
        <h3>What Would You Like To Learn Today?</h3>
        <br/>
        <div className="buttons">
          <Button ButtonName="React" ButtonLink="https://reactjs.org/docs/getting-started.html" />
          <Button ButtonName="Node" ButtonLink="https://nodejs.org/en/docs/" />
        </div>
    </div>
  );
}

export default App;
