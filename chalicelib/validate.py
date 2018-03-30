import re

def validate_subject(string):
    print("validate string = ")
    print (string)
    if re.match(r'^[a-zA-Z åäöÅÄÖ 0-9+:0-9+]{1,30}*$', string):    
        print(True)
        return True
    else:
        print(False)
        return False