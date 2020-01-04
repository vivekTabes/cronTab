import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import URLconfig from './URLconfig.json';

class AllExp extends Component {
  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }

  render() {



  const urlPage = Object.keys(URLconfig)



const urlList = () => {
  return urlPage.map((item) => {
    return <div>
    <Link to={"/" + item}><li>{item}</li></Link>
    </div>
  })
}



    return (
      <div>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
   <h4 style={{ textAlign:"center", marginTop: "10px", fontFamily:"monospace"}}>Expressions Example</h4>
          <div className='container' >
           {urlList()}
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(AllExp)
};
