import React from "react";
// import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          Logged User
          <UserContext.Consumer>
            {({ loggedUser }) => (
              <h1 className="text-2xl font-bold">{loggedUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React</h2>
        <UserClass name={"Narayan (class)"} location={"Madhubani"} />
        {/* <UserClass name={"Mod Narayan (class)"} location={"Madhubani"} />
        <UserClass name={"Monu (class)"} location={"Patna"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React</h2>
//       {/* <User name={"Narayan (function)"} /> */}
//       <UserClass name={"Narayan (class)"} location={"Madhubani"} />
//     </div>
//   );
// };

export default About;
