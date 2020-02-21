def fibonacci position
    if position == 1
        return 1
    end
    if position == 2
        return 2
    end
    return fibonacci(position - 1) + fibonacci(position - 2)
end

last_result = 0
fib_array = []
i = 1

while last_result < 4000000
    last_result = fibonacci(i)
    fib_array.push(last_result)
    i = i + 1
end

total = 0

fib_array.each do |n|
    if n.even?
        total = total + n
    end
end

puts total
puts fib_array

