# Create a `Book` class with:
# 1. `__init__` method that takes: title, author, year, pages
# 2. Attributes: title, author, year, pages, is_read (default False)
# 3. Methods:
#    - `read()` - sets is_read to True
#    - `get_info()` - returns formatted string with book details
#    - `is_old()` - returns True if book is older than 20 years

# Create 3 book objects and test all methods.
import datetime

class Book:
    def __init__(self,title,author,year,pages,is_read=False):
        self.title = title
        self.year = year
        self.author=author
        self.pages = pages
        self.is_read = is_read

    def read(self):
        self.is_read = True
        return f"reading complete for {self.title}"
    
    def get_info(self):
        return f"The {self.title} is writeen by {self.author} in {self.year} have a {self.pages} of pages."
    
    def is_old(self):
        current_year = datetime.datetime.today().year

        if((current_year - self.year) > 20):
            return True
        else:
            return False
    
book1 = Book("Gen Ai","alex",2017,500)
book2 = Book("ML","Bob",1980,357)
book3 = Book("AI","Tom",2000,198)

print(book2.get_info())
print(book2.is_old())
print(book2.read())
print(book2.is_read)