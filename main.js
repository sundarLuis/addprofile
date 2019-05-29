const app = new Vue({
    el:'#app',
    data:{
        estado:true,
        titulo:'Presentacion',
        subtitulo:'Perfil personal',
        contenido:'Me considero un aprendiz, una persona muy talentosa y honesto, me gusta trasarme metas y objetivos',
        misApasiones:['basquet','fornite','Rap'],
        objetoHabilidades:[
            {id:1, nombre:'html',descripcion:'intermedio',porcentaje:80},
            {id:2, nombre:'css',descripcion:'intermedio',porcentaje:50},
            {id:3, nombre:'js',descripcion:'intermedio',porcentaje:70},
        ],
        nuevaHabilidad:'',
        nuevodescripcion:'',
        estado_desarrollo:'',
    },
    methods:{
        agregarHabilidad(){
            this.objetoHabilidades.push({
                id:1, nombre:this.nuevaHabilidad,descripcion:this.nuevodescripcion, cantidad:0
            });
            this.nuevaHabilidad='',
            this.nuevodescripcion=''
        },
        estado(){
            if (estado = true) {
                this.estado_desarrollo='d-block'
            } else {
                this.estado_desarrollo='d-none'
            }
        },
    },
    created(){
        estado()
    }
})