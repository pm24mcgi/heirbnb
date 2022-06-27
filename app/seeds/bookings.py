from app.models import db, Booking
from datetime import date


# # Adds a demo user, you can add other users here if you want
def seed_bookings():
    booking1 = Booking(
        spot_id=1, user_id=2, start_date=date(2008, 8, 15), end_date=date(2008, 8, 16))

    db.session.add(booking1)

    db.session.commit()


# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and RESET IDENTITY
# # resets the auto incrementing primary key, CASCADE deletes any
# # dependent entities
def undo_bookings():
    db.session.execute('TRUNCATE spots RESTART IDENTITY CASCADE;')
    db.session.commit()
