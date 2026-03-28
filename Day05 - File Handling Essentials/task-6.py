# ### **Task 6: File Manager**

# Build a simple file manager that:
# 1. Shows a menu:
#    - Create new text file
#    - Read existing file
#    - Append to file
#    - Delete file
#    - List all .txt files in directory
#    - Exit
# 2. Implements each option with proper error handling
# 3. Uses functions to organize code
# 4. Validates file existence before operations
# 5. Provides user-friendly messages

while True:
    print("Please select from option below: ")
    choise = int(input(f"""
            Press : 
                1: Create new text file
                2: Read existing file
                3: Append to file
                4: Delete file
                5: List all .txt files in directory
                6: Exit
    """))

    print(f"User choosen: {choise} option")

    if(choise == 6):
        print("Disconnecting")
        break
    if(choise == 2):
        fileName = "employees.txt" 
        with open(fileName,"r") as file:
            lines = file.readlines()

            for line in lines:
                print(line)

    

