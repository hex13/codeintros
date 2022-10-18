## How to count numbers 

Let's count sum of number from 1 to 10.
Now let's declare variable in which we'll store our sum: {{ snippets.sum|safe }} 
Then let's have some for loop: {{snippets.loop|safe}}
In loop we have to increment our sum: {{ snippets.inc|safe}}
And then when we go out from loop, we can log our sum {{ snippets.log|safe}}
