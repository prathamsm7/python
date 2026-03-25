# Task 1: Variables and Data Types
# Create a Python script that:

# Stores your personal information in variables:

# Full name (string)
# Age (integer)
# Height in meters (float)
# Favorite programming language (string)
# Years of coding experience (integer)
# Currently learning Python (boolean)
# Display all this information using f-strings in a nicely formatted way

# Use type() to show the data type of each variable

fullname = "Pratham"
age = 26
height = 1.8
programming_lang = "js"
coding_exp = 3
learning_python = True

print("\n" + "=" * 30)
print(f"Personal Information")
print("=" * 30 + "\n")


print(f"{repr(fullname):15} → {type(fullname)}")
print(f"{repr(age):15} → {type(age)}")
print(f"{repr(height):15} → {type(height)}")
print(f"{repr(programming_lang):15} → {type(programming_lang)}")
print(f"{repr(coding_exp):15} → {type(coding_exp)}")
print(f"{repr(learning_python):15} → {type(learning_python)}")