# CLI Application

Created repository with homework — CLI application.

## Description

This CLI application allows you to manage contacts. It enables adding, removing, displaying, and retrieving contacts by ID.

## Installation

To install the necessary dependencies, run the following command:

```sh
npm install
```

# Usage

Aby uruchomić aplikację, użyj poniższych poleceń:

# Display all contacts

```sh
node index.js --action list
```

# Get contact by ID

```sh
node index.js --action get --id <id>
```

# Add a new contact

```sh
node index.js --action add --name "John Doe" --email "john.doe@example.com" --phone "123-456-7890"
```

# Remove contact by ID

```sh
node index.js --action remove --id <id>
```

# Options

--action <type>: Type of action to perform (list, get, add, remove).  
--id <type>: Contact ID (required for get and remove actions).  
--name <type>: Contact name (required for add action).  
--email <type>: Contact email (required for add action).  
--phone <type>: Contact phone (required for add action).

# Author

[Anna Ulanska]```
