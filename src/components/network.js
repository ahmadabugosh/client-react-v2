import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import { RingLoader } from 'react-spinners';
import {Icon, Button,Image, List} from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ROOT_URL = 'https://i7san-api.herokuapp.com';



class Network extends Component {

    componentDidMount() {

    this.props.storeUsers();
   
  }

    renderUsers() {

          if(Object.keys(this.props.followingusers).length >= 0)

      {
       return( <h4> You are not following anyone yet...</h4>);
      }

      else
      {




  const userData=this.props.followingusers.map((user,index) =>
  {


  return(
<div className="row" > 
 <div className="col-xs-6 col-md-6">   
 
  <List divided horizontal size="massive">
            <List.Item>
              <Image avatar src='https://react.semantic-ui.com/assets/images/avatar/small/helen.jpg' />
              <List.Content>
                <List.Header>{user.username}</List.Header>
              </List.Content>
            </List.Item>
            </List> 
</div>


 <div className="col-xs-6 col-md-2"> 
<Button animated color='green' size='small' className="followButton" onClick={(event)=>alert(user.username)}>
      <Button.Content visible>Followed</Button.Content>
      <Button.Content hidden>
        Unfollow
      </Button.Content>
    
    </Button>
    </div>
    <br/>
    <br/>


</div>


    );


}   );

  return userData;
}
   }


  render() {
    if (!this.props.followingusers ) {
      return <RingLoader color={'#123abc'} />;
    }
    
    else
    {
       const followingusers = this.props.followingusers;

    console.log("The users are:",followingusers);
    }



    // TEMP ***************
    const tempDivStyle = {
      display: 'inline-block',
      verticalAlign: 'top',
      marginLeft: '10px',
      marginRight: '10px',
      marginBottom: '50px'
    };

    const rowStyle =
    {
        width:'700px',
        margin: '0 auto'
        
    };

    var h3Style = {
  color: 'red'
};

    const loremIpsumImageUrl = 'http://lorempixel.com/80/80';
    //**********************

    return (


      // TODO: remove inline styles
      <div className="container-fluid">

    <div className="row">
    <img src= "https://s3.amazonaws.com/i7san-test/svg/impact.svg" alt="Volunteering" id="connectImage"  />
        <h1>
          Connect with members of the community to grow your network!
        </h1>
        <h3> 
        The more people that follow you, the more points you get!
        </h3>
        </div>
  <br />
  <h2>Who You're Following </h2>
 <div className="row">
 <Button.Group floated='left'>
      <Button positive>Following</Button>
      <Link to="/followers" ><Button>Followers</Button></Link>
      <Link to="/follow" > <Button>Connect With Others</Button></Link>
    </Button.Group>
    </div>
 
    <br/>
      <div className="row" style={rowStyle}>

  
    
{this.renderUsers()}


        
        </div>

      
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { followingusers: state.followingusers };
};

export default connect(mapStateToProps, actions)(Network);


