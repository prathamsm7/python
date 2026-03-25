
guess = 99
count = 0

while True:
    inpt = input("Guess the number between 1 to 100: ")
    if(inpt == "quit"):
        break
    userInput = int(inpt)

    count += 1

    if userInput == guess:
        print("Correct Guess")
        print("You guessed it in", count, "attempts")
        break
    elif userInput < guess:
        print("Too low" +   "\n")
    else:
        print("Too high" + "\n")