# Create sample employee data
employee_data = [
    {
        "name": "Alice Johnson",
        "department": "Engineering",
        "salary": 75000,
        "years_of_experience": 5
    },
    {
        "name": "Bob Smith",
        "department": "Marketing",
        "salary": 55000,
        "years_of_experience": 3
    },
    {
        "name": "Carol Davis",
        "department": "Engineering",
        "salary": 85000,
        "years_of_experience": 8
    },
    {
        "name": "ALex",
        "department": "IT",
        "salary": 55000,
        "years_of_experience": 8
    },
    {
        "name": "John",
        "department": "Product",
        "salary": 95000,
        "years_of_experience": 8
    }
]


import json
with open("employees.json","w") as file:
    json.dump(employee_data,file,indent=4)

departments = {}
most_exp = []
total = 0

with open("employees.json","r") as file:
    data = json.load(file)

    for e in data:
        dep = e["department"]
        if dep not in departments :
            departments[dep] = []
        
        departments[dep].append(e["salary"])

        if e["years_of_experience"] > 5:
            most_exp.append(e)

        total += e["salary"]



with open("employees.txt","a") as file:

    print("Employees with >5 years of experience")
    for emp in most_exp:
        print(emp , "\n")
        file.write(f"{emp} \n")

    print(f"Total payroll: {total}")
    file.write(f"Total payroll: {total} \n")


    for dep in departments:
        avg = sum(departments[dep]) / len(departments[dep])

        print(f"Avg salary of {dep} is: {avg}")
        file.write(f"Avg salary of {dep} is: {avg} \n")

import csv
with open("employees.csv","w") as file:
    fieldnames = ["name","department","salary","years_of_experience"]

    writer = csv.DictWriter(file,fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(most_exp)