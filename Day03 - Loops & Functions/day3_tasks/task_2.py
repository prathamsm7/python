list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

squares = []
evenNum = []

for i in list:
    squares.append(i * i)

squares2 = [i*i for i in list]

for i in list:
    if(i % 2 == 0):
        evenNum.append(i)

evenNum2 = [i for i in list if i%2 == 0]

nultipliedList = []
for i in list:
    if(i > 5):
        nultipliedList.append(i * 2)
nultipliedList2 = [i * 2 for i in list if i > 5]

stringList = []
for i in list:
        stringList.append(str(i))
stringList2 = [str(i) for i in list]

tuples = []
for i in list:
        tuples.append((i,i*i))
tuples2 = [(i,i*i) for i in list]


print("squares",squares2)
print("evenNum",evenNum2)
print("nultipliedList",nultipliedList2)
print("stringList",stringList2)
print("tuples",tuples2)
