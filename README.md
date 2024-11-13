
# AROGYAM APP - Doctor Appointment Booking System

A responsive and user-friendly web application for booking doctor appointments, built with React. This project provides an intuitive interface for patients to view doctor profiles, explore specialties, and schedule appointments seamlessly. Ideal for healthcare providers looking to offer online appointment management and improve patient accessibility.



project website link to view-

https://arrogyamapp.netlify.app/
## Table of Contents

 - [Overview](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Features](https://github.com/matiassingers/awesome-readme)
 - [Technologies Used](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

- [Getting Started](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

- [Folder Structure](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

- [Usage](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

- [Contributing](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

- [License](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
## Overview

AROGYAM APP is a comprehensive web application built with React to allow users to book doctor appointments with ease. This project features a dynamic user interface and real-time functionality, enabling patients to browse through doctors, view their details, and book appointments effortlessly.
## Features


- Doctor Listing: Displays a list of doctors with image sizes.
- Doctor Details: Shows details such as name, degree, specialty, experience, and additional info when a doctor is selected.
- Responsive Design: Mobile-friendly and responsive layout for seamless use across devices.
- Dark and Light Modes: Users can toggle between dark and light themes.
- Context Management: Efficient state management for doctor details and currency symbol through React Context API.
## Tech Stack

- React - Frontend library for building user interfaces
- Tailwind CSS - Utility-first CSS framework for styling
- FontAwesome - Icon library for button icons and UI elements
- React Router - For handling routes and page navigation
- JavaScript - Core programming language for React components

## Getting Started

### Prerequisites

- Node.js - Ensure Node.js is installed (v14 or above).
- NPM or Yarn - A package manager for managing dependencies.

### Installation

1.Clone the repository:

```bash
git clone https://github.com/Achyut197/Doctorappointmentapp.git
```
2.Navigate to the project folder:
```bash
cd Doctorappointmentapp
```
3.Install the dependencies:

```bash
npm install
```
4.Start the development server:

```bash
npm start
```


### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Folder Structure
```bash
doctorappointmentapp/
│
├── public/               # Static assets
│
├── src/
│   ├── components/       # Reusable components (DoctorCard, Navbar, TopDoctor,Banner,Footer,Header,Servicelist,TopDoctor,Nabbar.css etc.)
│   ├── pages/            # Page components (Home, Appointment, DoctorDetails,About,Contact,Doctor,Login,Myappointment,profile etc.)
│   ├── context/          # Context providers (e.g., AppContext.js for doctordetails and currencySymbol)
│   ├── styles/           # CSS or Tailwind CSS configurations
│   ├── App.js            # Main application component
│   ├── index.js          # Entry point of the app
│
└── README.md             # Documentation for the project
```
## Usage

- Viewing Doctors: Visit the homepage to browse a list of available doctors. Each doctor card includes basic details and an image.
- Viewing Doctor Details: Click on a doctor to see full details, including their specialty, experience, and an 'About' section.
- Booking Appointments: Select a date and time for booking an appointment with a doctor.
- Theme Toggle: Switch between light and dark modes by clicking the theme toggle button.
- Navbar Toggle: Use the account creation toggle in the navbar to access account-related features.

## Contributing

- Fork the project.
- Create your feature branch (`git checkout -b feature/new-feature`).
- Commit your changes (`git commit -m 'Add a new feature'`).
- Push to the branch (`git push origin feature/new-feature`).
- Open a pull request.