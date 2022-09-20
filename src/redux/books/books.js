/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const CREATE_BOOK = 'bookstore/books/CREATE_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

const initialBooks = [];
const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qCcNyCpnsdWjc2n65O6A/books';

export default (state = initialBooks, action) => {
  switch (action.type) {
    case `${CREATE_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.item_id !== action.payload);
    case `${GET_BOOKS}/fulfilled`:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const createBook = createAsyncThunk(CREATE_BOOK, async (book) => {
  await axios.post(API_URL, book);
  return book;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

export const getBooks = createAsyncThunk(GET_BOOKS, async () => {
  const response = await axios.get(API_URL);
  const data = Object.keys(response.data).map((id) => ({
    item_id: id,
    ...response.data[id][0],
  }));
  return data;
});
