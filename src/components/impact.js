import React from 'react';

// TODO: Complete Impact component
const Impact = props => {
  console.log(props);
  const { name, volunteering, friends, workImpact } = props.user;

  // TEMP ***************
  const tempDivStyle = {
    display: 'inline-block',
    verticalAlign: 'top',
    marginLeft: '10px',
    marginRight: '10px',
    marginBottom: '50px'
  };

  const loremIpsumImageUrl = 'http://lorempixel.com/80/80';
  //**********************

  return (
    // TODO: remove inline styles
    <div style={{ textAlign: 'left', minWidth: 800 }}>
      <h4>
        {name}'s Impact
      </h4>
      <div>
        <img src={loremIpsumImageUrl} />
        <div style={tempDivStyle}>
          <h4>
            {volunteering.hours} Volunteering Hours
          </h4>
          <h4>
            You rank {volunteering.rank} in Saudi Arabia
          </h4>
        </div>
        <div style={tempDivStyle}>
          {/* Render Dynamically */}
          That's enough time to watch 900 movies!
        </div>
      </div>
      <div>
        <img src={loremIpsumImageUrl} />
        <div style={tempDivStyle}>
          <h4>
            {friends.amount} Friends
          </h4>
          <h5>
            You rank {friends.rank} among your friends
          </h5>
        </div>
        <div style={tempDivStyle}>
          {/* Render Dynamically */}
          That's enough people to make 10 football teams!
        </div>
      </div>
      <div>
        <img src={loremIpsumImageUrl} />
        <div style={tempDivStyle}>
          <h4>
            Your work impact is {workImpact.amount} {workImpact.currency}
          </h4>
          <h5>
            You rank ${volunteering.rank} in Saudi Arabia
          </h5>
        </div>
        <div style={tempDivStyle}>
          {/* Render Dynamically */}
          That's enough to buy a Mercedes!
        </div>
      </div>
    </div>
  );
};

export default Impact;
