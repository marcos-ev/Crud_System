# CRUD Users Benefits Project

## About the Project

This project is an Angular application developed to improve efficiency in managing users and their benefits. With a user-friendly interface, our system replaces old and complicated platforms, making work up to 3x faster and simplified.

Deploy: https://crud-system-wine.vercel.app/

## Features

- **User Management**: Add, update, view, and delete users easily and quickly.
- **Benefits Control**: Manage the benefits offered to users, with the ability to add new benefits, edit, or remove existing ones.
- **Interactive Dashboard**: Track important metrics about users and benefits through our interactive dashboard.
- **Profile Picture Upload**: Users can add or change their profile pictures.

## Technologies Used

- **Front-end**: Angular
- **Styling**: SCSS
- **Icons**: Angular Material Icons
- **Backend**: Firebase

## Firebase Setup and Usage

To use Firebase as a backend for authentication and data storage, follow the steps below:

1. **Create a Project on Firebase**: Access [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. **Add your Angular App to the Firebase Project**: Inside the Firebase project, click on "Add app" and select the web platform to get your specific configurations.
3. **Configure Firebase in the Angular Project**:
   - Install Firebase in your Angular project using NPM:
     ```bash
     npm install firebase @angular/fire
     ```
   - Add Firebase configurations to your Angular environment in `src/environments/environment.ts`:
     ```typescript
     export const environment = {
       production: false,
       firebaseConfig: {
         apiKey: "your-api-key",
         authDomain: "your-auth-domain",
         projectId: "your-project-id",
         storageBucket: "your-storage-bucket",
         messagingSenderId: "your-messaging-sender-id",
         appId: "your-app-id"
       }
     };
     ```
   - Initialize Firebase in your main module (`app.module.ts`), importing `AngularFireModule` and `AngularFirestoreModule`:
     ```typescript
     import { AngularFireModule } from '@angular/fire';
     import { AngularFirestoreModule } from '@angular/fire/firestore';
     import { environment } from '../environments/environment';

     @NgModule({
       imports: [
         AngularFireModule.initializeApp(environment.firebaseConfig),
         AngularFirestoreModule,
         // other imports
       ],
       // declarations and bootstrap
     })
     export class AppModule { }
     ```

4. **Use Firebase for Authentication and Data Storage**:
   - Authentication: Use `AngularFireAuth` to add login functionalities.
   - Data Storage: Utilize `AngularFirestore` to interact with the Firestore Database.

## How to Run the Project

To run this Angular project with Firebase integration in your local environment, follow the instructions below:

1. **Clone the repository**:
   ```bash
   git clone https://link-to-your-repository.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd crud-system
   ```
3. **Install the dependencies**:
   ```bash
   npm install
   ```
4. **Set up the Environment**:
   - Ensure that the `src/environments/environment.ts` file is configured with your Firebase credentials, as explained in the Firebase Setup and Usage section.

5. **Start the development server**:
   ```bash
   ng serve
   ```
   - To run the server on a specific port, use `ng serve --port <port-number>`.

6. **Access the application**:
   - If the browser does not open automatically, you can manually access it by entering `http://localhost:4200/` in the address bar.

## Contact

Linkedin - ([https://www.linkedin.com/in/marcos-eduardo-virgili/](https://www.linkedin.com/in/marcos-eduardo-virgili/)) - marcosev@gmail.com

Project Link: [https://github.com/marcos-ev/Crud_System](https://github.com/marcos-ev/Crud_System)
