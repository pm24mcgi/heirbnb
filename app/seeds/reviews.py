from app.models import db, Review


# # Adds a demo user, you can add other users here if you want
def seed_reviews():
    review1 = Review(
        user_id=2, spot_id=1, rating=5, review='This is a lovely review')

    db.session.add(review1)

    db.session.commit()


# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and RESET IDENTITY
# # resets the auto incrementing primary key, CASCADE deletes any
# # dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE spots RESTART IDENTITY CASCADE;')
    db.session.commit()
