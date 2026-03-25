# Build a simple API client that:

# Uses a while loop for a menu:
# Option 1: Fetch a post by ID (GET)
# Option 2: Create a new post (POST)
# Option 3: Exit
# For GET:
# Ask user for post ID
# Make GET request
# Display post data or error
# For POST:
# Ask user for title and body
# Make POST request
# Display created post or error
# Use try/except for all HTTP operations
# Use functions to organize code
import requests

while True:
    userInput = int(input(f"""
                Choose any one of below :
                    # Option 1: Fetch a post by ID (GET)
                    # Option 2: Create a new post (POST)
                    # Option 3: Exit
                      
                    Enter(1 || 2 || 3)
                """))
    
    if(userInput == 1):
        try:
            id = int(input("Please enter post id : "))
            params = {"postId":10}
            response = requests.get(f"https://jsonplaceholder.typicode.com/posts?{id}")
            data = response.json()
            print(f"Comments fetched successfully for post {id}: ")
            print(data)
        except requests.exceptions as e:
            print("Something went wrong: ", e)

    if(userInput == 2):
        try:
            title = input("Please enter post title : ")
            body = input("Please enter post body : ")
            data = {"title":title,"body":body,"userId":101}

            response = requests.post("https://jsonplaceholder.typicode.com/posts",json=data)
            data = response.json()

            print("Post created successfully: ")
            print(data)
        except requests.exceptions as e:
            print("Something went wrong: ", e)
    if(userInput == 3):
        print("Ending the session...")
        break