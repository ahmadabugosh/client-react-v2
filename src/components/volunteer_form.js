import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions';
import axios from 'axios';
const ROOT_URL = 'https://i7san-api.herokuapp.com';

// TEMP
// Will be populated from the server, set by admins
// exaxt data structure to be determined
// const activities = [
//   {
//     displayName: "Donate Blood",
//     value: 'donate_blood',
//     points: 20
//   },
//   {
//     displayName: "Beach Clean up",
//     value: 'beach_cleanup',
//     points: 5
//   },
//   {
//     displayName: 'Elderly Home',
//     value: 'elderly_home',
//     points: 25
//   },
//   {
//     displayName: 'Charity Drive',
//     value: 'charity_drive',
//     points: 10
//   }
// ]

// validation function, tests each field on change
const validate = values => {
  const errors = {};
  if (!values.activity) {
    errors.activity = 'Please select an activity';
  }
  if (!values.hours) {
    errors.hours = 'Please the number of hours you volunteered';
  }
  if (values.hours <= 0) {
    errors.hours = 'You must enter an amount of hours greater than 0';
  }
  if (!values.description) {
    errors.description = 'Please enter a short description of your volunteering activity';
  }

  return errors;
};

// renders each text field
const renderField = ({ input, label, type, placeholder, textarea, meta: { touched, error, warning } }) =>
  <div>
    {textarea ? <textarea {...input} placeholder={placeholder} /> : <input {...input} type={type} />}
    {touched &&
      (error &&
        <span className="error">
          {' '}{error}
        </span>)}
  </div>;

// renders select element
const renderSelectField = ({ input, type, meta: { touched, error }, children }) =>
  <div>
    <select {...input}>
      {children}
    </select>
    {touched &&
      error &&
      <span className="error">
        {' '}{error}
      </span>}
  </div>;

// File Input from https://github.com/erikras/redux-form/issues/1989
const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({ input: { value: omitValue, onChange, onBlur, ...inputProps }, meta: omitMeta, ...props }) =>
  <input
    onChange={adaptFileEventToValue(onChange)}
    onBlur={adaptFileEventToValue(onBlur)}
    type="file"
    {...inputProps}
    {...props}
  />;

// Form component
class VolunteerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: []
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  // get initial activities from server and update component's state
  componentDidMount() {
    axios.get(`${ROOT_URL}/activities`).then(response => {
      this.setState({ activities: response.data });
    });
  }

  handleFormSubmit(fields) {
    this.props.recordVolunteerActivity({ ...fields }, this.props.history);
  }

  renderOptions() {
    const optionsList = this.state.activities.map(activity =>
      <option key={activity.shortUrl} value={activity.shortUrl}>
        {activity.name} - {activity.points} Points / Hour
      </option>
    );

    // add blank first option, acts as placeholder text for select field component
    optionsList.unshift(
      <option key="title" value="" selected>
        Choose A Volunteer Activity
      </option>
    );
    return optionsList;
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h1> Record Your Volunteering Activities!</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          {/* form body */}
          <div>
            <Field placeholder="Volunteer Activity" name="activity" component={renderSelectField} required>
              {this.renderOptions()}
            </Field>
          </div>
          <div>
            <br />
            How many hours did you volunteer today?
            <Field placeholder="Number of Hours" name="hours" type="number" component={renderField} />
          </div>
          <div>
            <br />
            Tell us about your experience!
            <Field placeholder="Short Description" name="description" textarea={true} component={renderField} />
          </div>
          <br />
          {/* File upload field: sends file object to action creator */}
          {/* TODO: add validation for attached file */}
          <Field component={FileInput} name="mediaUrl" />

          <button type="submit">Record Your Volunteering</button>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(
  reduxForm({
    form: 'volunteer',
    validate,
    enableReinitialize: true
  })(VolunteerForm)
);
