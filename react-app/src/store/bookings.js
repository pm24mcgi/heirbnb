const LOAD_BOOKINGS = "bookings/LOAD_BOOKINGS";
const ADD_BOOKING = 'booking/ADD_BOOKING';
const DELETE_BOOKING = 'booking/DELETE_BOOKING'

const loadBookings = (bookings) => ({
    type: LOAD_BOOKINGS,
    bookings
});

const addBooking = (booking) => ({
    type: ADD_BOOKING,
    booking
});

const removeBooking = (bookingId) => {
    return {
        type: DELETE_BOOKING,
        bookingId
    }
}

export const getBookings = () => async dispatch => {
    const response = await fetch(`/api/bookings`);
    if (response.ok) {
        const bookings = await response.json();
        dispatch(loadBookings(bookings))
    }
}

export const createBooking = (booking) => async (dispatch) => {
    const response = await fetch(`/api/${spot.id}/new`, {
        method: "POST",
        body: JSON.stringify(booking)
    });
    const createdBooking = await response.json();

    if (createdBooking) {
        dispatch(addBooking(createdBooking))
    }
    return createdBooking
}

export const editBookingThunk = (editBooking) => async (dispatch) => {
    const response = await fetch(`/api/${booking.id}`, {
        method: "PUT",
        body: JSON.stringify(editBooking)
    })
    const editedBooking = await response.json()
    if (editedBooking) {

        dispatch(addBooking(editedBooking))
        return editedBooking
    }
}

export const deleteBooking = (destroyedBooking) => async (dispatch) => {
    const response = await csrfFetch(`/api/${booking.id}`, {
        method: "DELETE",
        body: JSON.stringify(destroyedBooking)
    })
    const deletedBooking = await response.json();
    dispatch(removeBooking(deletedBooking))
    return deletedBooking
}

const bookingReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_BOOKINGS:
            const allBookings = {};
            action.bookings.forEach((booking) => {
                allBookings[booking.id] = booking;
            });
            return allBookings
        case ADD_BOOKING:
            return { ...state, [action.booking.id]: action.booking }
        case DELETE_BOOKING:
            const deleteState = { ...state }
            delete deleteState[action.bookingId]
            return deleteState
        default:
            return state;
    }
}

export default bookingReducer;
