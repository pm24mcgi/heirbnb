from .db import db

class SpotAmenityJoin(db.Model):
  __tablename__ = "spot_amenity_join"

  id = db.Column(db.Integer, primary_key=True)
  spot_id = db.Column(db.Integer, db.ForeignKey('spots.id'), nullable=False)
  spot_details_id = db.Column(db.Integer, db.ForeignKey('spots_details.id'), nullable=False)
