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
    property4 = Spot(
        user_id=1, title="Ocean Front Beach Home With Sparkling Pool", description="An extraordinary opportunity to spend a magical vacation at this incredible ocean front home in. Enjoy panoramic ocean views from Crystal Pier to the south and a view of the beautiful Bird Rock \
        coastline to the north. Imagine welcoming your family and friends to your coastal retreat and building a lifetime of memories at the waterfront \
        watching dolphins frolic in the waves and stunning sunsets day after day. We invite you to experience the ultimate lifestyle. Parties or events not allowed."
,
        address="4 Test Lane", city='San Diego', state='CA', zip_code=22400, lng=1, lat=2, bedrooms=3, bathrooms=2, sqFt=2050, design_type='AmazingPools', price_per_day=2500
    )
    property5 = Spot(
        user_id=2, title="Resort Pool/Mins to Beach/Golf&Hills Views/Exclus Quiet Area", description="Open the floor-to-ceiling sliding windows to let the ocean breezes in to the 5,000-square-feet open-concept interior. Bask in the views over the exclusive Rancho Santa Fe Golf Club and the valley, while outside, shaded patios and the pool await."
,
        address="6 Test Lane", city='Rancho Santa Fe', state='CA', zip_code=92240, lng=1, lat=1, bedrooms=3, bathrooms=5, sqFt=3000, design_type='AmazingPools', price_per_day=4500
    )
    property6 = Spot(
        user_id=2, title="Valentine Estate", description="Step inside the walls of Valentine Estate and experience the seclusion and luxury of “The Palm Springs Life”. Breathtaking mountain views surround this spectacular contemporary property that was designed for private, five-star resort living. \
        Between the lavishly adorned terrace, living room lounge, wet bar, and dining areas, you'll have plenty of space to gather as \
        one or break-off for more intimate moments. Nearby, you’ll love exploring the National Parks, desert city shopping, and some of California's best golf courses - all within a short drive. \
        Every detail was carefully thought out when redesigning the gardens, outdoor lighting and amenities at this very special property. \
        Surrounded by mature palm trees, lush lawns, and soaring mountain views, Valentine Estate celebrates its gorgeous environment with spacious outdoor lounge areas and an airy, open concept interior."
,
        address="5 Test Lane", city='Palm Springs', state='CA', zip_code=92014, lng=1, lat=1, bedrooms=3, bathrooms=5, sqFt=2450, design_type='AmazingPools', price_per_day=1500
    )

    db.session.add(property1)
    db.session.add(property2)
    db.session.add(property3)
    db.session.add(property4)
    db.session.add(property6)

    db.session.commit()


# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and RESET IDENTITY
# # resets the auto incrementing primary key, CASCADE deletes any
# # dependent entities
def undo_spots():
    db.session.execute('TRUNCATE spots RESTART IDENTITY CASCADE;')
    db.session.commit()
