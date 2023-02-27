import { Component } from '@angular/core';
import { Env } from 'src/app/core/environ/env';
import { Member } from 'src/app/core/models/member.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  members: Array<Member> = [
    {
      id: 1,
      firstName: 'Aurélie',
      name: 'JULLE',
      role: 'Présidente',
      photoProfilUrl: Env.photo_profil_f,
    },
    {
      id: 2,
      firstName: 'Julie',
      name: 'VERWAERDE',
      role: 'Co-Présidente',
      photoProfilUrl: Env.photo_profil_f,
    },
    {
      id: 3,
      firstName: 'Timothée',
      name: 'DEMARES',
      role: 'Trésorier',
      photoProfilUrl: 'assets/img/photos_profil/TimDem.jpg',
    },
    {
      id: 4,
      firstName: 'Vincent',
      name: 'MACHER',
      role: 'Membre',
      photoProfilUrl: Env.photo_profil_m,
    },
    {
      id: 5,
      firstName: 'Merlin',
      name: 'LAMAGO',
      role: 'Membre',
      photoProfilUrl: Env.photo_profil_m,
    },
    {
      id: 6,
      firstName: 'Fatou',
      name: 'DANFAKHA',
      role: 'Membre',
      photoProfilUrl: Env.photo_profil_f,
    },
    {
      id: 7,
      firstName: 'Lynda',
      name: 'TAÏRI',
      role: 'Membre',
      photoProfilUrl: Env.photo_profil_f,
    },
    {
      id: 8,
      firstName: 'Sandrine',
      name: 'KESSERAOUI',
      role: 'Membre',
      photoProfilUrl: Env.photo_profil_f,
    },
    {
      id: 9,
      firstName: 'Virginie',
      name: 'GOSSET',
      role: 'Membre',
      photoProfilUrl: Env.photo_profil_f,
    },
    {
      id: 10,
      firstName: 'Hanane',
      name: 'BOULOUHA',
      role: 'Membre',
      photoProfilUrl: Env.photo_profil_f,
    },
    {
      id: 11,
      firstName: 'Carla',
      name: 'BOUREAUD',
      role: 'Membre',
      photoProfilUrl: Env.photo_profil_f,
    },
    {
      id: 12,
      firstName: 'Zohira',
      name: 'MAGOURI',
      role: 'Membre',
      photoProfilUrl: Env.photo_profil_f,
    },
    {
      id: 13,
      firstName: 'Alesia',
      name: '',
      role: 'Membre',
      photoProfilUrl: Env.photo_profil_f,
    },
    {
      id: 14,
      firstName: 'Mina',
      name: '',
      role: 'Membre',
      photoProfilUrl: Env.photo_profil_f,
    },
  ];
}
