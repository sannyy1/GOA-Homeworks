def sum_of_n(n):
    result = []
    for i in range(abs(n) + 1):
        if n > 0:
            result.append(i * (i + 1) // 2)
        else:
            result.append(-(i * (i + 1) // 2))
    return result