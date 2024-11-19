let questions = [
    {
      numb: 1,
      question: "What is the purpose of the SQL command GRANT?",
      answer: "To provide specific privileges to users",
      options: [
        "To revoke user privileges",
        "To create a backup of the database",
        "To check database integrity",
        "To provide specific privileges to users"
      ]
    },
    {
      numb: 2,
      question: "What is the function of the COMMIT statement in SQL?",
      answer: "To save all changes made during the current transaction",
      options: [
        "To remove a table from the database",
        "To save all changes made during the current transaction",
        "To undo changes made during the current transaction",
        "To close the database connection"
      ]
    },
    {
      numb: 3,
      question: "What is the purpose of a foreign key in SQL?",
      answer: "To establish a relationship between two tables",
      options: [
        "To enforce data integrity within a table",
        "To establish a relationship between two tables",
        "To create an index for faster queries",
        "To uniquely identify each row in a table"
      ]
    },
    {
      numb: 4,
      question: "Which of the following SQL statements is used to create a view?",
      answer: "CREATE VIEW",
      options: [
        "CREATE TABLE",
        "CREATE INDEX",
        "CREATE SCHEMA",
        "CREATE VIEW"
      ]
    },
    {
      numb: 5,
      question: "What does the ACID property 'Durability' ensure in a database?",
      answer: "That changes remain permanent after a transaction is committed",
      options: [
        "That the database can recover from failures",
        "That changes remain permanent after a transaction is committed",
        "That data is consistent across all replicas",
        "That transactions occur in isolation"
      ]
    },
    {
      numb: 6,
      question: "Which of the following is a valid aggregate function in SQL?",
      answer: "AVG()",
      options: [
        "CONCAT()",
        "LENGTH()",
        "AVG()",
        "TRIM()"
      ]
    },
    {
      numb: 7,
      question: "What is the purpose of the ROW_NUMBER() function in SQL?",
      answer: "To assign a unique sequential integer to rows within a result set",
      options: [
        "To identify duplicate rows in a table",
        "To calculate the row count of a table",
        "To rank rows based on a specific column",
        "To assign a unique sequential integer to rows within a result set"
      ]
    },
    {
      numb: 8,
      question: "Which of the following SQL constraints ensures that no two rows have the same value in a specific column?",
      answer: "UNIQUE",
      options: [
        "NOT NULL",
        "DEFAULT",
        "CHECK",
        "UNIQUE"
      ]
    },
    {
      numb: 9,
      question: "Which SQL function is used to return the current system date and time?",
      answer: "NOW()",
      options: [
        "NOW()",
        "SYSDATE()",
        "GETDATE()",
        "CURDATE()"
      ]
    },
    {
      numb: 10,
      question: "Which of the following is true about the UNION operator in SQL?",
      answer: "It combines the results of two queries and removes duplicates by default",
      options: [
        "It creates a new table with the combined data",
        "It combines the results of two queries and removes duplicates by default",
        "It appends data from one table to another",
        "It combines rows only if they exist in both queries"
      ]
    },
    {
      numb: 11,
      question: "What is a trigger in SQL?",
      answer: "A set of SQL statements that automatically execute in response to specific events",
      options: [
        "A temporary table used for complex queries",
        "A key to establish relationships between tables",
        "A tool to backup data",
        "A set of SQL statements that automatically execute in response to specific events"
      ]
    },
    {
      numb: 12,
      question: "Which of the following keywords is used to fetch only unique records?",
      answer: "DISTINCT",
      options: [
        "UNIQUE",
        "FILTER",
        "DISTINCT",
        "LIMIT"
      ]
    },
    {
      numb: 13,
      question: "Which command is used to modify an existing column in a table?",
      answer: "ALTER TABLE",
      options: [
        "ALTER TABLE",
        "MODIFY TABLE",
        "CHANGE COLUMN",
        "UPDATE TABLE"
      ]
    },
    {
      numb: 14,
      question: "What is the purpose of the SQL INDEX?",
      answer: "To improve the performance of database queries",
      options: [
        "To secure access to the database",
        "To define relationships between tables",
        "To improve the performance of database queries",
        "To store backup data"
      ]
    },
    {
      numb: 15,
      question: "Which of the following SQL functions calculates the total number of rows in a query result?",
      answer: "COUNT()",
      options: [
        "ROWS()",
        "SUM()",
        "TOTAL()",
        "COUNT()"
      ]
    },
    {
      numb: 16,
      question: "What is the purpose of the HAVING clause in SQL?",
      answer: "To filter grouped data based on a condition",
      options: [
        "To rank rows within a group",
        "To filter rows before grouping",
        "To join tables based on a condition",
        "To filter grouped data based on a condition"
      ]
    },
    {
      numb: 17,
      question: "What is a stored procedure in SQL?",
      answer: "A precompiled collection of SQL statements stored in the database",
      options: [
        "A mechanism for joining multiple tables",
        "A function to retrieve current system settings",
        "A temporary table used for complex queries",
        "A precompiled collection of SQL statements stored in the database"
      ]
    },
    {
      numb: 18,
      question: "What is the purpose of the SQL ROLLBACK command?",
      answer: "To undo all changes made during the current transaction",
      options: [
        "To commit changes to the database",
        "To undo all changes made during the current transaction",
        "To close the current database session",
        "To remove all records from a table"
      ]
    },
    {
      numb: 19,
      question: "What does the keyword DEFAULT do in SQL?",
      answer: "Sets a default value for a column when no value is specified",
      options: [
        "Creates a default database structure",
        "Defines a default user privilege",
        "Specifies default indexing behavior",
        "Sets a default value for a column when no value is specified"
      ]
    },
    {
      numb: 20,
      question: "What does the SQL FULL OUTER JOIN return?",
      answer: "All records when there is a match in either table",
      options: [
        "All records only from the right table",
        "All records only from the left table",
        "All records when there is a match in either table",
        "Only records matching in both tables"
      ]
    }
  ];