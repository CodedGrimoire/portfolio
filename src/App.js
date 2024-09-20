
import './App.css';
import background from './background.jpg'; // Import the background image
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from './Sidebar/index.js'; // Import the Sidebar component

function App() {
  return (
    <div className="App">
      <Sidebar /> {/* Add the Sidebar component */}
      <div className="content">
        <header className="App-header" style={{ backgroundImage: `url(${background})` }}>
          <h1>Hello!</h1>
          <p>
            I’m Tazkia Malik, a Computer Science and Engineering student specializing in software development and engineering. I excel in crafting innovative solutions and building scalable applications, supported by a strong foundation in coding and problem-solving. My expertise extends to web development and AI model training, driven by a commitment to excellence and continuous learning. Browse my portfolio to see how I transform concepts into impactful software.
          </p>
        </header>
      </div>
    </div>
  );
}

export default App;
