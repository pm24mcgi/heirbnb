from app.models import db, Image


# # Adds a demo user, you can add other users here if you want
def seed_images():
    image1 = Image(spot_id=1, url="https://a0.muscache.com/im/pictures/a57ab9ea-80d5-4ed0-aa15-ce536039778d.jpg")
    image2 = Image(spot_id=1, url="https://a0.muscache.com/im/pictures/miso/Hosting-677112/original/a9014d8d-7a98-4dd2-91ab-7b69e140606d.jpeg")
    image3 = Image(spot_id=1, url="https://a0.muscache.com/im/pictures/6797bbbb-8164-4a11-985c-fdeb1e7feabf.jpg")
    image4 = Image(spot_id=1, url="https://a0.muscache.com/im/pictures/55513dc0-a948-463e-8b96-978c52b50267.jpg")
    image5 = Image(spot_id=1, url="https://a0.muscache.com/im/pictures/miso/Hosting-677112/original/a9014d8d-7a98-4dd2-91ab-7b69e140606d.jpeg")


    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)

    db.session.commit()


# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and RESET IDENTITY
# # resets the auto incrementing primary key, CASCADE deletes any
# # dependent entities
def undo_images():
    db.session.execute('TRUNCATE spots RESTART IDENTITY CASCADE;')
    db.session.commit()
