import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import { Header, Icon, Button, Step,List, Image } from 'semantic-ui-react';
import SimpleSlider from './ui/slider.js';
import axios from 'axios';
import { RingLoader } from 'react-spinners';
const ROOT_URL = 'https://i7san-api.herokuapp.com';

class Start extends Component {

      componentDidMount() {

    this.props.storeCategories();
   
  }

renderCategories(){

     if(Object.keys(this.props.categories).length === 0)

      {
       return( <h4> Loading...</h4>);
      }


      else{

 const catData=this.props.categories.map((cat,index) =>
  {


  return(

 <div>   
               <Image size='tiny' src={cat.mediaUrl} />
<Button color='blue' size='large' className='buttonCenter' onClick={(event)=>this.props.currentCategory(cat.name)} >
      <Button.Content visible>
        {cat.name}
      </Button.Content>
    </Button>
    <p>{cat.description}</p>
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
        First Step, Choose Your Volunteering Category
</h2>





<div className="myGrid" > 
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