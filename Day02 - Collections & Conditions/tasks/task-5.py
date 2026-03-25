list = []

for i in range(1,21):
    list.append(i)

print(list)

evenNums = []
muntipleOf3 = []
sum = 0
product = 1

for num in list:
    if num % 2 == 0:
        evenNums.append(num)
    if num % 3 == 0:
        muntipleOf3.append(num)
    sum += num
    product *= num

print(evenNums)
print(muntipleOf3)
print(sum)
print(product)

for index, num in enumerate(list):
    print(f"Index: {index}, Number: {num}")


newList = []
for i in range(10,0,-1):
    newList.append(i)

print(newList)