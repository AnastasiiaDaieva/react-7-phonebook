import './App.css';
import React from 'react';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';
import { fetchContacts } from 'store/operations';
import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <Form />
      <Filter />
      <Contacts />
    </div>
  );
}
const mapStateToProps = state => ({
  isLoading: state.contacts.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
