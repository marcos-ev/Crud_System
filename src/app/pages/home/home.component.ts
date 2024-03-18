import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  totalUsers: number = 0;
  usersAddedLastMonth: number = 0;
  totalBenefits: number = 0;
  benefitsAddedLastMonth: number = 0;
  lastUserId: string = '';
  lastUserName: string = '';
  lastUserOccupation: string = '';
  userProfileImageUrl: string | ArrayBuffer | null = null; // Adicionamos a propriedade userProfileImageUrl

  userNameStorage: string | null;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.loadUserData();
    this.userNameStorage = sessionStorage.getItem('user');
  }

  async loadUserData() {
    try {
      // Obter os dados do último usuário
      const lastUser = await firstValueFrom(this.usersService.getLastUser());
      console.log('Último usuário:', lastUser); // Verifica se o último usuário está sendo retornado corretamente
      if (lastUser && lastUser.length > 0) {
        this.lastUserId = lastUser[0].id;
        this.lastUserName = lastUser[0].name;
        this.lastUserOccupation = lastUser[0].occupation;
      } else {
        console.log('Não há nenhum usuário cadastrado.');
      }
      
      // Obter o total de usuários cadastrados
      this.totalUsers = await this.usersService.getTotalUsersCount();
      console.log('Total de usuários atualizado:', this.totalUsers); 

      // Adicione o código para obter os outros dados necessários aqui
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
    }
  }

  handleImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
            this.userProfileImageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
    }
  }

  openFileInput() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }


}
