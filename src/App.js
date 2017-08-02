import React, {Component} from 'react';

import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import spacing from 'material-ui/styles/spacing';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {darkWhite, lightWhite, grey900} from 'material-ui/styles/colors';
import AppNavDrawer from './AppNavDrawer';
import FullWidthSection from './FullWidthSection';
import withWidth, {MEDIUM, LARGE} from 'material-ui/utils/withWidth';

import CardChart from './CardChart';
import AppToolBar from './AppToolBar';
import SwipeableTabs from './SwipeableTabs';
import UserSettingsForm from './UserSettingsForm';
import Drawer from 'material-ui/Drawer';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
    width: PropTypes.number.isRequired,
  };

  static contextTypes = {
    // router: PropTypes.object.isRequired,
  };

  static childContextTypes = {
    muiTheme: PropTypes.object,
  };

  state = {
    open: false,
    navDrawerOpen: false,
  };

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  }

  componentWillMount() {
    this.setState({
      muiTheme: getMuiTheme(),
    });
  }


  componentDidMount() {
    const self = this;
    const url = '/json/user.json';
    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        self.setState({
          // muiVersions: JSON.parse(request.responseText),
          // version: JSON.parse(request.responseText)[0],
        });
      }
    };

    request.open('GET', url, true);
    request.send();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({
      muiTheme: newMuiTheme,
    });
  }

  getStyles() {
    const styles = {
      appBar: {
        position: 'fixed',
        // Needed to overlap the examples
        zIndex: this.state.muiTheme.zIndex.appBar + 1,
        top: 0,
      },
      root: {
        paddingTop: spacing.desktopKeylineIncrement,
        minHeight: 400,
      },
      content: {
        margin: spacing.desktopGutter,
      },
      contentWhenMedium: {
        margin: `${spacing.desktopGutter * 2}px ${spacing.desktopGutter * 3}px`,
      },
      footer: {
        backgroundColor: grey900
      },
      a: {
        color: darkWhite,
      },
      p: {
        margin: '0 auto',
        padding: 0,
        color: lightWhite,
        maxWidth: 356,
      },
      iconButton: {
        color: darkWhite,
      },
    };

    if (this.props.width === MEDIUM || this.props.width === LARGE) {
      styles.content = Object.assign(styles.content, styles.contentWhenMedium);
    }

    return styles;
  }

  handleTouchTapLeftIconButton = () => {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen,
    });
  };

  handleChangeRequestNavDrawer = (open) => {
    this.setState({
      navDrawerOpen: open,
    });
  };

  handleChangeList = (event, value) => {
    // this.context.router.push(value);
    this.setState({
      navDrawerOpen: false,
    });
  };

  handleChangeMuiTheme = (muiTheme) => {
    this.setState({
      muiTheme: muiTheme,
    });
  };


  handleToggle = () => this.setState({open: !this.state.open});

  render() {

    const {
      location,
      // children,
    } = this.props;

    let {
      navDrawerOpen,
    } = this.state;

    const {
      prepareStyles,
    } = this.state.muiTheme;

    // const router = this.context.router;
    const styles = this.getStyles();
    const title = 'StockTracker';
    // router.isActive('/get-started') ? 'Get Started' :
    //     router.isActive('/customization') ? 'Customization' :
    //         router.isActive('/components') ? 'Components' :
    //             router.isActive('/discover-more') ? 'Discover More' : '';

    let docked = false;
    let showMenuIconButton = true;

    if (this.props.width === LARGE && title !== '') {
      docked = true;
      navDrawerOpen = true;
      showMenuIconButton = false;

      styles.navDrawer = {
        zIndex: styles.appBar.zIndex - 1,
      };
      styles.root.paddingLeft = 256;
      styles.footer.paddingLeft = 256;
    }

    return (
      <div>
        <Drawer width={250} openSecondary={true}
                open={this.state.open} >
          <AppBar iconElementLeft={<IconButton><NavigationClose onTouchTap={this.handleToggle} /></IconButton>}
                  title="Settings" />
          <UserSettingsForm />
        </Drawer>
        <AppBar
          onLeftIconButtonTouchTap={this.handleTouchTapLeftIconButton}
          title={title}
          zDepth={0}
          iconElementRight={
            <FlatButton label="Timothy" onTouchTap={this.handleToggle} />
          }
          style={styles.appBar}
          showMenuIconButton={showMenuIconButton}
        />
        <AppNavDrawer
          style={styles.navDrawer}
          location={location}
          docked={docked}
          onRequestChangeNavDrawer={this.handleChangeRequestNavDrawer}
          onChangeList={this.handleChangeList}
          open={navDrawerOpen}
        />
        <FullWidthSection style={styles.footer}>

          <AppToolBar />

          <CardChart />

          <SwipeableTabs />

          <br />

          <p style={styles.p}>
            {'Stock Tracking application built using '}
            <a style={styles.a} href="https://facebook.github.io/react/">
              ReactJS
            </a>
            {', '}
            <a
              style={styles.a}
              href="http://www.material-ui.com/#/"
            >
              Material UI
            </a>
            {', '}
            <a
              style={styles.a}
              href="http://rrag.github.io/react-stockcharts/index.html"
            >
              React Stockcharts
            </a>.
          </p>
        </FullWidthSection>
      </div>
    );
  }
}

export default withWidth()(App);
