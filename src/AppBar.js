import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';

import FlatButton from 'material-ui/FlatButton';

import Drawer from 'material-ui/Drawer';

import UserSettingsForm from './UserSettingsForm';

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import AVEqualizer from 'material-ui/svg-icons/av/equalizer';


/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarExampleComposition extends Component {
     state = {
        logged: true,
        open: false
    };

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <AppBar
                    title="React WatchList"
                    iconElementRight={<FlatButton label="Timothy" onTouchTap={this.handleToggle} />}
                    iconElementLeft={}
                />
                <Drawer width={250} openSecondary={true}
                        open={this.state.open} >
                    <AppBar iconElementLeft={<IconButton><NavigationClose onTouchTap={this.handleToggle} /></IconButton>}
                            title="Settings" />
                    <UserSettingsForm />

                </Drawer>
            </div>
        );
    }
}

export default AppBarExampleComposition;
