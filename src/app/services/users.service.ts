// users.service.ts

import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private dataBaseStore: AngularFirestore) { }

  getAllUsers() {
    return this.dataBaseStore.collection('users', ref => ref.orderBy('name')).valueChanges({idField: 'firebaseId'}) as Observable<any[]>;
  }

  addUser(user: User) {
    return this.dataBaseStore.collection('users').add(user);
  }

  update(user: User, userId: string) {
    return this.dataBaseStore.collection('users').doc(userId).update(user);
  }

  deleteUser(userId: string) {
    return this.dataBaseStore.collection('users').doc(userId).delete();
  }

  async getTotalUsersCount() {
    try {
      const snapshot = await this.dataBaseStore.collection('users').get().toPromise();
      if (snapshot) {
        return snapshot.size;
      } else {
        return 0;
      }
    } catch (error) {
      console.error('Erro ao obter total de usuários:', error);
      throw error;
    }
  }

  getLastUser() {
    return this.dataBaseStore.collection('users', ref => ref.orderBy('createdAt', 'desc').limit(1)).valueChanges({idField: 'firebaseId'}) as Observable<any[]>;
  }

}
