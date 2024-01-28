import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log(this.props.name + "Child Constructor");

    this.state = {
      // count: 0,
      // count2: 2,
      // count3: 5,

      userInfo: {
        name: "Dummy",
        bio: "Default",
        avatar_url: "http://dummy.jpg",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child component did Mount");

    const data = await fetch("https://api.github.com/users/Monu-11");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    // console.log("Component Did Update");
  }

  componentWillUnmount() {
    // console.log("Component will Unmount");
  }

  render() {
    // console.log(this.props.name + "Child Render");
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;

    const { name, bio, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="logo" />
        <h2>Name: {name}</h2>
        <h3>Bio: {bio}</h3>
        <h4>Contact: @akshaymarch7</h4>

        {/* <h1>Count : {count}</h1>
        <button
          onClick={() => {
            // never update state variable directly
            // this.state.count = this.state.count + 1; not working
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Count Increase
        </button>
        <h1>Count2 : {count2}</h1>
        <h1>Count3 : {this.state.count3}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshaymarch7</h4> */}
      </div>
    );
  }
}

export default UserClass;
