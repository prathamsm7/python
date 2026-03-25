def calculate_area(len,wid):
    return len * wid

area = calculate_area(5,10)

def is_even(number):
    return (number % 2 == 0)
even = is_even(10)

def get_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    elif score >= 50:
        return "E"
    else:
        return "F"

grade = get_grade(75)


def reverse_string(text):
    text = list(text)
    i = 0
    j = len(text) - 1

    while(i < j):
        temp = text[i]
        text[i] = text[j]
        text[j] = temp
        i += 1
        j -= 1
    
    return "".join(text)

print("reversed str => " , reverse_string("hello"))

def count_vowels(str):
    vow = "aeiouAEIOU"
    count = 0 

    for char in str:
        if(char in vow):
            count += 1
    
    return count

def count_vowels2(str):
    return sum(1 for char in str if char.lower() in "aeiou")


print("count_vowels",count_vowels2("hello"))