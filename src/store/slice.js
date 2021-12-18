import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61bdde042a1dd4001708a162.mockapi.io/api/v1/',
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
    }),
  }),
});

export const { useFetchContactsQuery } = contactsApi;
