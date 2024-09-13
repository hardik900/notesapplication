const data = [
    {
      "query": "SHOW DATABASES",
      "queryDesc": "This query is used to show the number of databases."
    },
    {
      "query": "SHOW TABLES",
      "queryDesc": "This query is used to show the number of tables."
    },
    {
      "query": "USE AFTAB_SHOP",
      "queryDesc": "This query is used to select the database to which you want to work."
    },
    {
      "query": "CREATE DATABASE AFTAB_SHOP",
      "queryDesc": "This query is used to create a database."
    },
    {
      "query": "CREATE TABLE CUSTOMER(id INT, name VARCHAR(255), address VARCHAR(255))",
      "queryDesc": "This query is used to create a table with columns (attributes). Note: We can't create a table without defining column names."
    },
    {
      "query": "DESC CUSTOMER",
      "queryDesc": "This query is used to show the schema of the table."
    },
    {
      "query": "INSERT INTO CUSTOMER VALUES(2, 'Samuel', 'Thane West')",
      "queryDesc": "This query is used to insert a single entry (row) into the table."
    },
    {
      "query": "INSERT INTO CUSTOMER VALUES(2, 'Samuel', 'Thane West'), (3, 'Anderson', 'Thane East'), (4, 'Roy', 'Airoli')",
      "queryDesc": "This query is used to insert multiple entries (rows) into the table. For each insertion in a row, we have to start with an open parenthesis and close it, separated by commas."
    },
    {
      "query": "INSERT INTO CUSTOMER(id, name) VALUES(5, 'Tanu')",
      "queryDesc": "This query is used to insert values into specific columns (attributes) of the table."
    },
    {
      "query": "SELECT name FROM CUSTOMER",
      "queryDesc": "This query is used to show all the names from the given table."
    },
    {
      "query": "SELECT * FROM CUSTOMER",
      "queryDesc": "This query is used to show all the rows from the given table."
    }
  ]
  

  export default data;