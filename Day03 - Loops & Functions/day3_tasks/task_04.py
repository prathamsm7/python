# Takes a list of numbers
# Returns a dictionary with:
# "sum": sum of all numbers
# "average": average of numbers
# "max": maximum value
# "min": minimum value
# "count": number of items
# "evens": count of even numbers
# "odds": count of odd numbers
# Test with: [12, 45, 8, 23, 56, 9, 34, 67, 3, 91]

def analyze_numbers(numbers):
    sumAll = sum(numbers)
    average = sumAll / len(numbers)
    maximum = max(numbers)
    minimum = min(numbers)
    count = len(numbers)
    evens = len([num for num in numbers if (num % 2 == 0)])
    odds = len([num for num in numbers if (num % 2 != 0)])

    return sumAll,average,maximum,minimum,count,evens,odds

sumAll,average,maximum,minimum,count,evens,odds = analyze_numbers([12, 45, 8, 23, 56, 9, 34, 67, 3, 91])
print("sumAll",sumAll)
print("average",average)
print("maximum",maximum)
print("minimum",minimum)
print("count",count)
print("evens",evens)
print("odds",odds)

