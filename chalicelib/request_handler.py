from chalicelib import db

def handle_get_all():
	return db.get_all()

def handle_post_item(data):
	return db.post_item(data)