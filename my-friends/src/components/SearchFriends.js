import React , {Component} from 'react';


class SearchFriends extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: ""
    }
  }

  updateSearch = (event) => {
    this.setState({search: event.target.value });
  }

  render() {

    let filteredFriends = this.props.friendList.filter((friend) => {
      let fullName = `${friend.first} ${friend.last}`
      return fullName.toLowerCase().search(this.state.search.toLowerCase()) !== -1
    })

    return (
      <div>
        <input type='text' name='name' placeholder='Search...' onChange={this.updateSearch}/>
        <ul>{ filteredFriends.map( eachFriend => <li>{eachFriend.first} {eachFriend.last}</li>) }</ul>
      </div>
    )
  }

}

export default SearchFriends;