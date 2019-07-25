const app = new Vue({
    el: '#app',
    data: {
        titulo:'Hola mundo con vue',
        heroes: ['wolverine','doctor-x','quicksilver'],
        armas: [
            {nombre:'adamantium', poder:10},
            {nombre:'Mente', poder:8},
            {nombre:'Velocidad', poder:2},

        ],
        NuevaCaracteristica: '',
        total:0
        
    },
    methods: {
        agregarCaracterisca(){
            this.armas.push({
                nombre: this.NuevaCaracteristica, poder:0
            })
            this.NuevaCaracteristica = '';
        },

    },
    computed: {
        sumarCaracteristica(){
            this.total = 0;
            for(arma of this.armas){
                this.total = this.total + arma.poder;
            }
            return this.total;
        }
    },
})