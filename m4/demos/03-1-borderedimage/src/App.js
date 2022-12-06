import './App.css';
import BorderedImageFrame from './BorderedImageFrame';
import BorderedImageFrame2 from './BorderedImageFrame2';

function App() {
  return (
    <div>
      <BorderedImageFrame imageURL={require("./pau.jpg")} alt="Pau flying off" />
      <BorderedImageFrame2 imageURL="wallpaper.png" alt="Pink wallpaper" />
    </div>
  );
}

export default App;

// pau is in src folder
// wallpaper is in public folder
