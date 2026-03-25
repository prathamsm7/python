
# Create a program that:
# 1. Starts with an empty list
# 2. Allows the user to add items (one at a time)
# 3. Shows the current list after each addition
# 4. When user types "done", the program should:
#    - Display the final list
#    - Show the number of items
#    - Show the first and last items
#    - Sort the list and display it
#    - Ask if they want to remove any item
#    - Display the final list

list = []
while True:
    item = input("Enter an item (or 'done' to finish): ")
    if item.lower() == "done":
        break
    list.append(item)
    print(list)

print("\nFinal List:")
print(list)

print(f"Number of items: {len(list)}")
print(f"First item: {list[0]}")
print(f"Last item: {list[-1]}")

list.sort()
print("Sorted List:")
print(list)

remove_item = input("Enter an item to remove: ")
list.remove(remove_item)
print("\nFinal List:")
print(list)
