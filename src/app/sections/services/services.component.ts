import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  items = [
    {
      number: '01',
      title: 'Soporte técnico especializado',
      description: 'Diagnóstico, reparación y mantenimiento para tu equipo.',
    },
    {
      number: '02',
      title: 'Tu PC, a tu medida',
      description: 'Selección de componentes y ensamblaje personalizado.',
    },
    {
      number: '03',
      title: 'Soluciones para empresas',
      description: 'Equipamiento y asesoría para impulsar a tu equipo.',
    },
  ];
}
