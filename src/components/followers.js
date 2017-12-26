import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import { RingLoader } from 'react-spinners';
import {Icon, Button,Image, List} from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ROOT_URL = 'https://i7san-api.herokuapp.com';



class Followers extends Component {

    componentDidMount() {

    this.props.storeFollowers();
   
  }

    renderUsers() {

   if(Object.keys(this.props.followerusers).length === 0)

      {
       return( <h4> No one is following you yet...</h4>);
      }

      else
      {

  const userData=this.props.followerusers.map((user,index) =>
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


    <br/>
    <br/>


</div>

  );

}   );

  return userData;
}
   }


  render() {
    if (!this.props.followerusers) {
      return <RingLoader color={'#123abc'} />;
    }
    
    else
    {
       const followusers = this.props.followusers;

    console.log("The users are:",followusers);
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
        The more people follow you, the more points you get!
        </h3>
        </div>
  <br />

<h2> See Who's Following You </h2>

<div className="row">
 <Button.Group floated='left'>
     <Link to="/network" ><Button>Following</Button></Link>
      <Button positive>Followers</Button>
     <Link to="/follow" > <Button>Connect With Others</Button></Link>
    </Button.Group>
    </div>
      <div className="row" style={rowStyle}>
    
{this.renderUsers()}


        
        </div>

      
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { followerusers: state.followerusers };
};

export default connect(mapStateToProps, actions)(Followers);


