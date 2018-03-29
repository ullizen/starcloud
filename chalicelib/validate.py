import re

def validate_subject(string):
    if re.match(r'^[a-zA-Z åäöÅÄÖ 0-9+:0-9+]{1,30}*$', string):    
        return True
    return False