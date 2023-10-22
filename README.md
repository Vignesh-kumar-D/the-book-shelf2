# React with Reduc and Authetication


## The Book Shelf 
To Visit App:
https://the-book-shelf2.vercel.app/
# Table of contents
- [Title](#markdown-badges)
- [Table of contents](#table-of-contents)
- [Description](#Description)
- [Project assmed requirements](#project-assumed-requirements)
- [Installation and Setup Instructions](#installation-and-setup-instruction)
- [Reflection](#Reflection)
- 
## Description:
This app is a Book Logger used to Pick the books you want to keep in wishlist and log the status of the books.
* It was developed as a way to better grasp and understand how to build a frontend App using ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* The main goal being to familiarize with the latest concepts of React including `Functional Components`, `React Hooks`, `Context-API`
* State Management is done using ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
* the UI is build using  ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) with no custom CSS code
* ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white) is used as backed to store and retrive data and user details.
* `Google Books API` is being used to retrive list of books on search
* Vercel is used to deploy this app


## Project Assumed Requirements:
1. It should be a functional App with user management and books management
   - This is a frontend application and all API requests are directed to  ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white) which is used to store and retrive the details using `REST API`
2. It should have proper Authentication and each user should view only their books details
   - Firebase creates and manages users and on SignIn send a `Bearer Token` and all requests to read data accpets the `Bearer Token`
3. The App should be Mobile Friendly
   - This project used  ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) and used its in build media query attributes to make it mobile frienddly
4. All Informations should be cached and the application should be restart on refresh
   - Browser LocalStorage is used to store the ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)  and on mount if a valid token is available it retirves details for that user, if not shows Sign In Page
5. Should be eaily Deployed when modified
   - Linked ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) Deployment settings with the Apps Repository and customized the deployment to happen on push to master in ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)    


## Project Screen Shot(s):
Search Page
![Screenshot 2023-10-22 233111](https://github.com/legendvi/the-book-shelf2/assets/41253273/bcf3d34e-ba5e-494a-bb91-6448e0dac285)

List Page
![Screenshot 2023-10-22 233123](https://github.com/legendvi/the-book-shelf2/assets/41253273/4cabed18-bd59-4050-9cc6-f9bbeac7f860)

SIgnIn/SignUP Page
![Screenshot 2023-10-22 233139](https://github.com/legendvi/the-book-shelf2/assets/41253273/01cf4464-9f4f-41cf-9034-10b376fb6911)


## Installation and Setup Instructions:
  
Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

goto : `http://localhost:3000` in browser to view the app 

## Reflection:

This is a side Project I developed to better understand how to work with micro frontends to create apps which are independent and can be developed and modified in isolation.
This was a two week long project and started as a  `React` based microfrontend.

Communicating Navigation history  used some amount props driling and could have solved using a shared state but I wanted all thee apps to be almost independently developled and deployed so most communications between host and remote are only using Callback functions and

Also I have not used create-react-app or Vue-cli to build the apps as that would include all other dependencies with them and I wanted to keep this light as the goal was only to better understand miccro fronends

Took help of documentation to see how to use CI/CD to and deploy to S3 on push to `main` branch and how to deploy in cloudfront

 
One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a `webpack.config.js` file to more fully understand the build process.
