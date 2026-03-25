# Write a program that:

# Imports math, random, and datetime modules
# Uses math to calculate:
# Square root of 144
# Area of a circle with radius 5
# Factorial of 5
# Uses random to:
# Generate 5 random integers between 1 and 100
# Pick a random item from a list of colors
# Shuffle a list of numbers
# Uses datetime to:
# Display current date and time
# Calculate date 7 days from now
# Format date as "YYYY-MM-DD"
# Display all results clearly.

import math
import random
import datetime

numSqrt = math.sqrt(144)
numArea = math.pi * (5 ** 2)
numFactorial = math.factorial(5)
numRandom = random.sample(range(1, 101), 5)

colors = ["red","white","blue","pink","orange","green","purple","black","neon","brown"]
randomPick = random.choice(colors)

nums = [1,234,45,57,67,34,46,45,234,12]
shuffleNum = random.shuffle(nums)

# print("numSqrt",numSqrt)
# print("numArea",numArea)
# print("numFactorial",numFactorial)
# print("numRandom",numRandom)
# print("randomPick",randomPick)
# print("shuffleNum",nums)

currentDT = datetime.datetime.now()
afterNDays = currentDT + datetime.timedelta(days=7)
formatteddate = currentDT.strftime("%Y-%m-%d")

print("currentDT",currentDT)
print("afterNDays",afterNDays)
print("formatteddate",formatteddate)


