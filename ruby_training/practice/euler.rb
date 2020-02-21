i = 0
result_array = []

while i < 334
    i = i + 1
    result_array.push(i*3)
    result_array.push(i*5)
end

result_array = result_array.uniq
result_array = result_array.select do |elem|
    elem < 1000
end

puts result_array.inject(0, &:+)