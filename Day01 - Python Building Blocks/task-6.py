# Task 6: Comparison and Logical Operators
# Write a program that:

# Asks the user for their age

# Asks if they have a driver's license (yes/no)

# Uses comparison and logical operators to determine:

# Can they drive? (age >= 18 AND has license)
# Are they a senior? (age >= 65)
# Are they a teenager? (age >= 13 AND age < 20)
# Can they vote? (age >= 18)
# Display the results in a clear format

# Use logical operators (and, or, not) appropriately! mh05e w1197



age = int(input("Enter your age in years : "))
have_license = input("Do you have a driver's license? (yes/no) : ").lower() == "yes"

print(f"Can you drive ? : {age >= 18 and have_license}")
print(f"Are you senior ? : {age >= 65}")
print(f"Are you teenager ? : {age >= 13 and age < 20}")
print(f"Can you vote ? : {age >= 18}")