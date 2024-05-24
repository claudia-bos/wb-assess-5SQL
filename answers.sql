-- selecting all customers email addresses from the customer table in alphabetical order

SELECT email FROM customers
ORDER BY email;

-- Write a query that lists the order ids for all orders placed by customers 
-- with the first name Elizabeth and last name Crocker

SELECT id FROM orders
WHERE customer_id = (
    SELECT id FROM customers
    WHERE fname = 'Elizabeth' AND lname = 'Crocker'
);

-- Write a query that gets the total number of cupcakes from unprocessed orders.

SELECT SUM(num_cupcakes) AS sum
FROM orders
WHERE processed = 'f';

-- Write a query that shows the name of each cupcake and the sum of cupcakes ordered for that cupcake type 
-- (for both processed and unprocessed orders), sorted in ascending alphabetical order of cupcake name.
-- The report should show all cupcake types, even if they have not been ordered at all.
    
SELECT c.name, SUM(o.num_cupcakes) AS sum
FROM orders o
LEFT JOIN cupcakes c ON o.cupcake_id = c.id
GROUP BY c.name
ORDER BY c.name;

-- Write a query that shows the email address of each customer and the total number of cupcakes they’ve ordered. 
-- Results should be sorted by total number of cupcakes, in descending order.

SELECT c.email, SUM(o.num_cupcakes) AS total
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.email
ORDER BY total DESC;

-- Write a query that selects the first name, last name and email address of customers who have processed orders of funfetti cupcakes.
--  Even if a customer has multiple outstanding orders of funfetti, their email should only appear once.

SELECT DISTINCT c.fname, c.lname, c.email
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE o.processed = 't' AND o.cupcake_id = 5;
