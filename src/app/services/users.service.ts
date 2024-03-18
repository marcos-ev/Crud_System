import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { orderBy } from 'firebase/firestore'; // Isso precisa ser ajustado conforme necessário

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private dataBaseStore: AngularFirestore) { }

  getAllUsers(): Observable<any[]> {
    return this.dataBaseStore.collection('users', ref => ref.orderBy('name')).valueChanges({ idField: 'firebaseId' });
  }

  addUser(user: any) {  
  return this.dataBaseStore.collection('users').add(user);
  }

  update(userId: string, user: any) {
    return this.dataBaseStore.collection('users').doc('userId').update(user);
  }

  delete(userId: string){
    return this.dataBaseStore.collection('users').doc('userId').delete(); 
   }

}
