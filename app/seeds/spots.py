from app.models import db, Spot


# # Adds a demo user, you can add other users here if you want
def seed_spots():
    property1 = Spot(
        user_id=1, title='Test Property Seed', description='test description', address='1 Test Lane', city='City', state='NY', zip_code=12345, lng=1, lat=2, bedrooms=3, bathrooms=2.5, sqFt=1500, design_type='Design Type', price_per_day=250)

    db.session.add(property1)

    db.session.commit()


# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and RESET IDENTITY
# # resets the auto incrementing primary key, CASCADE deletes any
# # dependent entities
def undo_spots():
    db.session.execute('TRUNCATE spots RESTART IDENTITY CASCADE;')
    db.session.commit()
