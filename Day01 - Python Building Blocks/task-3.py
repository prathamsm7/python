# Task 3: User Input and Type Conversion
# Write a program that:

# Asks the user for their first name
# Asks for their last name
# Asks for their birth year (as a number)
# Calculates their age (assume current year is 2024)
# Asks for their favorite number
# Displays a personalized message that includes:
# Full name (first + last)
# Age
# Their favorite number multiplied by 2
# Handle the type conversions properly!


first_name = input("Enter your first name: ")
last_name = input("Enter your last name: ")
birth_year = int(input("Enter your birth year: "))
fav_number = int(input("Enter your favorite number: "))

age = 2024 - birth_year
fav_number *= 2

print("\n" + "=" * 30)
print(f"Personal Information")
print("=" * 30 + "\n")

print(f"Full Name: {first_name} {last_name}")
print(f"Age: {age}")
print(f"Favorite Number: {fav_number}")