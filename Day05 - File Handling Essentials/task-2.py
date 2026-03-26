studentsData = [
    {
        "name":"Ajay",
        "age":"20",
        "grades":[20,30,45],
        "email":"Ajay@gmail.com"
    },
    {
        "name":"Vijay",
        "age":"20",
        "grades":[30,40,45],
        "email":"Vijay@gmail.com"
    },
    {
        "name":"Sanjay",
        "age":"20",
        "grades":[22,42,65],
        "email":"Sanjay@gmail.com"
    }
]

import json

with open("students.json","w") as file:
    json.dump(studentsData,file,indent=4)


with open("students.json","r") as file:
    data = json.load(file)
    print("students data: ",data)
    maxAvg = 0
    maxId = None
    for index,s in enumerate(data):
        studentAvg = sum(s["grades"]) / len(s["grades"])
        print(f"{s["name"]}'s Average is: ", studentAvg)
        if(studentAvg > maxAvg):
            maxAvg = studentAvg
            maxId = index
    
    print("Max Average", maxAvg)
    print("Student with max Avg: ", data[maxId])

data[maxId]["gender"] = "male"

with open("students.json","w") as file:
    json.dump(data,file,indent=4)