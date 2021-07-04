import React, {Component} from 'react';


class ListUsers extends Component {

  render()
  { 
    return (
      <ol>
          {this.props.profiles.map((profile)=>(
          <li>
      			<span>user: {this.props.users[profile.userID].name} </span> ||  
				<span>Favoriete Movie:{this.props.movies[profile.favoriteMovieID].name} </span>
          </li>
        ))}

      </ol>
    );
  }
  
  
  

}
export default ListUsers;