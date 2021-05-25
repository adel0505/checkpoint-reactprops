import "./App.css";
import Profile from "./under/profile";
import myWonderfulImage from "./imageInSrc.jpg";
const data = {
  fullName: 1,
  bio: "dddgdssd",
  // profession: "Etudiant",
};
function App() {
  return (
    <div className="App">
      <Profile
        fullName={data.fullName}
        bio={data.bio}
        profession={data.profession}
      >
        <img src={myWonderfulImage} alt="errorSrc" />
      </Profile>
    </div>
  );
}

export default App;
