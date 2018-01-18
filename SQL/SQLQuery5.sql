SELECT MAX(PRODUCT_PRICE) FROM ORDERS;

SELECT DISTINCT PRODUCT_NAME, PRODUCT_PRICE FROM ORDERS WHERE PRODUCT_PRICE = (SELECT MAX(PRODUCT_PRICE) FROM ORDERS);

SELECT PRODUCT_NAME, SUM(AMOUNT) FROM ORDERS GROUP BY PRODUCT_NAME;

SELECT AVG(AMOUNT * PRODUCT_PRICE) FROM ORDERS WHERE PRODUCT_NAME = 'Lenovo Flex 10';

SELECT CUSTOMERS.FIRSTNAME, CUSTOMERS.LASTNAME FROM CUSTOMERS WHERE CUSTOMERS.ID = (SELECT ORDERS.ID_CUSTOMER FROM ORDERS WHERE ORDERS.AMOUNT * ORDERS.PRODUCT_PRICE = (SELECT MAX(ORDERS.AMOUNT * ORDERS.PRODUCT_PRICE) FROM ORDERS WHERE ORDERS.ID_CUSTOMER IS NOT NULL ));

SELECT CUSTOMERS.FIRSTNAME, CUSTOMERS.LASTNAME FROM CUSTOMERS WHERE CUSTOMERS.ID IN (SELECT ORD.IDCUSTOMER FROM (SELECT ORDERS.ID_CUSTOMER AS IDCUSTOMER, SUM(AMOUNT * PRODUCT_PRICE) AS PRICE FROM ORDERS GROUP BY ORDERS.ID_CUSTOMER) ORD	WHERE ORD.PRICE > (SELECT AVG(AMOUNT * PRODUCT_PRICE) FROM ORDERS));

SELECT CUSTOMERS.FIRSTNAME, CUSTOMERS.LASTNAME FROM CUSTOMERS WHERE CUSTOMERS.ID IN (SELECT ORDERS.ID_CUSTOMER FROM ORDERS WHERE ORDERS.AMOUNT = (SELECT MAX(AMOUNT) FROM ORDERS WHERE ID_CUSTOMER IS NOT NULL));

SELECT CUSTOMERS.FIRSTNAME, CUSTOMERS.LASTNAME FROM CUSTOMERS WHERE NOT EXISTS (SELECT * FROM ORDERS WHERE ORDERS.ID_CUSTOMER = CUSTOMERS.ID);

SELECT PRODUCT_NAME, SUM(AMOUNT) FROM ORDERS GROUP BY PRODUCT_NAME HAVING SUM(AMOUNT) > 1;

SELECT CUSTOMERS.LASTNAME, (SELECT COUNT(*) FROM ORDERS WHERE ORDERS.ID_CUSTOMER = CUSTOMERS.ID) FROM CUSTOMERS;