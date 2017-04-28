import React, {Component, PropTypes} from 'react';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

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

const ListExampleSelectable = () => (
        <SelectableList defaultValue={3}>
            <ListItem
                value={1}
                primaryText="AAPL 141.750 -0.055 (-0.039%)"
                secondaryText="Day's Range: 141.5595 - 141.9900"
                nestedItems={[
                    <ListItem
                        value={2}
                        primaryText="Grace Ng"
                        leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
                    />,
                    <ListItem
                        value={8}
                        primaryText="Grace Ng 2"
                        leftAvatar={<Avatar src="images/uxceo-128.jpg" />}
                    />
                ]}
            />
            <ListItem
                value={3}
                primaryText="AMZN 890.9000 -5.4097 (-0.6036%)"
                secondaryText="Day's Range: 888.58 - 893.00"
            />
            <ListItem
                value={4}
                primaryText="TSLA 299.0300 +2.1354 (+0.7194%)"
                secondaryText="Day's Range: 295.3000 - 300.0000"
            />
            <ListItem
                value={5}
                primaryText="GOOG 823.6800 -0.9426 (-0.1144%)"
                secondaryText="Day's Range: 821.4400 - 825.4000"
            />
            <ListItem
                value={6}
                primaryText="NFLX 143.91 +0.08 (+0.06%)"
                secondaryText="Day's Range: 143.37 - 144.33"
            />
            <ListItem
                value={7}
                primaryText="FB 139.9400 +0.3401 (+0.2437%)"
                secondaryText="Day's Range: 139.3300 - 139.9800"
            />
            <ListItem
                value={10}
                primaryText="WFM 34.01 -0.11 (-0.32%)"
                secondaryText="Day's Range: 33.97 - 34.35"
            />
            <ListItem
                value={11}
                primaryText="FORD 1.19 -0.05 (-4.24%)"
                secondaryText="Day's Range: 1.13 - 1.19"
            />
            <ListItem
                value={12}
                primaryText="MAR 91.66 -0.07 (-0.08%)"
                secondaryText="Day's Range: 91.32 - 91.75"
            />
        </SelectableList>
);

export default ListExampleSelectable;