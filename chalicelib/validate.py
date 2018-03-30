import re

def validate_subject(string):
    print("validate string = ")
    print (string)
    regex = r"^[a-zA-Z0-9.! åäöÅÄÖ]{1,30}$"
    check = re.match(regex, string)
    
    if check:
        return True
    else:
        return False