list = []

for i in range(5):
    list.append(int(input("Enter a number: ")))

print(list)
print("\n \n")

min = list[0]
max = list[0]
sum = 0

for num in list:
    if num < min:
        min = num
    if num > max:
        max = num
    sum += num
        
average = sum/len(list)
print("Min: ", min)
print("Max: ", max)
print("Sum: ", sum)
print("Average: ", average)

print("\n \n")

categories = {
    "High": [],
    "Medium": [],
    "Low": []
}
for num in list:
    if num >= 80:
        categories["High"].append(num)
    elif num >= 50:
        categories["Medium"].append(num)
    else:
        categories["Low"].append(num)

print("\n \n")

print(f"High :  {categories['High']}")
print(f"Medium :  {categories['Medium']}")
print(f"Low :  {categories['Low']}")