import './index.css';
import background from './background2.gif'; // Import the background image
 // Adjust the path as needed
 // Import the Sidebar component

function Homepage() {
  return (
    <div className="Homepage">
      
      <div className="content">
        <header className="App-header" style={{ backgroundImage: `url(${background})` }}>
          <h1>Hello!</h1>
          <p>
            I’m Tazkia Malik, a Computer Science and Engineering student specializing in software development and engineering. 
            I excel in crafting innovative solutions and building scalable applications, supported by a strong foundation in coding 
            and problem-solving. My expertise extends to web development and AI model training, driven by a commitment to excellence 
            and continuous learning. Browse my portfolio to see how I transform concepts into impactful software.
          </p>
        </header>
      </div>
      
    </div>
  );
}

export default Homepage;
