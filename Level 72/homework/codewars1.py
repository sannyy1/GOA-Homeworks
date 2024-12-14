def even_numbers(arr, n):
    even_numbers = [num for num in arr if num % 2 == 0]
    
    return even_numbers[-n:]s