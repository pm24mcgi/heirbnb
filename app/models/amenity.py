from .db import db

class Amenity(db.Model):
  __tablename__="amenities"

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(25),nullable=False)
  image = db.Column(db.String(255), nullable=False)

  # Relationships
  spot_amenities = db.relationship("Spot",
                    secondary="spot_amenity_join",
                     back_populates="amenity_spots",
                     cascade="all, delete")
