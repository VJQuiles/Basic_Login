# Basic Login Overview

Welcome to a very simple login system. Here you will be able to create a user, and leveraging bcrypt to hash our given password. You can then log in, triggering the bcrypt comparison, and receive your very own jwt to see how pretty it is. 

## How to run

I'm going to recommend the use of Postman. Use the following routes

/api/users/register - create a user
/api/users/login - login as user

I also created sample data that you can use. You would then post the data to each route to check functionality. 

## Reflection

The success of this project is largely due to miunderstanding the activity in our first lesson. Originally it wanted us to salt and comapre passwords in a single file. Instead I read that as doing what we had to do here, so I did a lot of the legwork without even knowing it. I also found collaboration to be very powerful, because when we had time alloted for the lab, i opted to ask some class mates for some help getting the activity done(turns out my problems stemmed from not having my connection set up, because i misunderstood the assignment, and didn't deduce that). When my classmate James saw my screen, he noticed i was going about it in the imlpementation style of this lab. So he and Dennis were very helpful in finding out the problem with the connection. 

Before taking this course, I was already considering things like authentication and authorization, mostly contemplating how to protect my online information, and this has definitely given me a lot to chew on when considering how to best safeguard myself, as well as understanding how the sausage is made a little. 

## Resources

Course materials on bcrypt, salting, comparing, and creating jwts.

James and Dennis also helped as mentioned above, as well as Karl helping to explain what we are doing conceptually to really lock it in place. Very grateful for my team