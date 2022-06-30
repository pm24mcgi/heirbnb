from app.models import db, Spot


# # Adds a demo user, you can add other users here if you want
def seed_spots():
    property1 = Spot(
        user_id=1, title='Highlands Castle... overlooking Lake George!', description="Poised on a graceful mountaintop overlooking majestic Lake George, your castle awaits... From the moment you arrive, you'll sense the tranquility that surrounds this enchanting property and you’ll be captivated by the most spectacular view in the world! The intrigue and allure of the castle are matched only by the breathtaking vista of Lake George and the Adirondack Mountains.", address='1 Test Lane', city='Bolton', state='NY', zip_code=12345, lng=1, lat=2, bedrooms=3, bathrooms=2.5, sqFt=3500, design_type='Castles', price_per_day=5000)
    property2 = Spot(
        user_id=1, title='George!', description="Poised on a graceful mountaintop overlooking majestic Lake George, your castle awaits... From the moment you arrive, you'll sense the tranquility that surrounds this enchanting property and you’ll be captivated by the most spectacular view in the world! The intrigue and allure of the castle are matched only by the breathtaking vista of Lake George and the Adirondack Mountains.", address='1 Test Lane', city='Bolton', state='NY', zip_code=12345, lng=1, lat=2, bedrooms=4, bathrooms=2.5, sqFt=4500, design_type='Castles', price_per_day=3000)

    db.session.add(property1)
    db.session.add(property2)

    db.session.commit()


# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and RESET IDENTITY
# # resets the auto incrementing primary key, CASCADE deletes any
# # dependent entities
def undo_spots():
    db.session.execute('TRUNCATE spots RESTART IDENTITY CASCADE;')
    db.session.commit()
