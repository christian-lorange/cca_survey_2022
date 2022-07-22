import os
import requests
import time
import re
from datetime import datetime
from csv import reader


with open('Company Alias.csv', 'r') as read_obj:
    # pass the file object to reader() to get the reader object
	csv_reader = reader(read_obj)
	print(csv_reader)
    # Iterate over each row in the csv using reader object
	for row in csv_reader:
        # row variable is a list that represents a row in csv
		print(row)

		headers = {'X-Parse-Application-Id': 'cca_locker', 'X-Parse-REST-API-Key': 'undefined'}

		data = {"business_name":row[0],"extended":row[2]}
		response = \
			requests.post('http://www.orangehouse-cca.com:1337/parse/classes/survey_2022'
		    , headers=headers, data=data)

		time.sleep(0.08)

		print(response)