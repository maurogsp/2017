import axios from 'axios';
export default {
	cargarNoticia(noticia) {
		const promesa = axios.post('http://localhost:8080/news',{
	  "title" : noticia.getTitle(),
	  "body" : noticia.getBody(),
	  "date" : noticia.getFecha(),
	  "reporter" : noticia.getReporter(),
	  "category" : noticia.getCategory(),
});
		return promesa;
	},
	traerNoticias() {
		const promesa = axios.get('http://localhost:8080/news');
		return promesa;
	},
	traerCategorias() {
		const promesa = axios.get('http://localhost:8080/categories');
		return promesa;
	},
	traerReporteros() {
		const promesa = axios.get('http://localhost:8080/reporters');
		return promesa;
	},
	traerNoticia(link){
		const promesa = axios.get(link);
		return promesa;
		},
	traerCategoria(link)
		{
			const promesa = axios.get(link);
			return promesa;

		},
		traerReportero(link)
			{
				const promesa = axios.get(link);
				return promesa;

			},
		noticiasCategoria(link)
		{
			const promesa = axios.get(link);
			return promesa;
		},
		storeComentario(lista){
			localStorage.setItem('comentarios', JSON.stringify(lista));
		},
		traerComentarios(){
			let storeComentarios = localStorage.getItem('comentarios');
			if(storeComentarios != null)
			{
				return JSON.parse(storeComentarios);
			}
			else
			return [];
		}
}
