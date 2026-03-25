# Write a program that:

# Makes a GET request to: https://jsonplaceholder.typicode.com/posts/1
# Handles exceptions:
# Connection errors
# Timeout errors
# HTTP errors
# If successful:
# Parse the JSON response
# Display the post title and body
# Extract and display the user ID
# Use appropriate error messages for each error type
import requests

try:
    response = requests.get("https://jsonplaceholder.typicode.com/posts/1")
    response.raise_for_status()
except requests.exceptions.ConnectionError as e:
    print(f"Connection Error:  {e}")
except requests.exceptions.HTTPError as e:
    print(f" HTTP Error:  {e}")
except requests.exceptions.Timeout as e:
    print(f"Request Timeout : {e}")
else:
    data = response.json()

    print("user id" + " " * 10 ,data["userId"])
    print("title" + " " * 10 ,data["title"])
    print("body" + " " * 10 ,data["body"])


