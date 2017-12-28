import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import { RingLoader } from 'react-spinners';
import {Icon, Button,Image, List} from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ROOT_URL = 'https://i7san-api.herokuapp.com';



class Follow extends Component {

constructor(props) {
    super(props);

    this.state = {
     active: []
    };

    this.changeColor = this.changeColor.bind(this);
    this.myColor = this.myColor.bind(this);
    this.myText=this.myText.bind(this);
    this.myFollowText=this.myFollowText.bind(this);
    this.follow=this.follow.bind(this);
  }

  
  changeColor(position) {
    if(this.state.active[position]===position)
    {
      let array1=this.state.active.slice();
      array1[position]=null;
  this.setState({ active: array1});
    }
    else
    {
      let array2=this.state.active.slice();
      array2[position]=position;
      this.setState({ active: array2});
    }
    
   
  }

  myColor(position){
   if (this.state.active[position] === position) {
      return "green";
    }
    else 
    {
      return "blue";
    }   

  }

   myText(position){
   if (this.state.active[position] === position) {
      return "Following";
    }
    else 
    {
      return "Follow";
    }   

  }


  myFollowText(position){
   if (this.state.active[position] === position) {
      return "UnFollow";
    }
    else 
    {
      return <Icon name='checkmark box' />;
    }   

  }

  follow(username,position)

  {
       this.changeColor(position);


if (this.state.active[position] === position) {
      this.props.unfollowUser(username); 

}

else
{
this.props.followUser(username);
}
    
 


  }





    componentDidMount() {

    this.props.storeFollow();

   
  }

    renderUsers() {

       if(Object.keys(this.props.followusers).length === 0)

      {
       return( <h4> There is no one left to follow...</h4>);
      }
      else
      {
  const userData=this.props.followusers.map((user,index) =>
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
<Button animated color={this.myColor(index)} size='small' className="followButton" onClick={(event)=>this.follow(this.props.followusers[index].username,index)}>
      <Button.Content visible>{this.myText(index)}</Button.Content>
      <Button.Content hidden>
        {this.myFollowText(index)}
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
    if (!this.props.followusers) {
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

<h2> Follow Your Friends To Increase Your Network! </h2>

<div className="row">
 <Button.Group floated='left'>
  <Link to="/network"> <Button>Following</Button></Link>
     <Link to="/followers"> <Button>Followers</Button></Link>
      <Button positive>Connect With Others</Button>
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
  return { followusers: state.followusers };
};

export default connect(mapStateToProps, actions)(Follow);


