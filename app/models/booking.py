from .db import db

class Booking(db.Model):
  __tablename__ = 'bookings'

  id = db.Column(db.Integer, primary_key=True)
  spot_id = db.Column(db.Integer, db.ForeignKey('spots.id'), nullable=False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  start_end = db.Column(db.Date, nullable=False)
  end_date = db.Column(db.Date, nullable=False)

  # Relationships
  user = db.relationship("User", pack_populates="bookings")
  spot = db.relationship("Spot", pack_populates="bookings")
