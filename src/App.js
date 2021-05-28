import "./App.css";
import Profile from "./under/profile";
import myWonderfulImage from "./imageInSrc.jpg";
const data = {
  fullName: "Adel Abidi",
  bio: "dddgdssd",
  // profession: "Etudiant",
};
const handleName = (e) => {
  e.preventDefault();
  alert(`Hello ${data.fullName} `);
  console.log("The link was clicked.");
};
function App() {
  return (
    <div className="App">
      <Profile
        fullName={data.fullName}
        bio={data.bio}
        profession={data.profession}
        handleName={handleName}
      >
        <img src={myWonderfulImage} alt="errorSrc" />
      </Profile>
    </div>
  );
}

export default App;
