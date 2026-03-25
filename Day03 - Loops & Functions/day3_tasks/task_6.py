# Defines a function process_scores(scores) that:
# Takes a list of scores (0-100)
# Uses list comprehension to calculate letter grades
# Returns a list of tuples: (score, grade)
# Uses a while loop to collect scores from user (until they type "done")
# Validates that scores are between 0-100
# Calls the function and displays results
# Uses lambda to find the highest score
# Displays statistics (average, max, min)


def process_scores(arr):
    tupels = []
    for num in arr:
        if(num >= 90):
            tupels.append((num,"A"))
        elif(num >= 80):
            tupels.append((num,"B"))
        elif(num >= 70):
            tupels.append((num,"C"))
        elif(num >= 60):
            tupels.append((num,"D"))
        elif(num >= 50):
            tupels.append((num,"E"))
        else:
            tupels.append((num,"F"))
    
    print("tupels",tupels)

    maximum = lambda x: max(x)
    print("maximum",maximum(arr))

    minimum = lambda x: min(x)
    print("minimum",minimum(arr))

    average = lambda x: sum(x)/len(x)
    print("average",average(arr))

scores = []
while True:
    score = input("Enter a score (0-100) or 'done' to finish: ")
    if score == "done":
        process_scores(scores)
        break

    score = int(score)
    if score < 0 or score > 100:
        print("invalid input")
    else:
        scores.append(score)