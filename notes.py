# variables
a = 1
b = 2

# functions
def sum(x, y):
    return x + y


# printing
print("hello world")

# lists
list = []
list.append("kana") # list would be: ["kana"]

# lists
greetings = [
    'Hello',
    'Hi',
    'Bye',
    'Goodbye'
]

# iterate over every single one
for greeting in greetings:
    print(greeting)

"""
prints:
    Hello
    Hi
    Bye
    Goodbye
"""

# add "!" to every greeting
for i in range(len(greetings)):
    greetings[i] = greetings[i] + "!"
   

print(greetings) # greetings is now ["Hello!", "Hi!", ...]