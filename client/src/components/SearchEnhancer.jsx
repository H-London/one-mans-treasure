import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import store from '../index.jsx';

class SearchEnhancer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sortType: 'default'
    }
  }

  handleSortChange(e, {name}) {
    // debugger;
    if(name !== 'default') {
      this.sortBy(name);
    }
    this.setState({sortType: name});
  }

  sortBy(condition) {
    let listings = store.getState().listings.listings;

    if(condition === 'claimsDesc' || condition === 'claimsAsc') {
      let key = 'interested_users'

      listings = this.compare(listings, key, condition);

      store.dispatch({
        type: 'SET_LISTINGS',
        payload: listings
      });
    } else if(condition === 'name') {
      let key = 'title'

      listings = this.compare(listings, key, condition);

      store.dispatch({
        type: 'SET_LISTINGS',
        payload: listings
      });
    }
  }

  compare(listings, key, sortType) {
    if(sortType === 'claimsDesc') {
      return listings.sort((a,b) => {
        if(a[key].length < b[key].length) {
          return 1;
        } else {
          return -1;
        }
      });
    } else if(sortType === 'claimsAsc') {
      return listings.sort((a,b) => {
        if(a[key].length < b[key].length) {
          return -1;
        } else {
          return 1;
        }
      });
    } else if(sortType === 'name') {
      return listings.sort((a,b) => {
        if(a[key] < b[key]) {
          return -1;
        } else {
          return 1;
        }
      });
    }
  }
  render() {
    const {sortType} = this.state;
    const color = "orange";
    return(
      <div>
        <Menu>

            <Button color='orange'>
              {`Searching for: ${this.props.query}`}
            </Button>

          <Menu.Item
            name='claimsDesc'
            active={sortType === 'claimsDesc'}
            onClick={this.handleSortChange.bind(this)}>
            Most Claimed
          </Menu.Item>

          <Menu.Item
            name='claimsAsc'
            active={sortType === 'claimsAsc'}
            onClick={this.handleSortChange.bind(this)}>
            Least Claimed
          </Menu.Item>

          <Menu.Item
            name='name'
            active={sortType === 'name'}
            onClick={this.handleSortChange.bind(this)}>
            Name
          </Menu.Item>

        </Menu>
      </div>
    ); // end return
  }
}

export default SearchEnhancer;