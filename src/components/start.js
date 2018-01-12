import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import { Header, Icon, Button, Step,List } from 'semantic-ui-react';
import SimpleSlider from './ui/slider.js';
import axios from 'axios';
import { RingLoader } from 'react-spinners';
const ROOT_URL = 'https://i7san-api.herokuapp.com';

export class Start extends Component {



      componentDidMount() {

    this.props.storeCategories();
   
  }

renderCategories(){

     if(Object.keys(this.props.categories).length === 0)

      {
       return( <h4> Loading...</h4>);
        console.log(this.props.categories);
      }


      else{

 const catData=this.props.categories.map((cat,index) =>
  {


  return(

 <div className="col-xs-3 col-md-3">   
 
<Button color='blue' size='large' >
      <Button.Content visible>
        {cat}
      </Button.Content>
    </Button>
</div>

  );

}  ); 

  return catData;
}
}




  render() {
if (!this.props.categories) {
      return <RingLoader color={'#123abc'} />;
    }

    else{

    return (

  <div>



<h2 className="startHeader">
        MAKE AN IMPACT VOLUNTEERING IN YOUR COMMUNITY!
</h2>


 <div className="myGrid">
<div>

      <Header as='h2' icon>
    <Icon name='users' />
    The Largest Online Volunteering Community
    
  </Header>

  </div>
<div>
      <Header as='h2' icon>
    <Icon name='heartbeat' />
   Find Organization & Causes You Care About
   
  </Header>
</div>

<div>

      <Header as='h2' icon>
    <Icon name='line graph' />
   Track Your Volunteering & Social Impact
  </Header>
</div>
</div>


<div className="row" > 
   {this.renderCategories()}
   </div>
   
      </div>
 
    );
}

}

}
const mapStateToProps = state => {
  return { categories: state.categories };
};

export default connect(mapStateToProps, actions)(Start);