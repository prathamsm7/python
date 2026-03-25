book = {
    "title": "Attention is All You Need",
    "author": "Sutskever et al.",
    "year": "2017",
    "pages": "1024",
    "rating": "4.5"
}

print("Original Book: ", book)

for key in book:
    print(f"{key}: {book[key]}")

book["rating"] = "4.6"
print("Updated Rating: ", book)

book["genre"] = "Machine Learning"
print("Added Genre: ", book)

if("publisher" not in book):
    book["publisher"] = "Unknown"

print("Added Publisher: ", book)

book.pop("year")
print("Removed Year: ", book)




