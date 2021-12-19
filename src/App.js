import './App.css';
import React from 'react';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';
import { fetchContacts } from 'store/operations';
import { connect } from 'react-redux';

import { isLoading } from 'store/selectors';

function App() {
  return (
    <div className="App">
      <Form />
      <Filter />

      <Contacts />
    </div>
  );
}
const mapStateToProps = state => ({
  isLoading: isLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
