"""
ChatGPT correction (https://chat.openai.com/c/66ea1d07-d04e-4d17-80d4-d8f620eb2cd3):
User
In a DS&A course, I was told to create a function that reverses a string. Rate my solution:
def reverse_string(string):
  reversed_string = []

  for character in range(len(string)-1, -1, -1):
    reversed_string.append(string[character])

  return str(reversed_string)
  
ChatGPT
Your function is mostly correct, but it has a minor issue. It correctly appends characters from the input string in reverse order to the reversed_string list. However, the final step of converting this list to a string using the str() function will not give you the expected result. Instead, it will give a string representation of the list, including the square brackets and commas.

Here is the corrected version of your function:

python
Copy code
def reverse_string(string):
  reversed_string = []

  for character in range(len(string)-1, -1, -1):
    reversed_string.append(string[character])

  return ''.join(reversed_string)
In this corrected version, ''.join(reversed_string) is used instead of str(reversed_string). The join() method concatenates all the elements in the list into a new string, using the string that join() was called on as a separator. In this case, we're using an empty string as the separator, so there will be no characters between the elements in the final string.

That being said, there is a simpler and more Pythonic way to reverse a string:

python
Copy code
def reverse_string(string):
    return string[::-1]
The [::-1] slicing operation effectively reverses the string.
"""

def reverse_string(string):
  reversed_string = []

  for character in range(len(string)-1, -1, -1):
    reversed_string.append(string[character])

  return str(reversed_string)


if __name__ == "__main__":
  test = reverse_string("hola")
  print(test)
