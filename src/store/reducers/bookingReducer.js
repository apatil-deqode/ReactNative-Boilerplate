import {createSlice} from '@reduxjs/toolkit';
// Slice
const slice = createSlice({
  name: 'booking',
  initialState: {
    bookID: null,
  },
  reducers: {
    bookingSuccess: (state, action) => {
      state.bookID = action.payload;
    },
  },
});
export default slice.reducer;
// Actions
const {bookingSuccess} = slice.actions;

export const steBookingID = Id => async dispatch => {
  try {
    dispatch(bookingSuccess(Id));
  } catch (e) {
    return console.error(e.message);
  }
};
