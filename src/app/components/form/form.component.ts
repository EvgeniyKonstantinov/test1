import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  firstregistrationformGroup: FormGroup;
  secondegistrationformGroup: FormGroup;
  endegistrationformGroup: FormGroup;
  firstmyControlsText = [
    {name: 'nameControl', placeholder: 'Имя', type: 'text'},
    {name: 'family_nameControl', placeholder: 'Фамилия', type: 'text'},
    {name: 'middle_nameControl', placeholder: 'Отчество', type: 'text'},
    {name: 'given_nameControl', placeholder: 'Дополнительное имя', type: 'text'},
    {name: 'preferred_usernameControl', placeholder: 'Предпочтительное имя', type: 'text'},
    {name: 'nicknameControl', placeholder: 'Ник нэйм', type: 'text'},
    {name: 'birthdateControl', placeholder: 'Дата рождения', type: 'date'},
  ];
  secondControlsText = [
    {name: 'addressControl', placeholder: 'Адрес', type: 'text'},
    {name: 'emailControl', placeholder: 'E-mail', type: 'text'},
    {name: 'pictureControl', placeholder: 'Фото', type: 'text'},
    {name: 'profileControl', placeholder: 'Ссылка на профиль', type: 'url'},
    {name: 'websiteControl', placeholder: 'Веб сайт', type: 'url'},
    {name: 'zoneinfoControl', placeholder: 'Часовой пояс', type: 'number'},
    {name: 'phone_numberControl', placeholder: 'Телефон', type: 'tel'},
    {name: 'password', placeholder: 'Пароль', type: 'password'}
  ];
  mycontrolsRadio = {name: 'genderControl', labels: ['Муж.', 'Жен.']};

  constructor(private fb: FormBuilder) {
    this.firstregistrationformGroup = fb.group({
      nameControl: ['', Validators.required],
      family_nameControl: ['', Validators.required],
      middle_nameControl: ['', Validators.required],
      nicknameControl: ['', Validators.required],
      given_nameControl: [''],
      birthdateControl: ['', Validators.required],
      genderControl: ['', Validators.required],
      preferred_usernameControl: ['', Validators.required]
    });
    this.secondegistrationformGroup = fb.group({
      addressControl: ['', Validators.required],
      emailControl: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')])],
      pictureControl: ['', Validators.required],
      profileControl: ['', Validators.required],
      websiteControl: ['', Validators.required],
      updated_atControl: [new Date(), Validators.required],
      zoneinfoControl: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      phone_numberControl:  ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{11}')])],

    });
  }

  ngOnInit() {
  }

  save() {
    console.log(Object.assign(this.firstregistrationformGroup.value, this.secondegistrationformGroup.value));
  }

}
