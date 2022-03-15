print("Let's multiply!")
print("Enter the multiplication family you wish to practice: (1-12)")
x = input()
for a in range(13):
    b = a * int(x)
    print(a, " * ", int(x), " = ", b)
