import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Pizza{
  codigo: number,
  titulo: string,
  descricao: string,
  preco: string
}

interface Lanches{
  titulo: string,
  preco: string
}

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})

export class MenuPageComponent implements OnInit {
  public pizzas: Array<Pizza> = [
    {
      codigo: 1,
      titulo: 'MUSSARELA',
      descricao: 'Mussarela e tomate.',
      preco: '17,00'
    },
    {
      codigo: 2,
      titulo: 'CALABRESA',
      descricao: 'Calabresa, tomate, mussarela e cebola.',
      preco: '18,00'
    },
    {
      codigo: 3,
      titulo: 'ATUM',
      descricao: 'Atum, cebola, tomate e mussarela.',
      preco: '20,00'
    },
    {
      codigo: 4,
      titulo: 'CAIPIRA',
      descricao: 'Milho, mussarela, catupiry, ovos e tomate.',
      preco: '20,00'
    },
    {
      codigo: 5,
      titulo: 'TOSCANA',
      descricao: 'Calabresa, bacon, cebola, tomate e mussarela.',
      preco: '20,00'
    },
    {
      codigo: 6,
      titulo: 'AMERICANA',
      descricao: 'Atum, palmito, ovos, mussarela, cebola e tomate.',
      preco: '20,00'
    },
    {
      codigo: 7,
      titulo: 'TROPICAL',
      descricao: 'Presunto, palmito, cebola, mussarela e tomate.',
      preco: '20,00'
    },
    {
      codigo: 8,
      titulo: 'BACON',
      descricao: 'Bacon, parmesão, tomate e mussarela.',
      preco: '20,00'
    },
    {
      codigo: 9,
      titulo: 'CATUPIRY',
      descricao: 'Mussarela, catupiry e tomate',
      preco: '19,00'
    },
    {
      codigo: 10,
      titulo: 'PRESUNTO',
      descricao: 'Presunto, cebola, tomate e mussarela.',
      preco: '19,00'
    },
    {
      codigo: 11,
      titulo: 'ITALIANA',
      descricao: 'Mussarela, presunto, champigon, cebola e tomate.',
      preco: '19,00'
    },
    {
      codigo: 12,
      titulo: 'NAPOLITANA',
      descricao: 'Mussarela, presunto, bacon, calabresa, cebola e tomate.',
      preco: '20,00'
    },
    {
      codigo: 13,
      titulo: 'TRÊS QUEIJOS',
      descricao: 'Mussarela, catupiry, provolone e tomate.',
      preco: '20,00'
    },
    {
      codigo: 14,
      titulo: 'ANGOLANA',
      descricao: 'Mussarela, presunto, bacon, calabresa, atum, cebola e tomate.',
      preco: '20,00'
    },
    {
      codigo: 15,
      titulo: 'MODA DA CASA',
      descricao: 'Mussarela, presunto, palmito, catupiry, ovos, milho e tomate.',
      preco: '20,00'
    },
    {
      codigo: 16,
      titulo: 'PIZZAIOLO I',
      descricao: '1/4 mussarela, 1/4 calabresa, 1/4 atum, 1/4 portuguesa e tomate.',
      preco: '22,00'
    },
    {
      codigo: 17,
      titulo: 'JARDINEIRA',
      descricao: 'Escarola, palmito, champignon, mussarela e tomate.',
      preco: '19,00'
    },
    {
      codigo: 18,
      titulo: 'LOMBO',
      descricao: 'Lombo, mussarela, cebola e tomate.',
      preco: '20,00'
    },
    {
      codigo: 19,
      titulo: 'PALMITO',
      descricao: 'Palmito, mussarela e tomate.',
      preco: '20,00'
    },
    {
      codigo: 20,
      titulo: 'QUATRO QUEIJOS',
      descricao: 'Mussarela, catupiry, parmesão, provolone e tomate.',
      preco: '20,00'
    },
    {
      codigo: 21,
      titulo: 'FRANGO COM MILHO',
      descricao: 'Mussarela, frango, milho, catupiry e tomate.',
      preco: '20,00'
    },
    {
      codigo: 22,
      titulo: 'PORTUGUESA',
      descricao: 'Mussarela, calabresa, presunto, ervilhas, ovos, palmito, cebola e tomate.',
      preco: '20,00'
    },
    {
      codigo: 23,
      titulo: 'ESCAROLA',
      descricao: 'Escarola refagado com alho, bacon, mussarela e tomate.',
      preco: '19,00'
    },
    {
      codigo: 24,
      titulo: 'MARGUERITA',
      descricao: 'Mussarela, manjericão e tomate.',
      preco: '18,00'
    },
    {
      codigo: 25,
      titulo: 'PRIMAVERA',
      descricao: 'Presunto, provolone, mussarela e tomate.',
      preco: '20,00'
    },
    {
      codigo: 26,
      titulo: 'SICILIANA',
      descricao: 'Bacon, champignon, milho, mussarela e tomate.',
      preco: '19,00'
    },
    {
      codigo: 27,
      titulo: 'PIZZAIOLO II',
      descricao: 'Quatro partes à gosto e tomate.',
      preco: '22,00'
    },
    {
      codigo: 28,
      titulo: 'SUPREMO',
      descricao: 'Milho, bacon, catupiry, parmesão, mussarela e tomate.',
      preco: '20,00'
    },
    {
      codigo: 29,
      titulo: 'VEGETARIANA',
      descricao: 'Mussarela, brócolis, escarola, palmito e ervilhas.',
      preco: '20,00'
    },
    {
      codigo: 30,
      titulo: 'À MODA DO HÉLIO',
      descricao: '',
      preco: '24,00'
    }
  ]
  public lanches: Array<Lanches> = [
    {
      titulo: 'BAURU',
      preco: '4,00'
    },
    {
      titulo: 'MISTO QUENTE',
      preco: '4,00'
    },
    {
      titulo: 'X-BURGUER',
      preco: '4,00'
    },
    {
      titulo: 'X-SALADA',
      preco: '5,00'
    },
    {
      titulo: 'X-FRANGO',
      preco: '5,50'
    },
    {
      titulo: 'X-CHURRASCO',
      preco: '5,50'
    },
    {
      titulo: 'X-CALABRESA',
      preco: '5,00'
    },
    {
      titulo: 'X-BACON',
      preco: '5,50'
    },
    {
      titulo: 'X-BACON EGG SALADA',
      preco: '6,00'
    },
    {
      titulo: 'X-TUDO NO PRATO',
      preco: '16,00'
    }
  ]
  public panquecas: Array<Lanches> = [
    {
      titulo: 'CARNE',
      preco: '6,00'
    },
    {
      titulo: 'QUEIJO',
      preco: '6,00'
    },
    {
      titulo: 'CALABRESA',
      preco: '6,00'
    },
    {
      titulo: 'FRANGO C/ CATUPIRY',
      preco: '6,00'
    },
    {
      titulo: 'ESCAROLA C/ CATUPIRY',
      preco: '6,00'
    },
    {
      titulo: 'PRESUNTO C/ QUEIJO',
      preco: '6,00'
    },
    {
      titulo: 'QUATRO QUEIJOS',
      preco: '6,00'
    },
    {
      titulo: 'PALMITO',
      preco: '6,00'
    }
  ]
  public menuPage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(value => {
      this.menuPage = value.menu;
    });
  }

}
