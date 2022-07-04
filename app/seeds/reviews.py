from app.models import db, Review


# # Adds a demo user, you can add other users here if you want
def seed_reviews():
    review1 = Review(
        user_id=1, spot_id=1, rating=4, review='Really enjoyed my stay!')
    review2 = Review(
        user_id=2, spot_id=1, rating=5, review='5 stars all around!')
    review3 = Review(
        user_id=3, spot_id=1, rating=3, review='This was not fit for royalty')
    review4 = Review(
        user_id=1, spot_id=2, rating=5, review='5 stars all around!')
    review5 = Review(
        user_id=2, spot_id=2, rating=4, review='Really enjoyed my stay!')
    review6 = Review(
        user_id=3, spot_id=2, rating=5, review='WOW!!!')
    review7 = Review(
        user_id=2, spot_id=3, rating=3, review='House is in decent condition. However, it did not have a butler')
    review8 = Review(
        user_id=3, spot_id=3, rating=3, review='Neither good nor bad. I will not be returning')
    review9 = Review(
        user_id=1, spot_id=3, rating=1, review='To return to this dungeon would be a nightmare. Would give zero stars if I could')

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)
    db.session.add(review8)
    db.session.add(review9)

    db.session.commit()


# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and RESET IDENTITY
# # resets the auto incrementing primary key, CASCADE deletes any
# # dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE spots RESTART IDENTITY CASCADE;')
    db.session.commit()
