from .db import db

class Save(db.Model):
  __tablename__ = "saves"

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  spot_id = db.Column(db.Integer, db.ForeignKey('spots.id'), nullable=False)


  # Relationships
  user = db.relationship("User", back_populats="saves")
  spot = db.relationship("Spot", back_populats="saves")
