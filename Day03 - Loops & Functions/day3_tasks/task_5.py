# Use lambda functions to:

# Create a lambda that doubles a number
# Create a lambda that checks if a number is positive
# Use map() with lambda to convert [1, 2, 3, 4, 5] to [2, 4, 6, 8, 10]
# Use filter() with lambda to get only positive numbers from [-2, -1, 0, 1, 2, 3]
# Use sorted() with lambda to sort ["apple", "banana", "cherry"] by length
# Display all results.

double = lambda x: x * 2

is_positive = lambda x: x > 0
double_map = list(map(lambda x: x * 2,[1, 2, 3, 4, 5]))
positive_nums = list(filter(lambda x: x > 0,[-2, -1, 0, 1, 2, 3]))

words = ["apple", "banana", "cherry","ab"]
sort_len = sorted(words,key=lambda word : len(word))

print("double",double(5))
print("is_positive",is_positive(-5))
print("double_map",double_map)
print("positive_nums",positive_nums)
print("sort_len",sort_len)