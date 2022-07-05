from .db import db
from .amenity import amenity_spots_join


class Spot(db.Model):
  __tablename__ = 'spots'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, )
  title = db.Column(db.String(255), nullable=False)
  description = db.Column(db.String(3000), nullable=False)
  address = db.Column(db.String(50), nullable=False)
  city = db.Column(db.String(25), nullable=False)
  state = db.Column(db.String(2), nullable=False)
  zip_code = db.Column(db.Integer, nullable=False)
  lng = db.Column(db.Float, nullable=False)
  lat = db.Column(db.Float, nullable=False)
  bedrooms = db.Column(db.Integer, nullable=False)
  bathrooms = db.Column(db.Integer, nullable=False)
  sqFt = db.Column(db.Integer, nullable=False)
  design_type = db.Column(db.String(25), nullable=False)
  price_per_day = db.Column(db.Integer, nullable=False)


  # Relationships
  users = db.relationship("User", back_populates="spots")
  bookings = db.relationship("Booking", back_populates="spots", cascade="all, delete")
  reviews = db.relationship("Review", back_populates="spots", cascade="all, delete")
  images = db.relationship("Image", back_populates="spots", cascade="all, delete")
  saves = db.relationship("Save", back_populates="spots", cascade="all, delete")
  amenity_spots = db.relationship("Amenity",
                    secondary=amenity_spots_join,
                     back_populates="spot_amenities",
                     cascade="all, delete")



  # Grab general information of the spot
  def to_dict(self):
    return {
      "id": self.id,
      "host": self.users.to_dict(),
      "title":self.title,
      "description":self.description,
      "address": self.address,
      "city": self.city,
      "state": self.state,
      "zip_code":self.zip_code,
      "state": self.state,
      "bedrooms": self.bedrooms,
      "bathrooms": self.bathrooms,
      "sqFt": self.sqFt,
      "lng": self.lng,
      "lat": self.lat,
      "design_type": self.design_type,
      "price_per_day": self.price_per_day,
      "bookings": [ booking.id for booking in self.bookings],
      "reviews": [ {"id": review.id, "user_id":review.user_id} for review in self.reviews],
      "images": [ image.to_dict() for image in self.images],
      "saves": [ save.id for save in self.saves],
      "amenities": [ amenity.id for amenity in self.amenity_spots],
    }
