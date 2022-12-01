import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formCadastro: FormGroup;

  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório!' },
      { tipo: 'minlength', mensagem: 'O campo Nome precisa ter pelo menos 3 caracteres!' },
    ],
    cpf: [
      {tipo: 'required', mensagem: 'O campo CPF é obrigatório!'},
    ],
  email: [
    { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
    { tipo: 'email', mensagem: 'E-mail Inválido.' },
  ],
  senha: [
    { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
    { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
    { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
  ],
  confirmaSenha: [
    { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
    { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
    { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
    ],
  };

  constructor(private formBiulder: FormBuilder) {
    this.formCadastro = this.formBiulder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])],
      confirmaSenha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])]
    });
   }

  ngOnInit() {
  }

  salvarCadastro(){
    console.log('Formulário: ', this.formCadastro.valid);
  }

}
