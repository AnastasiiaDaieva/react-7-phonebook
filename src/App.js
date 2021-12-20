import './App.css';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';
import { useFetchContactsQuery } from 'store/slice';
import ClipLoader from 'react-spinners/ClipLoader';
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState('');

  const { data, isFetching } = useFetchContactsQuery();

  const getVisibleContacts = contacts => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <div className="App">
      <Form />
      <Filter onChange={e => setFilter(e.target.value)} />
      {isFetching ? (
        <ClipLoader color="#000000" size={150} />
      ) : (
        <Contacts data={getVisibleContacts(data)} />
      )}
    </div>
  );
}
export default App;
