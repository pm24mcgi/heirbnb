from email.policy import default
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(20))
    last_name = db.Column(db.String(20))
    host = db.Column(db.Boolean, nullable=False, default=False)
    bio = db.Column(db.String(1000))
    photo = db.Column(db.String(255))

    # Relationships
    spots = db.relationship("Spot", back_populates="users")
    bookings = db.relationship("Booking", back_populates="users")
    reviews = db.relationship("Review", back_populates="users")
    saves = db.relationship("Save", back_populates="users")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'bio': self.bio,
            'host': self.host,
            'photo': self.photo,
            "bookings": [ booking.id for booking in self.bookings],
            "spots": [ spot.id for spot in self.spots ]
        }
