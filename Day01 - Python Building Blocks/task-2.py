# Task 2: f-strings Practice
# Create a script that:

# Stores the following information about a product:

# Product name: "Wireless Mouse"
# Price: 29.99
# Quantity: 5
# Discount percentage: 10
# Calculate:

# Total before discount (price × quantity)
# Discount amount (total × discount percentage / 100)
# Final total after discount
# Display a formatted receipt using f-strings that shows:

# Product name
# Unit price
# Quantity
# Subtotal
# Discount percentage and amount
# Final total
# Make it look professional with proper formatting!


product_name = "Wireless Mouse"
price = 29.99
quantity = 5
discount_percentage = 10

total = price * quantity
discount = (total * discount_percentage) / 100
final_total = total - discount

print("\n" + "=" * 30)
print(f"Receipt")
print("=" * 30 + "\n")

print(f"Product Name: {product_name}")
print(f"Price: {price}")
print(f"Quantity: {quantity}")
print(f"Discount: {discount_percentage}")
print(f"Subtotal: {total}")
print(f"Final Total: {final_total:.2f}")


