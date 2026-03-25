while True:
    try:
        firstNum = int(input("Enter First Number : "))
        secondNum = int(input("Enter Second Number : "))

        add = firstNum + secondNum
        minus = firstNum - secondNum
        multiply = firstNum * secondNum


        try:
            devide = firstNum / secondNum
        except:
            devide = "Cannot devide by zero"

        print("add",add)
        print("minus",minus)
        print("multiple",multiply)
        print("devide",devide)

    except ValueError:
        print("Not a Valid Number")
        
     # Loop control
    choice = input("\nDo you want to continue? (y/n): ").lower()
    if choice != 'y':
        print("Exiting program...")
        break
