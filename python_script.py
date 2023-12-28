# Python Script

# Data Preparation
persons = [
    {"name": "Shubh", "age": 23, "city": "Bhopal"},
    {"name": "Anushka", "age": 22, "city": "Indore"},
    {"name": "Bhuvi", "age": 17, "city": "Delhi"},
    {"name": "Kartik", "age": 27, "city": "Delhi"},
    {"name": "Satakshi", "age": 26, "city": "Bhopal"},
    {"name": "Ram", "age": 30, "city": "Bhopal"}
]

# Filtering
persons = [person for person in persons if person["age"] <= 25]

# Sorting
persons.sort(key=lambda x: x["city"])

# Output
for person in persons:
    print(f"Name: {person['name']}, Age: {person['age']}, City: {person['city']}")
