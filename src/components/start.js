import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import { Header, Icon, Button, Step,List, Image } from 'semantic-ui-react';
import SimpleSlider from './ui/slider.js';
import axios from 'axios';
import { withRouter } from 'react-router'
import { RingLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
const ROOT_URL = 'https://i7san-api.herokuapp.com';

class Start extends Component {

      componentDidMount() {

    this.props.storeCategories();
   
  }



renderCategories(){

     if(Object.keys(this.props.categories).length === 0)

      {
       return <RingLoader color={'#123abc'} />;
      }


      else{

 const catData=this.props.categories.map((cat,index) =>
  {


  return(

 <div>   
<Link to="/volunteer">
               <Image size='tiny' src={cat.mediaUrl} />
                    
<Button color='blue' size='large' className='buttonCenter' onClick={(event)=>this.props.currentCategory(cat.name,this.props.history)} >
 
      <Button.Content visible>
        {cat.name}
      </Button.Content>
    </Button>
    </Link>
 
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
        First Step, Choose The Area You'd Like To Contribute To
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
  return { categories: state.categories, category:state.category };
};

export default connect(mapStateToProps, actions)(Start);