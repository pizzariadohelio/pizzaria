import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Pizza{
  codigo: number;
  titulo: string;
  descricao: string;
  preco: string;
}

interface Lanches{
  titulo: string;
  preco: string;
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
      preco: '28,00'
    },
    {
      codigo: 2,
      titulo: 'CALABRESA',
      descricao: 'Calabresa, tomate, mussarela e cebola.',
      preco: '30,00'
    },
    {
      codigo: 3,
      titulo: 'ATUM',
      descricao: 'Atum, cebola, tomate e mussarela.',
      preco: '32,00'
    },
    {
      codigo: 4,
      titulo: 'CAIPIRA',
      descricao: 'Milho, mussarela, catupiry, ovos e tomate.',
      preco: '30,00'
    },
    {
      codigo: 5,
      titulo: 'TOSCANA',
      descricao: 'Calabresa, bacon, cebola, tomate e mussarela.',
      preco: '32,00'
    },
    {
      codigo: 6,
      titulo: 'AMERICANA',
      descricao: 'Atum, palmito, ovos, mussarela, cebola e tomate.',
      preco: '32,00'
    },
    {
      codigo: 7,
      titulo: 'TROPICAL',
      descricao: 'Presunto, palmito, cebola, mussarela e tomate.',
      preco: '32,00'
    },
    {
      codigo: 8,
      titulo: 'BACON',
      descricao: 'Bacon, parmesão, tomate e mussarela.',
      preco: '30,00'
    },
    {
      codigo: 9,
      titulo: 'CATUPIRY',
      descricao: 'Mussarela, catupiry e tomate',
      preco: '30,00'
    },
    {
      codigo: 10,
      titulo: 'PRESUNTO',
      descricao: 'Presunto, cebola, tomate e mussarela.',
      preco: '30,00'
    },
    {
      codigo: 11,
      titulo: 'ITALIANA',
      descricao: 'Mussarela, presunto, champigon, cebola e tomate.',
      preco: '30,00'
    },
    {
      codigo: 12,
      titulo: 'NAPOLITANA',
      descricao: 'Mussarela, presunto, bacon, calabresa, cebola e tomate.',
      preco: '32,00'
    },
    {
      codigo: 13,
      titulo: 'TRÊS QUEIJOS',
      descricao: 'Mussarela, catupiry, provolone e tomate.',
      preco: '30,00'
    },
    {
      codigo: 14,
      titulo: 'ANGOLANA',
      descricao: 'Mussarela, presunto, bacon, calabresa, atum, cebola e tomate.',
      preco: '32,00'
    },
    {
      codigo: 15,
      titulo: 'MODA DA CASA',
      descricao: 'Mussarela, presunto, palmito, catupiry, ovos, milho e tomate.',
      preco: '34,00'
    },
    {
      codigo: 16,
      titulo: 'PIZZAIOLO I',
      descricao: '1/4 mussarela, 1/4 calabresa, 1/4 atum, 1/4 portuguesa e tomate.',
      preco: '32,00'
    },
    {
      codigo: 17,
      titulo: 'JARDINEIRA',
      descricao: 'Escarola, palmito, champignon, mussarela e tomate.',
      preco: '30,00'
    },
    {
      codigo: 18,
      titulo: 'LOMBO',
      descricao: 'Lombo, mussarela, cebola e tomate.',
      preco: '32,00'
    },
    {
      codigo: 19,
      titulo: 'PALMITO',
      descricao: 'Palmito, mussarela e tomate.',
      preco: '32,00'
    },
    {
      codigo: 20,
      titulo: 'QUATRO QUEIJOS',
      descricao: 'Mussarela, catupiry, parmesão, provolone e tomate.',
      preco: '32,00'
    },
    {
      codigo: 21,
      titulo: 'FRANGO COM MILHO',
      descricao: 'Mussarela, frango, milho, catupiry e tomate.',
      preco: '32,00'
    },
    {
      codigo: 22,
      titulo: 'PORTUGUESA',
      descricao: 'Mussarela, calabresa, presunto, ervilhas, ovos, palmito, cebola e tomate.',
      preco: '32,00'
    },
    {
      codigo: 23,
      titulo: 'ESCAROLA',
      descricao: 'Escarola refagado com alho, bacon, mussarela e tomate.',
      preco: '30,00'
    },
    {
      codigo: 24,
      titulo: 'MARGUERITA',
      descricao: 'Mussarela, manjericão e tomate.',
      preco: '30,00'
    },
    {
      codigo: 25,
      titulo: 'PRIMAVERA',
      descricao: 'Presunto, provolone, mussarela e tomate.',
      preco: '32,00'
    },
    {
      codigo: 26,
      titulo: 'SICILIANA',
      descricao: 'Bacon, champignon, milho, mussarela e tomate.',
      preco: '32,00'
    },
    {
      codigo: 27,
      titulo: 'PIZZAIOLO II',
      descricao: 'Quatro partes à gosto e tomate.',
      preco: '32,00'
    },
    {
      codigo: 28,
      titulo: 'SUPREMO',
      descricao: 'Milho, bacon, catupiry, parmesão, mussarela e tomate.',
      preco: '32,00'
    },
    {
      codigo: 29,
      titulo: 'VEGETARIANA',
      descricao: 'Mussarela, brócolis, escarola, palmito e ervilhas.',
      preco: '32,00'
    },
    {
      codigo: 30,
      titulo: 'À MODA DO HÉLIO',
      descricao: '',
      preco: '34,00'
    }
  ];

  public lanches: Array<Lanches> = [
    {
      titulo: 'Bauru',
      preco: '8,00'
    },
    {
      titulo: 'Misto Quente',
      preco: '7,00'
    },
    {
      titulo: 'X-Burguer',
      preco: '8,00'
    },
    {
      titulo: 'X-Salada',
      preco: '8,00'
    },
    {
      titulo: 'X-Bacon Salada',
      preco: '9,00'
    },
    {
      titulo: 'X-Bacon Egg Salada',
      preco: '10,00'
    },
    {
      titulo: 'X-Egg Salada',
      preco: '10,00'
    },
    {
      titulo: 'X-Frango Salada',
      preco: '9,00'
    },
    {
      titulo: 'X-Calabresa Salada',
      preco: '9,00'
    },
    {
      titulo: 'X-Churrasco Salada',
      preco: '9,00'
    },
    {
      titulo: 'X-Tudo no Prato',
      preco: '25,00'
    }
  ];

  public panquecas: Array<Lanches> = [
    {
      titulo: 'Carne',
      preco: '12,00'
    },
    {
      titulo: 'Queijo',
      preco: '12,00'
    },
    {
      titulo: 'Calabresa',
      preco: '12,00'
    },
    {
      titulo: 'Palmito',
      preco: '12,00'
    },
    {
      titulo: 'Frango c/ Catupiry',
      preco: '12,00'
    },
    {
      titulo: 'Escarola c/ Catupiry',
      preco: '12,00'
    },
    {
      titulo: 'Presunto c/ Queijo',
      preco: '12,00'
    },
    {
      titulo: 'Quatro Queijos',
      preco: '12,00'
    }
  ];

  public porcoes: Array<Lanches> = [
    {
      titulo: 'Fritas Pequena',
      preco: '17,00'
    },
    {
      titulo: 'Fritas Grande',
      preco: '22,00'
    },
    {
      titulo: 'Churrasco Pequeno',
      preco: '20,00'
    },
    {
      titulo: 'Churrasco Grande',
      preco: '27,00'
    },
    {
      titulo: 'Frango à Passarinho peq',
      preco: '20,00'
    },
    {
      titulo: 'Frango à Passarinho gde',
      preco: '27,00'
    },
    {
      titulo: 'Calabresa peq',
      preco: '20,00'
    },
    {
      titulo: 'Calabresa gde',
      preco: '25,00'
    },
    {
      titulo: 'Polenta peq',
      preco: '18,00'
    },
    {
      titulo: 'Polenta gde',
      preco: '23,00'
    },
    {
      titulo: 'Mandioca peq',
      preco: '18,00'
    },
    {
      titulo: 'Mandioca gde',
      preco: '23,00'
    },
    {
      titulo: 'Queijo Prato',
      preco: '20,00'
    },
    {
      titulo: 'Provolone à Milanesa',
      preco: '25,00'
    }
  ];

  public bebidas: Array<Lanches> = [
    {
      titulo: 'Smirnoff',
      preco: '8,00'
    },
    {
      titulo: 'Orloff',
      preco: '6,00'
    },
    {
      titulo: 'Natu Nobilis',
      preco: '10,00'
    },
    {
      titulo: 'Garrafa',
      preco: '10,00'
    },
    {
      titulo: 'Lata',
      preco: '4,50'
    },
    {
      titulo: '2 Litros',
      preco: '10,00'
    },
    {
      titulo: '600ml',
      preco: '7,00'
    },
    {
      titulo: 'Lata',
      preco: '4,50'
    }
  ];

  public sucos: Array<any> = [
    {
      titulo: 'Melão',
      precoA: '5,00',
      precoL: '6,00'
    },
    {
      titulo: 'Laranja',
      precoA: '5,00',
      precoL: '6,00'
    },
    {
      titulo: 'Limão',
      precoA: '5,00',
      precoL: '6,00'
    },
    {
      titulo: 'Manga',
      precoA: '5,00',
      precoL: '6,00'
    },
    {
      titulo: 'Goiaba',
      precoA: '5,00',
      precoL: '6,00'
    },
    {
      titulo: 'Abacaxi',
      precoA: '5,00',
      precoL: '6,00'
    },
    {
      titulo: 'Caju',
      precoA: '5,00',
      precoL: '6,00'
    },
    {
      titulo: 'Acerola',
      precoA: '5,00',
      precoL: '6,00'
    },
    {
      titulo: 'Morango',
      precoA: '5,00',
      precoL: '6,00'
    },
    {
      titulo: 'Maracuja',
      precoA: '5,00',
      precoL: '6,00'
    },
    {
      titulo: 'Uva',
      precoA: '5,00',
      precoL: '6,00'
    },
    {
      titulo: 'Abacaxi c/ Hortelã',
      precoA: '5,00',
      precoL: '6,00'
    }
  ];

  public batidas: Array<Lanches> = [
    {
      titulo: 'Coco',
      preco: '5,00'
    },
    {
      titulo: 'Morango',
      preco: '5,00'
    },
    {
      titulo: 'Amendoim',
      preco: '5,00'
    },
    {
      titulo: 'Pêssego',
      preco: '5,00'
    },
    {
      titulo: 'Maracujá',
      preco: '5,50'
    },
    {
      titulo: 'Limão',
      preco: '5,00'
    }
  ];

  public doses: Array<Lanches> = [
    {
      titulo: 'Domecq',
      preco: '8,00'
    },
    {
      titulo: 'Campari',
      preco: '10,00'
    },
    {
      titulo: 'San Remy',
      preco: '8,00'
    },
    {
      titulo: 'Licor Cacau',
      preco: '5,00'
    },
    {
      titulo: 'Menta',
      preco: '5,00'
    },
    {
      titulo: 'Cantini',
      preco: '5,00'
    },
    {
      titulo: 'Martini',
      preco: '6,00'
    },
    {
      titulo: 'Dreher',
      preco: '5,00'
    },
    {
      titulo: 'Vinho taça',
      preco: '7,00'
    }
  ];

  public especials: Array<Lanches> = [
    {
      titulo: 'Caipirinha de Vodka Grande',
      preco: '15,00'
    },
    {
      titulo: 'Caipirinha de Vodka Pequena',
      preco: '12,00'
    },
    {
      titulo: 'Caipirinha de Pinga Grande',
      preco: '12,00'
    },
    {
      titulo: 'Caipirinha de Pinga Pequena',
      preco: '10,00'
    },
    {
      titulo: 'Cuba Libre',
      preco: '12,00'
    },
    {
      titulo: 'Espanhola',
      preco: '15,00'
    }
  ];

  public menuPage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(value => {
      this.menuPage = value.menu;
    });
  }

}
