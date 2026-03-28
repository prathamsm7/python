# ### **Task 3: CSV File Operations**

# Create a program that:
# 1. Writes a CSV file `products.csv` with columns:
#    - Name, Price, Quantity, Category
#    - Include at least 5 products
# 2. Reads the CSV file using `csv.DictReader`
# 3. Displays all products in a formatted way
# 4. Calculates and displays:
#    - Total value (sum of price × quantity)
#    - Average price
#    - Products by category
# 5. Finds the most expensive and cheapest products
import csv

data = [
    ["Name", "Price", "Quantity", "Category"],
    ["Tv",10000,1,"LED"],
    ["Fan",2000,1,"Turbo"],
    ["AC",40000,1,"Invertor"],
    ["Cooler",5000,1,"Supercool"],
    ["Computer",15000,1,"LED"]
]

with open("products.csv","w",newline="") as file:
    writer = csv.writer(file)
    writer.writerows(data)

total_value = 0
prices = []
categories = {}
most_expensive = None
cheapest = None

with open("products.csv","r") as file:
    reader = csv.DictReader(file)

    for product in reader:
        name = product["Name"]
        price = int(product["Price"])
        quantity = int(product["Quantity"])
        category = product["Category"]
        value = price * quantity

        print(f"{name}: {price} * {quantity} = {value}")
        total_value += value
        prices.append(price)

        if category not in categories:
            categories[category] = []
        categories[category].append(name)

        if most_expensive is None or  price > int(most_expensive["Price"]):
            most_expensive = product

        if cheapest is None or  price < int(cheapest["Price"]):
            cheapest = product

print(f"Total Value: {total_value:.2f}")
print(f"Avg price: {sum(prices) / len(prices)}")
print(f"Categories: {categories}")
print(f"Most Expensive: {most_expensive}")
print(f"Cheapest: {cheapest}")
        


