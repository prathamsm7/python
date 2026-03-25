list = [5, 2, 8, 1, 9, 3, 7, 4, 6, 2]
print("List: ", list)


min = list[0]
max = list[0]

for item in list:
    if item < min:
        min = item
    if item > max:
        max = item

count = list.count(2)

for item in list:
    if item == 2:
        list.remove(item)

sortedList = sorted(list)
list.reverse()
print("Reversed List: ",list)

list.insert(3,10)
print("List: ", list)

copy = list.copy()

print("Min: ", min)
print("Max: ", max)
print("Count: ", count)
print("List: ", list)

print("Sorted List: ", sortedList)
print("List: ", list)
print("Copy: ", copy)

list.clear()
print("List: ", list)

