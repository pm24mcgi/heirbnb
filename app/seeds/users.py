from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='bsmith1987', email='demo@aa.io', hashed_password='pbkdf2:sha256:260000$TRaqj8Ejhm6NYLgZ$11b29120a8a87b18217c245fd939eec41f3c94f6a0ca688a722edbebc3339f17',
        host=True, first_name="Brad",  last_name="Smith",  bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum \
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. ",
         photo="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80")
    marnie = User(
        username='rollerbladeluvr', email='marnie@aa.io', hashed_password='pbkdf2:sha256:260000$TRaqj8Ejhm6NYLgZ$11b29120a8a87b18217c245fd939eec41f3c94f6a0ca688a722edbebc3339f17',
        host=True,first_name="Marnie", last_name="Carrie" , bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum \
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. ", photo="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80")
    bobbie = User(
        username='thatdudebobbie', email='bobbie@aa.io', hashed_password='pbkdf2:sha256:260000$TRaqj8Ejhm6NYLgZ$11b29120a8a87b18217c245fd939eec41f3c94f6a0ca688a722edbebc3339f17',
        host=True,first_name="Bob", last_name="It" ,  bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum \
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. ",
         photo="https://pbs.twimg.com/media/DZotU1hW0AEDN5F.jpg:large")

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
