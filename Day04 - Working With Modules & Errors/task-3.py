def analyze_file():
    filename = input("Enter the filename: ")
    file = None
    try:
        # Attempt to open and read the file
        file = open(filename, 'r', encoding='utf-8')
        content = file.read()
        
        # Calculate statistics
        num_lines = len(content.splitlines())
        num_words = len(content.split())
        num_chars = len(content)
        
        # Display results
        print(f"\nFile Analysis for '{filename}':")
        print(f"Lines: {num_lines}")
        print(f"Words: {num_words}")
        print(f"Characters: {num_chars}")
        print(f"content: {content}")
        
    except FileNotFoundError:
        print(f"Error: The file '{filename}' was not found.")
    except PermissionError:
        print(f"Error: Permission denied to read the file '{filename}'.")
    except IOError as e:
        print(f"Error: An I/O error occurred while reading the file: {e}")
    except Exception as e:
        print(f"Error: An unexpected error occurred: {e}")
    finally:
        # Ensure the file is properly closed
        if file and not file.closed:
            file.close()
            print("File has been closed.")

# Run the program
analyze_file()   