import React from 'react';

// TODO: Complete Impact component
const Impact = (props) => {
  const { 
    name,
    volunteering,
    friends,
    workImpact
  } = props.user

// TEMP ***************
  const tempDivStyle = {
    display: 'inline-block', 
    verticalAlign: 'top',
    marginLeft: '10px',
    marginRight: '10px',
  }

  const loremIpsumImageUrl = 'http://lorempixel.com/80/80';
//**********************

  return (
    // TODO: remove inline styles 
    <div style={{ textAlign: 'left' }}>
      <h4>Your Impact</h4>
     <div>
        <img src={loremIpsumImageUrl} />
        <div style={tempDivStyle}>
          <h3>{volunteering.hours} Volunteering Hours</h3>
          <h4>You rank ${volunteering.rank} in Saudi Arabia</h4>
        </div>
        <div>
          {/* Render Dynamically */}
          That's enough time to watch 900 movies!
        </div>
     </div>
     <div>
        <img src={loremIpsumImageUrl}/>
        <div style={tempDivStyle}>
          <h3>{friends.amount} Friends</h3>
          <h4>You rank ${friends.rank} among your friends</h4>
        </div>
        <div>
          {/* Render Dynamically */}
          That's enough people to make 10 football teams!
        </div>
     </div>
     <div>
        <img src={loremIpsumImageUrl} />
        <div style={tempDivStyle}>
          <h3>Your work impact is {workImpact.amount} {workImpact.currency}</h3>
          <h4>You rank ${volunteering.rank} in Saudi Arabia</h4>
        </div>
        <div>
          {/* Render Dynamically */}
          That's enough to buy a Mercedes!
        </div>
     </div>
   </div>

  );
}

export default Impact;