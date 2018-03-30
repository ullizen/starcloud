import re

def validate_subject(string):
    print("validate string = ")
    print (string)
    if re.match(r'^[a-zA-Z0-9. åäöÅÄÖ]{1,30}*$', string):    
        print(True)
        return True
    else:
        print(False)
        return False