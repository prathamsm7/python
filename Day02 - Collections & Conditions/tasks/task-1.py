
age = int(input("Enter you age :"))

if age > 0 and age <= 12:
    print("You are a child")
elif age > 12 and age <= 19:
    print("You are a teenager")
elif age > 20 and age <= 64:
    print("You are a Adult")
elif age > 65:
    print("You are a senior citizon")


hasLicence = input("Do you have driving licence ? :") == "yes"

if age >= 65:
    print("Eligible for senior Discount")
elif age >= 21:
    print("You are a teenager and can Drink")
elif age >= 18 and hasLicence :
    print("You can drive")
elif age >= 18:
    print("You can vote")
else:
    print("You are teen must focus on your study")
