import './App.css';
import React from 'react';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';
import { fetchContacts } from 'store/operations';
import { connect } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { css } from '@emotion/react';

import { isLoading } from 'store/selectors';
import { useFetchContactsQuery } from 'store/slice';

function App() {
  const { data, isFetching } = useFetchContactsQuery();
  console.log(data);
  return (
    <div className="App">
      <Form />
      <Filter />
      {isFetching && <ClipLoader color="#000000" size={150} />}

      {data && <Contacts contacts={data} />}
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
