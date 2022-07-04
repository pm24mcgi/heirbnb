from .db import db

amenity_spots_join = db.Table('amenity_spots_join',
                              db.Model.metadata,
                              db.Column('spots', db.ForeignKey('spots.id'), nullable=False, primary_key=True),
                              db.Column('amenities', db.ForeignKey('amenities.id'), nullable=False, primary_key=True)
                              )


class Amenity(db.Model):
  __tablename__="amenities"

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(25),nullable=False)
  image = db.Column(db.String(255), nullable=False)

  # Relationships
  spot_amenities = db.relationship("Spot",
                    secondary=amenity_spots_join,
                     back_populates="amenity_spots",
                     cascade="all, delete")
