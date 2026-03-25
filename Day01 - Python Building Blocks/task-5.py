# Task 5: Arithmetic Operators
# Build a simple math calculator that:

# Takes two numbers from the user

# Performs and displays all arithmetic operations:

# Addition
# Subtraction
# Multiplication
# Division (regular)
# Floor division
# Modulo (remainder)
# Exponentiation
# Format the output clearly, showing the operation and result

num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

print("\n" + "=" * 30)
print(f"Math Operations")
print("=" * 30 + "\n")


print(f"Addition of {num1} and {num2} : {num1 + num2}")
print(f"Subtraction of {num1} and {num2} : {num1 - num2}")
print(f"Multiplication of {num1} and {num2} : {num1 * num2}")
print(f"Division of {num1} and {num2} : {num1 / num2:.2f}")
print(f"Floor Division of {num1} and {num2} : {num1 // num2}")
print(f"Modulo of {num1} and {num2} : {num1 % num2}")
print(f"Exponentiation of {num1} and {num2} : {num1 ** num2}")

