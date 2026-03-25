# Task 4: Truthy and Falsy Values
# Create a script that tests various values to determine if they're truthy or falsy:

# Test these values:

# 0
# 1
# "" (empty string)
# "hello"
# [] (empty list)
# [1, 2, 3]
# None
# True
# False
# "False" (the string, not the boolean)
# For each value, print:

# The value itself
# Whether it's truthy or falsy
# A brief explanation
# Format your output in a table-like structure using f-strings.

values = [0, 1, "", "hello", [], [1, 2], None, True, False, "False"]

for value in values:
    if value:
        print(f"{value} is truthy")
    else:
        print(f"{value} is falsy")