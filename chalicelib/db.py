import uuid
import boto3
from boto3.dynamodb.conditions import Key
from time import gmtime, strftime
from chalicelib import validate

def connect_to_db():
	dynamodb = boto3.resource('dynamodb') #This is how one connects to a resource
	table = dynamodb.Table('StarCloud')

	return table

def get_table():
	table = connect_to_db()
	return table

def get_all():
	all_items = get_table().scan()
	result = all_items['Items']
	
	return result

def post_item(data):

	if(validate.validate_subject(data['Title'])):

		get_table().put_item(
			Item={
				'UUID': str(uuid.uuid1()),
				'Title': data['Title'],
				'Rating': data['Rating'],
				'Date': strftime("%Y-%m-%d %H:%M:%S", gmtime())
			}
		)

		return "posted"
	
	return "did not post"