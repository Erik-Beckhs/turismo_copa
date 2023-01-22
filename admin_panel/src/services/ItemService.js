//import Api from '@/services/Api';

export default {
    listArticulos(){
        return [
            {
                value:'1',
                articulo:'Sombrilla',
                selected:false,
                icon:'mdi-umbrella'
            },
            {
                value:'2',
                articulo:'Tenis',
                selected:false,
                icon:'mdi-shoesneaker'
            },
            {
                value:'3',
                articulo:'Gafas de Sol',
                selected:false,
                icon:'mdi-sunglasses'
            },
            {
                value:'4',
                articulo:'Ropa Ligera',
                selected:false,
                icon:'mdi-bag-personal'
            },
            {
                value:'5',
                articulo:'Sombrero',
                selected:false,
                icon:'mdi-bag-personal'
            },
            {
                value:'6',
                articulo:'Protector Solar',
                selected:false,
                icon:'mdi-bag-personal'
            },
            {
                value:'7',
                articulo:'Toalla',
                selected:false,
                icon:'mdi-bag-personal'
            },
            {
                value:'8',
                articulo:'Botiquin',
                selected:false,
                icon:'mdi-bag-personal'
            },
            {
                value:'9',
                articulo:'Botas de Goma',
                selected:false,
                icon:'mdi-bag-personal'
            },
            {
                value:'10',
                articulo:'Bolsas Nylon',
                selected:false,
                icon:'mdi-bag-personal'
            },
            {
                value:'11',
                articulo:'Agua',
                selected:false,
                icon:'mdi-bag-personal'
            },
            {
                value:'12',
                articulo:'Cámara de Fotos',
                selected:false,
                icon:'mdi-bag-personal'
            },
            {
                value:'13',
                articulo:'Cargador Inalambrico',
                selected:false,
                icon:'mdi-bag-personal'
            },
            {
                value:'14',
                articulo:'Cedula de Identidad',
                selected:false,
                icon:'mdi-bag-personal'
            },
            {
                value:'15',
                articulo:'Cafe Soluble',
                selected:false,
                icon:'mdi-bag-personal'
            },
            {
                value:'16',
                articulo:'Muda extra',
                selected:false,
                icon:'mdi-bag-personal'
            },
            {
                value:'17',
                articulo:'Almohada de viaje',
                selected:false,
                icon:'mdi-bag-personal'
            },
            {
                value:'18',
                articulo:'Desinfectante de manos',
                selected:false,
                icon:'mdi-bag-personal'
            },
            {
                value:'19',
                articulo:'Detergente',
                selected:false,
                icon:'mdi-bag-personal'
            },
            {
                value:'20',
                articulo:'Guantes',
                selected:false,
                icon:'mdi-bag-personal'
            },
        ];
    },
    listCategoriasAtractivos(){
        return [
            'Sitios Naturales',
            'Etnografía y Folklore',
            'Eventos Programados',
            'Actividades Que Hacer',
            'Patrimonio Urbano Arquitectónico',
            'Realizaciones técnicas científicas'
        ];
    },
    listJerarquias(){
        return ['I', 'II', 'III', 'IV', 'V'];
    },
    listTipoAtractivos(){
        return [
        'Legado Arqueológico',
        'Asentación Humanos y Arquitectura Viva',
        'Museos y Salas de Exposición',
        'Folklore Espiritual Mental',
        'Folklore Social',
        'Artísticos'
        ];
    },
    listSubTipoAtractivos(){
        return [
            'Bahías',
            'Sitios o Conjuntos',
            'Arquitectura y Arte',
            'Centros Poblados y Ciudades',
            'Monumentos, edificios y obras de arquitectura',
            'Religioso',
            'Arqueológico',
            'Manifestaciones y creencias populares',
            'Comidas y bebidas',
            'Fiestas populares y religiosas'
        ];
    },
    listComunidades(){
        return ['Varias', 'Kusijata', 'Marca Kosco', 'Sampaya', 'Locka', 'Copacabana', 'Chisi'];
    },
    listTiposHabitacion(){
        return [
            {tipo_habitacion:'Individual', icono:'mdi-bed', selected:false},
            {tipo_habitacion:'Doble', icono:'mdi-bed', selected:false},
            {tipo_habitacion:'Triple', icono:'mdi-bed', selected:false},
            {tipo_habitacion:'Quad', icono:'mdi-bed', selected:false},
            {tipo_habitacion:'Queen', icono:'mdi-bed', selected:false},
            {tipo_habitacion:'King', icono:'mdi-bed', selected:false},
            {tipo_habitacion:'Twin', icono:'mdi-bed', selected:false},
            {tipo_habitacion:'Doble-doble', icono:'mdi-bed', selected:false},
            {tipo_habitacion:'Estudio', icono:'mdi-bed', selected:false}
        ];
    },
    listServiciosHospedaje(){
        return [
            {servicio:'Sala de Eventos', tipo_servicio:'propiedad', icono:'mdi-warehouse'},
            {servicio:'Garaje', tipo_servicio:'propiedad', icono:'mdi-garage-variant'},
            {servicio:'Zona de entrenamiento', tipo_servicio:'propiedad', icono:'mdi-gamepad-circle'},
            {servicio:'Gimnasio', tipo_servicio:'propiedad', icono:'mdi-weight-lifter'},
            {servicio:'Wi-Fi', tipo_servicio:'propiedad', icono:'mdi-wifi'},
            {servicio:'Restaurant', tipo_servicio:'propiedad', icono:'mdi-silverware'},
            {servicio:'Lavanderia', tipo_servicio:'propiedad', icono:'mdi-tumble-dryer'},
            {servicio:'Balcon Privado', tipo_servicio:'habitacion', icono:'mdi-balcony'},
            {servicio:'Vista al lago', tipo_servicio:'habitacion', icono:'mdi-beach'},
            {servicio:'Habitacion Familiar', tipo_servicio:'habitacion', icono:'mdi-human-male-female-child'},
            {servicio:'Bañera de Hidromasaje', tipo_servicio:'habitacion', icono:'mdi-shower'},
            {servicio:'Senderismo', tipo_servicio:'propiedad', icono:'mdi-run'},
            {servicio:'Almacenamiento de equipaje', tipo_servicio:'propiedad', icono:'mdi-bag-suitcase'},
            {servicio:'Hotel para no fumadores', tipo_servicio:'propiedad', icono:'mdi-smoking-off'},
            {servicio:'Habitación para no fumadores', tipo_servicio:'habitacion', icono:'mdi-smoke'},
            {servicio:'Desayuno gratis', tipo_servicio:'propiedad', icono:'mdi-coffee'},
            {servicio:'Juegos de mesa', tipo_servicio:'propiedad', icono:'mdi-checkerboard'},
            {servicio:'Tienda de regalos', tipo_servicio:'propiedad', icono:'mdi-store'},
            {servicio:'Libros, DVD, música para niños', tipo_servicio:'habitacion', icono:'mdi-book-open-page-variant'},
            {servicio:'Recepción las 24 horas', tipo_servicio:'propiedad', icono:'mdi-timetable'}
        ];
    }, 
    listTiposHotel(){
        return [
            'Hotel',
            'Residencial',
            'Alojamiento',
            'Hostal',
            'Cabaña',
            'Casa Compartida'
          ];
    }, 
    listCategoriasHotel(){
        return [
            {value:1, text:'1 Estrella'},
            {value:2, text:'2 Estrellas'},
            {value:3, text:'3 Estrellas'},
            {value:4, text:'4 Estrellas'},
            {value:5, text:'5 Estrellas'}
          ]
    }, 
    listCategoriasNoticia(){
        return [
            'Política',
            'Deportiva',
            'Económica',
            'Cultural',
            'Social',
            'Farándula',
            'Científica',
            'Servicio Público'
          ];
    }
}