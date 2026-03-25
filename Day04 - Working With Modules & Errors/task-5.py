# Create a program that:

# 1. Creates a new "post" with this data:
#    - title: "My Test Post"
#    - body: "This is a test post"
#    - userId: 1
# 2. Makes a POST request to: `https://jsonplaceholder.typicode.com/posts`
# 3. Handles all possible errors
# 4. If successful:
#    - Display the created post ID
#    - Display the response status code
#    - Show the complete response data

import requests

try:
    data = {"title": "My Test Post" , "body": "This is a test post", "userId": 1}
    response = requests.post("https://jsonplaceholder.typicode.com/posts",json=data)
    response.raise_for_status()
except requests.exceptions as e :
    print(e) 
else:
    responseData = response.json()

    print("post id", responseData["id"])
    print("status code", response.status_code)
    print("post title", responseData["title"])
    print("post data", responseData["body"])