import React from 'react';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';


export default class UserSettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 2,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (

      <div>

        <List>
          <ListItem
            disabled={true}
            leftAvatar={
              <Avatar src="images/jsa-128.jpg"/>
            }
          >
            Timothy
          </ListItem>
        </List>

        <Divider />

        <SelectField
          floatingLabelText="Account"
          value={2}
          autoWidth={true}
        >
          <MenuItem value={1} primaryText="Tim and Brandys Account"/>
          <MenuItem value={2} primaryText="Brandys Investment Account"/>
          <MenuItem value={3} primaryText="Test Account"/>

        </SelectField>

        <TextField
          hintText="First Name"
          value="Timothy"
        /><br />
        <TextField
          hintText="Last Name"
          value="Strzelecki"
        /><br />

        <TextField
          hintText="Email"
          value="timstrze@gmail.com"
        /><br />
        <TextField
          hintText="Address 1"
          value="505 N Lakeshore Dr"
        /><br />
        <TextField
          hintText="Address 2"
          value="#1009"
        /><br />
        <TextField
          hintText="City"
          value="Chicago"
        /><br />
        <TextField
          hintText="State"
          value="IL"
        /><br />
        <TextField
          hintText="Zip"
          value="60611"
        />
        <br />
        <Toggle
          label="Toggled by default"
          defaultToggled={true}
        />
        <br />

        <SelectField
          floatingLabelText="Frequency"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Never"/>
          <MenuItem value={2} primaryText="Every Night"/>
          <MenuItem value={3} primaryText="Weeknights"/>
          <MenuItem value={4} primaryText="Weekends"/>
          <MenuItem value={5} primaryText="Weekly"/>
        </SelectField>

      </div>
    );
  }
}
