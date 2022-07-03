const LOAD_BOOKINGS = "bookings/LOAD_BOOKINGS";
const ADD_BOOKING = 'booking/ADD_BOOKING';
const DELETE_BOOKING = 'booking/DELETE_BOOKING'

const loadBookings = (bookings) => ({
    type: LOAD_BOOKINGS,
    bookings
});

const addBooking = (createdBooking) => ({
    type: ADD_BOOKING,
    createdBooking
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

export const createBooking = (spot) => async (dispatch) => {
    const response = await fetch(`/api/bookings/${spot.spot_id}/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(spot)
    });
    const createdBooking = await response.json();
    if (createdBooking) {
        dispatch(addBooking(createdBooking))
        return createdBooking
    }
}


export const editBookingThunk = (booking) => async (dispatch) => {
    const response = await fetch(`/api/${booking.id}`, {
        method: "PUT",
        body: JSON.stringify(booking)
    })
    const editedBooking = await response.json()
    if (editedBooking) {

        dispatch(addBooking(editedBooking))
        return editedBooking
    }
}

export const deleteBooking = (bookingId) => async (dispatch) => {
    const response = await fetch(`/api/bookings/${bookingId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingId)
    })
    if(response.ok){
        const booking = await response.json();
        dispatch(removeBooking(booking.id))
        return bookingId
    }
}

const bookingReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_BOOKINGS:
            const allBookings = action.bookings
            return allBookings
        case ADD_BOOKING:
            return { ...state, [action.createdBooking.id]: action.createdBooking }
        case DELETE_BOOKING:
            const deleteState = { ...state }
            delete deleteState[action.bookingId]
            return deleteState
        default:
            return state;
    }
}

export default bookingReducer;
