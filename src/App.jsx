import "./App.css";
import avatarJessica from "../public/avatar-jessica.jpeg"

function App() {
  return (
    <>
      <div className="container">
        <div className="cuadro">
          <div className="img">
            <img src={avatarJessica} alt="" />
          </div>
          <h1>Jessica Randall</h1>
          <h2>London, United Kingdom</h2>
          <h3>"Front-end developer and avid reader"</h3>
          <button>GitHub</button>
          <button>Frontend Mentor</button>
          <button>LinkedIn </button>
          <button>Twitter</button>
          <button>Instagram</button>
        </div>
      </div>
    </>
  );
}

export default App;
