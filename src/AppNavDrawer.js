import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import {List, ListItem, makeSelectable} from 'material-ui/List';
// import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

import AutoCompleteWatchList from './AutoCompleteWatchList';

import {spacing, typography, zIndex} from 'material-ui/styles';

import {green400, red400, cyan500 } from 'material-ui/styles/colors';



let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);


const styles = {
  logo: {
    cursor: 'pointer',
    fontSize: 24,
    color: typography.textFullWhite,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    backgroundColor: cyan500,
    paddingLeft: spacing.desktopGutter,
    marginBottom: 8,
  },
  version: {
    paddingLeft: spacing.desktopGutterLess,
    fontSize: 16,
  },
};

class AppNavDrawer extends Component {
  static propTypes = {
    docked: PropTypes.bool.isRequired,
    // location: PropTypes.object.isRequired,
    // onChangeList: PropTypes.func.isRequired,
    // onRequestChangeNavDrawer: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    style: PropTypes.object,
  };

  static contextTypes = {
    // muiTheme: PropTypes.object.isRequired,
    // router: PropTypes.object.isRequired,
  };

  state = {
    muiVersions: [],
  };

  firstNonPreReleaseVersion() {
    // let version;
    // for (let i = 0; i < this.state.muiVersions.length; i++) {
    //     version = this.state.muiVersions[i];
    //     // If the version doesn't contain '-' and isn't 'HEAD'
    //     if (!/-/.test(version) && version !== 'HEAD') {
    //         break;
    //     }
    // }
    // return version;
  }

  handleVersionChange = (event, index, value) => {
    if (value === this.firstNonPreReleaseVersion()) {
      window.location = 'http://www.material-ui.com/';
    } else {
      window.location = `http://www.material-ui.com/${value}`;
    }
  };

  currentVersion() {
    if (window.location.hostname === 'localhost') return this.state.muiVersions[0];
    // if (window.location.pathname === '/') {
    //     return this.firstNonPreReleaseVersion();
    // } else {
    //     return window.location.pathname.replace(/\//g, '');
    // }
  }

  handleRequestChangeLink = (event, value) => {
    window.location = value;
  };

  handleTouchTapHeader = () => {
    // this.context.router.push('/');
    // this.props.onRequestChangeNavDrawer(false);
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const {
      // location,
      docked,
      onRequestChangeNavDrawer,
      onChangeList,
      open,
      style,
    } = this.props;

    return (
      <Drawer
        style={style}
        docked={docked}
        open={open}
        onRequestChange={onRequestChangeNavDrawer}
        containerStyle={{zIndex: zIndex.drawer - 100}}
      >
        <div style={styles.logo} onTouchTap={this.handleTouchTapHeader}>
          StockTracker
        </div>

        <AutoCompleteWatchList />


        <SelectField
          floatingLabelText="Watchlist"
          value={2}
          onChange={this.handleChange}
          autoWidth={true}
        >
          <MenuItem value={1} primaryText="Big List (12)"/>
          <MenuItem value={2} primaryText="Small List (25)"/>
          <MenuItem value={3} primaryText="Huge List (78)"/>

        </SelectField>


        <SelectableList
          value={'selectable-watch-list'}
          onChange={onChangeList}
          defaultValue={'/symbol/rcl'}
        >

          <ListItem
            primaryText="Symbols"
            value={'symbol-list'}
            primaryTogglesNestedList={true}
            nestedItems={[

              <ListItem
                primaryText="AAPL"
                secondaryTextLines={2}
                secondaryText={
                  <p>
                    <span style={{color: green400}}>97.52 +1.32 (+1.34%)</span> <br />
                    Days Range: 97.10 - 99.12
                  </p>
                }
                value="/symbol/aapl"
                href="#/symbol/aapl"
              />,
              <ListItem
                primaryText="AMZN"
                secondaryTextLines={2}
                secondaryText={
                  <p>
                    <span style={{color: green400}}>720.98 +2.77 (+0.39%)</span> <br />
                    Days Range: 711.16 - 721.99
                  </p>
                }
                value="/symbol/amzn"
                href="#/symbol/amzn"
              />,
              <ListItem
                primaryText="C"
                secondaryTextLines={2}
                secondaryText={
                  <p>
                    <span style={{color: red400}}>97.52 +1.32 (+1.34%)</span> <br />
                    Days Range: 711.16 - 721.99
                  </p>
                }
                value="/symbol/c"
                href="#/symbol/c"
              />,
              <ListItem
                primaryText="BA"
                secondaryTextLines={2}
                secondaryText={
                  <p>
                    <span style={{color: red400}}>97.52 +1.32 (+1.34%)</span> <br />
                    Days Range: 711.16 - 721.99
                  </p>
                }
                value="/symbol/ba"
                href="#/symbol/ba"
              />,
              <ListItem
                primaryText="RCL"
                secondaryTextLines={2}
                secondaryText={
                  <p>
                    <span style={{color: green400}}>97.52 +1.32 (+1.34%)</span> <br />
                    Days Range: 711.16 - 721.99
                  </p>
                }
                value="/symbol/rcl"
                href="#/symbol/rcl"
              />,
              <ListItem
                primaryText="TSLA"
                secondaryTextLines={2}
                secondaryText={
                  <p>
                    <span style={{color: green400}}>97.52 +1.32 (+1.34%)</span> <br />
                    Days Range: 711.16 - 721.99
                  </p>
                }
                value="/symbol/tsla"
                href="#/symbol/tsla"
              />,
              <ListItem
                primaryText="MAR"
                secondaryTextLines={2}
                secondaryText={
                  <p>
                    <span style={{color: red400}}>97.52 +1.32 (+1.34%)</span> <br />
                    Days Range: 711.16 - 721.99
                  </p>
                }
                value="/symbol/mar"
                href="#/symbol/mar"
              />
            ]}
          />
        </SelectableList>


        <SelectableList
          value={'selectable-position-list'}
          onChange={onChangeList}
          defaultValue={0}
        >
          <ListItem
            primaryText="Positions"
            primaryTogglesNestedList={true}
            value={'positions-list'}
            nestedItems={[
              <ListItem primaryText="TSLA"
                        secondaryTextLines={2}
                        secondaryText={
                          <p>
                            <span style={{color: green400}}>97.52 +1.32 (+1.34%)</span> <br />
                            Days Range: 711.16 - 721.99
                          </p>
                        }
                        href="#/position/tsla"
                        value="/position/tsla"
                        primaryTogglesNestedList={true}
                        nestedItems={[
                          <ListItem
                            primaryText="Bought 250 Shares"
                            value="/position/tsla/buy/123"
                            href="#/position/tsla/buy/123"
                          />,
                          <ListItem
                            primaryText="Bought 25 Shares"
                            value="/position/tsla/buy/124"
                            href="#/position/tsla/buy/124"
                          />,
                        ]} />,

              <ListItem primaryText="AMZN"
                        secondaryTextLines={2}
                        secondaryText={
                          <p>
                            <span style={{color: green400}}>720.98 +2.77 (+0.39%)</span> <br />
                            Days Range: 711.16 - 721.99
                          </p>
                        }
                        href="#/position/amzn"
                        value="/position/amzn"
                        nestedItems={[
                          <ListItem
                            primaryText="Bought 250 Shares"
                            value="/position/amzn/buy/1234"
                            href="#/position/amzn/buy/123"
                          />,
                          <ListItem
                            primaryText="Bought 25 Shares"
                            value="/position/amzn/buy/124"
                            href="#/position/amzn/buy/124"
                          />,
                        ]} />,

              <ListItem primaryText="AAPL"
                        secondaryTextLines={2}
                        secondaryText={
                          <p>
                            <span style={{color: green400}}>97.52 +1.32 (+1.34%)</span> <br />
                            Days Range: 97.10 - 99.12
                          </p>
                        }
                        href="#/position/aapl"
                        value="/position/aapl"
                        nestedItems={[
                          <ListItem
                            primaryText="Bought 250 Shares"
                            value="/position/aapl/buy/1232"
                            href="#/position/aapl/buy/123"
                          />,
                          <ListItem
                            primaryText="Bought 25 Shares"
                            value="/position/aapl/buy/124"
                            href="#/position/aapl/buy/124"
                          />,
                        ]} />,
            ]}
          />
        </SelectableList>
        <Divider />
        <SelectableList
          value=""
          defaultValue={0}
          onChange={this.handleRequestChangeLink}
        >
          <Subheader>Resources</Subheader>
          <ListItem primaryText="Tutorial" value="/tutorial" href="#/tutorial"/>
          <ListItem primaryText="Community" value="/community" href="#/community"/>
          <ListItem
            primaryText="Contact"
            value="/contact" href="#/contact"
          />
        </SelectableList>
      </Drawer>
    );
  }
}

export default AppNavDrawer;
