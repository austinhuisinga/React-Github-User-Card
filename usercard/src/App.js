import React from 'react';
import axios from 'axios';
import './App.css';

import UserList from './components/UserList';
import UserCard from './components/UserCard';

// const one = `https://api.github.com/users/austinhuisinga`;
// const two = `https://api.github.com/users/austinhuisinga/followers`;
// const requestOne = axios.get(one);
// const requestTwo = axios.get(two);

class App extends React.Component {
  state = {
    userData: [],
    login: 'austinhuisinga',
    followersData: []
  };

  componentDidMount() {
    // axios.all([requestTwo, requestOne]).then(axios.spread((...responses) => {
    //   const responseOne = responses[0]
    //   const responseTwo = responses[1]
    //   console.log(responseTwo.data)
    //   this.setState({
    //     name: responseOne.data.name,
    //     login: responseOne.data.login,
    //     location: responseOne.data.location,

    //     followers: responseTwo.data,
    //     followersLogin: responseTwo.data.login
    //   })
    // }))
    this.fetchUser(this.state.login)
    this.fetchFollowers(this.state.login)
  }
  fetchUser = user => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then(res => {
        this.setState({
          userData: res.data
        });
      })
      .catch(err => console.log(err));
  };

  fetchFollowers = user => {
    axios
      .get(`https://api.github.com/users/${user}/followers`)
      .then(res => {
        console.log(res.data)
        let followersResData = res.data;
        followersResData.forEach(el => {
          axios
            .get(`https://api.github.com/users/${el.login}`)
            .then(res => {
              let followers = res.data;
              this.setState({
                followersData: [...this.state.followersData, followers]
              });
              console.log(this.state.followersData);
            })
            .catch(err => console.log(err));
        })
      })
  };
  

  // componentDidUpdate() {
  //   axios.get(`https://api.github.com/users/austinhuisinga/followers`)
  //     .then(res => {
  //       this.setState({
  //         followers: res.data.followers,
  //         followersLogin: res.data.login  
  //       })
  //     })
  //     .catch(err => console.log(err));
  // }

  render(){
    return (
      <div className="App">
        <UserList 
          userData={this.state.userData}
          followersData={this.state.followersData}
        />
      </div>
    );
  }
}

export default App;
