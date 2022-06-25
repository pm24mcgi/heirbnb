from .db import db

class Spot(db.Model):
  __tablename__ = 'spots'

  id = db.Column(db.Integer, primary_key=True)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, )
  address = db.Column(db.String(100), nullable=False)
  city = db.Column(db.String(50), nullable=False)
  state = db.Column(db.String(5), nullable=False)
  zipcode = db.Column(db.Integer, nullable=False)
  lng = db.Column(db.String(25), nullable=False)
  lat = db.Column(db.String(25), nullable=False)
  bedrooms = db.Column(db.Integer, nullable=False)
  bathrooms = db.Column(db.Integer, nullable=False)
  sqFt = db.Column(db.Integer, nullable=False)
  design_type = db.Column(db.String(25), nullable=False)
  price_per_day = db.Column(db.Integer, nullable=False)


  # Relationships
  user = db.relationship("User", pack_populates="spots")
  booking = db.relationship("Booking", pack_populates="spots")


  # Grab general information of the spot
  def to_dict(self):
    return {
      "id": self.id,
      "host": self.userId,
      "city": self.city,
      "state": self.state,
      "bedrooms": self.bedrooms,
      "bathrooms": self.bathrooms,
      "sqFt": self.sqFt,
      "designType": self.design_type,
      "pricePerDay": self.price_per_day
    }

  def to_dict_booked(self):
    return {
      "id": self.id,
      "host": self.userId,
      "address": self.address,
      "city": self.city,
      "state": self.state,
      "zipcode": self.zipcode,
      "lng": self.lng,
      "lat": self.lat,
      "bedrooms": self.bedrooms,
      "bathrooms": self.bathrooms,
      "sqFt": self.sqFt,
      "designType": self.design_type,
      "pricePerDay": self.price_per_day
    }
