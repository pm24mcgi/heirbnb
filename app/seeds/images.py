from app.models import db, Image


# # Adds a demo user, you can add other users here if you want
def seed_images():
    images = [Image(spot_id=1, url="https://a0.muscache.com/im/pictures/a57ab9ea-80d5-4ed0-aa15-ce536039778d.jpg"),
    Image(spot_id=1, url="https://a0.muscache.com/im/pictures/miso/Hosting-677112/original/a9014d8d-7a98-4dd2-91ab-7b69e140606d.jpeg"),
    Image(spot_id=1, url="https://a0.muscache.com/im/pictures/6797bbbb-8164-4a11-985c-fdeb1e7feabf.jpg"),
    Image(spot_id=1, url="https://a0.muscache.com/im/pictures/55513dc0-a948-463e-8b96-978c52b50267.jpg"),
    Image(spot_id=1, url="https://a0.muscache.com/im/pictures/miso/Hosting-677112/original/a9014d8d-7a98-4dd2-91ab-7b69e140606d.jpeg"),

    Image(spot_id=2, url="https://a0.muscache.com/im/pictures/prohost-api/Hosting-50747912/original/812a5630-bf53-455e-9d2c-4014513d90e2.jpeg"),
    Image(spot_id=2, url="https://a0.muscache.com/im/pictures/prohost-api/Hosting-50747912/original/6b96ab05-e704-4cd6-83a4-e1dc9ed9627c.jpeg"),
    Image(spot_id=2, url="https://a0.muscache.com/im/pictures/prohost-api/Hosting-50747912/original/80c4353e-895d-43ec-aad4-39280264dcfe.jpeg"),
    Image(spot_id=2, url="https://a0.muscache.com/im/pictures/prohost-api/Hosting-50747912/original/e27395f3-1f20-40d1-9de8-a99fc3ebfd7b.jpeg"),
    Image(spot_id=2, url="https://a0.muscache.com/im/pictures/prohost-api/Hosting-50747912/original/917279be-d34e-4259-a58f-0625e302adb3.jpeg"),

    Image(spot_id=3, url="https://a0.muscache.com/im/pictures/miso/Hosting-15433315/original/45ecd03d-5865-4e12-989f-20f6c66baedc.jpeg"),
    Image(spot_id=3, url="https://a0.muscache.com/im/pictures/eed0ecf6-7335-4e6c-911c-221a871083f5.jpg"),
    Image(spot_id=3, url="https://a0.muscache.com/im/pictures/0d79b412-229a-404c-a7ac-fc53d9085429.jpg"),
    Image(spot_id=3, url="https://a0.muscache.com/im/pictures/080acd2e-979e-4357-aa02-a79a13879be2.jpg"),

    Image(spot_id=4, url="https://a0.muscache.com/im/pictures/2bc234de-019d-4311-bfea-1a902a379a70.jpg"),
    Image(spot_id=4, url="https://a0.muscache.com/im/pictures/9bbdd36f-e44b-4057-b73a-d233b8cf16c1.jpg"),
    Image(spot_id=4, url="https://a0.muscache.com/im/pictures/0fdbc4c4-6107-4fc7-a1f1-f98ec305664f.jpg"),
    Image(spot_id=4, url="https://a0.muscache.com/im/pictures/9fa9fad4-e092-46b8-ad57-9aa5743801e5.jpg"),

    Image(spot_id=5, url="https://a0.muscache.com/im/pictures/0b419a3f-f853-4452-9c55-719c2976c30f.jpg"),
    Image(spot_id=5, url="https://a0.muscache.com/im/pictures/7a035a33-39f9-4512-a9bc-d14e9a26c8dd.jpg"),
    Image(spot_id=5, url="https://a0.muscache.com/im/pictures/5d48a0f0-c037-49a4-ae55-0a78e4c480ad.jpg"),
    Image(spot_id=5, url="https://a0.muscache.com/im/pictures/d8e6e8da-189e-4213-8845-73c41ad9a4ab.jpg"),

    Image(spot_id=6, url="https://a0.muscache.com/im/pictures/654cb4fb-d72f-4f43-9cbd-11c2871c3d77.jpg"),
    Image(spot_id=6, url="https://a0.muscache.com/im/pictures/a64f223e-88ce-4955-9fff-83746039230e.jpg"),
    Image(spot_id=6, url="https://a0.muscache.com/im/pictures/7a035a33-39f9-4512-a9bc-d14e9a26c8dd.jpg"),
    Image(spot_id=6, url="https://a0.muscache.com/im/pictures/dbccddae-48b3-4bf9-8eb4-505bda1aa54c.jpg"),




    ]

    for image in images:
        db.session.add(image)

    db.session.commit()


# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and RESET IDENTITY
# # resets the auto incrementing primary key, CASCADE deletes any
# # dependent entities
def undo_images():
    db.session.execute('TRUNCATE spots RESTART IDENTITY CASCADE;')
    db.session.commit()
