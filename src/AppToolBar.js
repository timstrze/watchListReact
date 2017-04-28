import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';

import Chip from 'material-ui/Chip';
import {green300} from 'material-ui/styles/colors';


export default class AppToolBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 2,
    };
  }

  render() {

    const styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };

    function handleTouchTap() {
      alert('You clicked the Chip.');
    }

    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <Chip
            backgroundColor={green300}
            onTouchTap={handleTouchTap}
            style={styles.chip}
          >
            AAPL 97.52 -1.32 (-1.34%)
          </Chip>
        </ToolbarGroup>
        <ToolbarGroup>
          Apple Inc.
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
          <FlatButton label="Buy" primary={true} />
          <FlatButton label="Sell" primary={true} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
