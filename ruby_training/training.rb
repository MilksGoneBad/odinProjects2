done = false
i = 0
things = []
while done == false
things[i] = gets.chomp
if things[i] == ""
    done = true
    end
i = i + 1
end

puts things.sort
