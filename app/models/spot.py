from .db import db

class Spot(db.Model):
  __tablename__ = 'spots'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, )
  title = db.Column(db.String(50), nullable=False)
  address = db.Column(db.String(100), nullable=False)
  city = db.Column(db.String(50), nullable=False)
  state = db.Column(db.String(5), nullable=False)
  zip_code = db.Column(db.Integer, nullable=False)
  lng = db.Column(db.String(25), nullable=False)
  lat = db.Column(db.String(25), nullable=False)
  bedrooms = db.Column(db.Integer, nullable=False)
  bathrooms = db.Column(db.Integer, nullable=False)
  sqFt = db.Column(db.Integer, nullable=False)
  design_type = db.Column(db.String(25), nullable=False)
  price_per_day = db.Column(db.Integer, nullable=False)


  # Relationships
  user = db.relationship("User", back_populates="spots")
  booking = db.relationship("Booking", back_populates="spots")
  review = db.relationship("Review", back_populates="spots")
  image = db.relationship("Image", back_populates="spots")
  save = db.relationship("Save", back_populates="spots")


  # Grab general information of the spot
  def to_dict(self):
    return {
      "id": self.id,
      "host": self.user_id,
      "title":self.title,
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
      "host": self.user_id,
      "title":self.title,
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
