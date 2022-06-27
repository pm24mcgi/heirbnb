from .db import db
from .amenity import amenity_spots_join


class Spot(db.Model):
  __tablename__ = 'spots'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, )
  title = db.Column(db.String(50), nullable=False)
  description = db.Column(db.String(1000), nullable=False)
  address = db.Column(db.String(25), nullable=False)
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
  bookings = db.relationship("Booking", back_populates="spots")
  reviews = db.relationship("Review", back_populates="spots")
  images = db.relationship("Image", back_populates="spots")
  saves = db.relationship("Save", back_populates="spots")
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
      "city": self.city,
      "zipCode":self.zip_code,
      "state": self.state,
      "bedrooms": self.bedrooms,
      "bathrooms": self.bathrooms,
      "sqFt": self.sqFt,
      "designType": self.design_type,
      "pricePerDay": self.price_per_day,
      "bookings": [ booking.id for booking in self.bookings],
      "reviews": [ review.id for review in self.reviews],
      "images": [ image.id for image in self.images],
      "saves": [ save.id for save in self.saves],
      "amenities": [ amenity.id for amenity in self.amenity_spots],
    }

  def to_dict_booked(self):
    return {
      "id": self.id,
      "host": self.users.to_dict(),
      "title":self.title,
      "description":self.description,
      "address": self.address,
      "city": self.city,
      "state": self.state,
      "zipcode": self.zip_code,
      "lng": self.lng,
      "lat": self.lat,
      "bedrooms": self.bedrooms,
      "bathrooms": self.bathrooms,
      "sqFt": self.sqFt,
      "designType": self.design_type,
      "pricePerDay": self.price_per_day
    }
