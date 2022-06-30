from app.models import db, Spot


# # Adds a demo user, you can add other users here if you want
def seed_spots():
    property1 = Spot(
        user_id=1, title='Highlands Castle... overlooking Lake George!', description="Poised on a graceful mountaintop overlooking majestic Lake George, your castle awaits... From the moment you arrive, you'll sense the tranquility that surrounds this enchanting property and you’ll be captivated by the most spectacular view in the world! The intrigue and allure of the castle are matched only by the breathtaking vista of Lake George and the Adirondack Mountains.",
        address='1 Test Lane', city='Bolton', state='NY', zip_code=12804, lng=1, lat=2, bedrooms=3, bathrooms=2.5, sqFt=3500, design_type='Castles', price_per_day=5000)
    property2 = Spot(
        user_id=2, title="ABOVE LAGO CASTILLE I LAKE TRAVIS LUX I VIEWS I PO", description="THE ABOVE LAGO CASTILLE an estate of gorgeous French Provencal architecture with touches of Mediterranean is stunning from the front gates down to the private dock. The home sits amongst unrivaled landscaping and unmatched views. of Lake Travis.",
        address="2 Test Lane", city='Lagos Vista', state='TX', zip_code=78645, lng=1, lat=2, bedrooms=7, bathrooms=8.5, sqFt=5500, design_type='Castles', price_per_day=4500
    )
    property3 = Spot(
        user_id=3, title="Redwall Castle in Germantown, MD (Washington, DC)", description="Redwall Castle (built in the 1930s) is located in Germantown, Maryland (22 miles northwest of Washington, DC). \
        Youll love our unique home because it is a dream come true place. It is excellent for families (w kids) and groups.See (redwallcastle com) for amazing details. The castle is made of a main house and a separate carriage house.\
        The main house has 5 bedrooms and 4.5 bathrooms, and is for rent. The carriage house is used by the owner.\
        Outdoor open wood fire pits are available.",
        address="3 Test Lane", city='Boyds', state='MD', zip_code=20841, lng=1, lat=2, bedrooms=5, bathrooms=5, sqFt=2050, design_type='Castles', price_per_day=495
    )

    db.session.add(property1)
    db.session.add(property2)
    db.session.add(property3)

    db.session.commit()


# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and RESET IDENTITY
# # resets the auto incrementing primary key, CASCADE deletes any
# # dependent entities
def undo_spots():
    db.session.execute('TRUNCATE spots RESTART IDENTITY CASCADE;')
    db.session.commit()
