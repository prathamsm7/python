
with open("todo.txt","w") as file:
    taskList = ["Wake up early","Hit the gym","Take a bath" ,"Check the email updates","Start work",]
    for index,task in enumerate(taskList,start=1):
        file.write(f"{index}. {task} \n")

with open("todo.txt","r") as file:
        lines = file.readlines()

        for line in lines:
            print(line)

userInput = input("Please add new todo: ")
with open("todo.txt","a") as file:
    file.write(f"{len(lines) + 1}. {userInput} \n")

with open("todo.txt","r") as file:
        content = file.read()
        print(content)
        print("total todos: ", len(content.splitlines()))