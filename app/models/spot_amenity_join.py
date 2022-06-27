from .db import db

class SpotAmenityJoin(db.Model):
  __tablename__ = "spot_amenity_join"

  spot_id = db.Column(db.Integer, db.ForeignKey('spots.id'), nullable=False, primary_key=True)
  amenity_id = db.Column(db.Integer, db.ForeignKey('amenities.id'), nullable=False, primary_key=True)
