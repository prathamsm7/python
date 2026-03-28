# ### **Task 2: Class with Calculations**

# Create a `BankAccount` class with:
# 1. `__init__` method with: account_number, owner_name, initial_balance (default 0)
# 2. Attributes: account_number, owner_name, balance
# 3. Methods:
#    - `deposit(amount)` - adds to balance
#    - `withdraw(amount)` - subtracts from balance (check if sufficient funds)
#    - `get_balance()` - returns current balance
#    - `transfer(other_account, amount)` - transfers money to another account

# Create 2 accounts, perform transactions, and display results.

class BankAccount:
    def __init__(self,account_number, owner_name, initial_balance =0):
        self.account_number = account_number
        self.owner_name = owner_name
        self.balance = initial_balance
    
    def __str__(self):
        return f"Account[{self.account_number}]: {self.owner_name} | Balance: {self.balance}"


    def deposit(self,amount):
        self.balance += amount 
        return f"Updated balance: {self.balance}"
    
    def withdraw(self,amount):
        current_balance = self.balance
        if(current_balance >= amount):
            self.balance -= amount
            return True
        else:
            print("Not enough balance to withdrawn.")
            return False
    
    def get_balance(self):
        return f"Current Balance is: {self.balance}"
    
    def transfer(self,other_account, amount):
        current_balance = self.balance
        if(current_balance >= amount):
            other_account.balance += amount
            self.balance -= amount
            
            print(f"Updated Balance of Your a/c: {self.balance}")
            print(f"Updated Balance of recepeint a/c : {other_account.balance}")
            
            return True
        else:
            print("Not enough balance to transfer.")
            return False
        

ac1 = BankAccount(123,"pratham",500)
ac2 = BankAccount(999,"parth",500)

print(ac1)
print(ac2)

ac1.deposit(5000)
ac1.withdraw(1000)
ac1.get_balance()
ac1.transfer(ac2,1000)