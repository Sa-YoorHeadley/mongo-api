<div align="center">

<h1>Mongo API</h1>
<p>Node JS and Express API with Mongo DB database</p>

</div>

## Description 
This is a Node JS and Express API made to communicate with a Mongo DB database of books. 

<br />

## Server
### **Packages**:
- **express**
- **mongodb**
- **nodemon**
<br />  

  

## Routes

### **Root**
|Routes|HTTP|Description|Expected Response|Required Body|
|:----|:----|:----|:----|:----|
|/|`GET`|Checks if server is running|{status: "Running"}| |

### **Books**
|Routes|HTTP|Description|Expected Response|Required Body|
|:----|:----|:----|:----|:----|
|/books|`GET`|Gets all books. Results are paginated.|{<br /> &nbsp; "_id": {"$oid": 24 Digit Hex Code},<br /> &nbsp; "title": string,<br /> &nbsp; "author": string,<br /> &nbsp; "pages": number,<br /> &nbsp; "rating": number,<br /> &nbsp; "genres": [string, ...],<br /> &nbsp; "reviews": [{"name": string, "body": string}, ...]<br />}| |
|/books/id|`GET`|Gets book based on ID.|{<br /> &nbsp; "_id": {"$oid": 24 Digit Hex Code},<br /> &nbsp; "title": string,<br /> &nbsp; "author": string,<br /> &nbsp; "pages": number,<br /> &nbsp; "rating": number,<br /> &nbsp; "genres": [string, ...],<br /> &nbsp; "reviews": [{"name": string, "body": string}, ...]<br />}| |
|/books|`POST`|Creates new book|{<br /> &nbsp; "acknowledged": boolean,<br /> &nbsp; "insertedId": 24 Digit Hex Code,<br />}|{<br />&nbsp;"title": string, <br />&nbsp;"author": string, <br />&nbsp;"pages": number, <br />&nbsp;"rating": number <br />&nbsp;"genres": [string, ...], <br />&nbsp;"reviews": [{name: string, body: string}, ...] <br >}|
|/books/:id|`DELETE`|Deletes book based on ID.|{<br /> &nbsp; "acknowledged": boolean,<br /> &nbsp; "deletedCount": number,<br />}| |
|/books/:id|`PATCH`|Updates book fields based on ID.|{<br />&nbsp;"acknowledged": boolean, <br />&nbsp;"modifiedCount": number, <br />&nbsp;"upsertedId": null, <br />&nbsp;"upsertedCount": number <br />&nbsp;"matchedCount": number <br >}|{<br /> &nbsp; "title": string,<br /> &nbsp; "author": string,<br /> &nbsp; "pages": number,<br /> &nbsp; "rating": number,<br /> &nbsp; "genres": [string, ...],<br /> &nbsp; "reviews": [{"name": string, "body": string}, ...]<br />}|

>All fields are not required for PATCH request

## Database
### Collections

- #### **Books**
Format 
```
{
  "_id": {
    "$oid": "24 Digit Hex Code"
  },
  "title": "string",
  "author": "string",
  "pages": number,
  "rating": number,
  "genres": [string, ...],
  "reviews": [{
      "name": "string",
      "body": "review"
    }, ...]
}
```



<br />
<br />

<!-- TechStack -->
## Tech Stack
  <ul>
    <li>Node.js</li>
    <li>Express</li>
    <li>Mongo DB</li>
  </ul>
 <br />

 ## Concepts Used
 <details>
 <summary>Express</summary>
  <ul>
    <li>Handling GET, POST, PATCH and DELETE requests</li>
    <li>Getting data from route and query parameter and the body</li>
    <li>Connecting and querying MongoDB database</li>
    <li>Pagination</li>
  </ul>
 </details>
 <details>
 <summary>Mongo DB</summary>
  <ul>
    <li>Creating and modifying collections and documents</li>
    <li>Queries</li>
  </ul>
 </details>

<br />

## Prerequisites

1. ### Install Node JS
    Refer to https://nodejs.org/en/ to install nodejs

3. ### Create Mongo DB database
    Refer to **Database** section of the README for the format for documents in the "Books" collection.

<!-- Run Locally -->
## Run Locally

Clone the project

```bash
git clone https://github.com/Sa-YoorHeadley/mongo-api.git
```

Go to the project directory

```bash
cd mongo-api/
```

Install all the npm packages. 

```bash
npm install
```

In order to run the application type the following command

```bash
npm start
```

>The Server Runs on **localhost:3001**

<br />

<!-- Acknowledgements -->
## Acknowledgements

- [The Net Ninja: Complete MongoDB Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA)