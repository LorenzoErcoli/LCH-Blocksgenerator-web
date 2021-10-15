color_palette = {
    red: "#F54049",
    dark_red: "#360003",
	green: "#92C325",
	dark_green: "#394D10",
	blue: "#1D8DDD",
	dark_blue: "#0D1829",
	purple: "#9F59D9",
	dark_purple : "#49004D",
	orange: "#FF9500",
	dark_orange: "#593A00",
	black: "#000000",
	white: "#ffffff"
}


CreateClick()


function canva_select(){
	size_canvas_value = document.getElementById("size_canvas").value;

	if(size_canvas_value == "Formato_libero"){
		document.getElementById("free_size").style.display = "block"
	}else{
		document.getElementById("free_size").style.display = "none"
	}

}	

function shape_select(){
	size_shape_value = document.getElementById("size_shape").value;

	if(size_shape_value == "small"){
		inc_size_shape = 1
	}else if(size_shape_value == "medium"){
		inc_size_shape = 1.8
	}else{
		inc_size_shape = 3
	}

}

function color_select(){

	if (document.getElementById('all').checked) {
  		color_value = [color_palette.red,color_palette.green,color_palette.blue,color_palette.purple,color_palette.orange]
  		logo_value = true
  		background_value = color_palette.white
	}else if(document.getElementById('purple').checked) {
  		color_value = [color_palette.purple]
  		logo_value = false
  		background_value = color_palette.dark_purple
	}else if(document.getElementById('green').checked) {
  		color_value = [color_palette.green]
  		logo_value = false
  		background_value = color_palette.dark_green
	}else if(document.getElementById('orange').checked) {
  		color_value = [color_palette.orange]
  		logo_value = false
  		background_value = color_palette.dark_orange
	}else if(document.getElementById('red').checked) {
  		color_value = [color_palette.red]
  		logo_value = false
  		background_value = color_palette.dark_red
	}



}

function CreateCanva(){
	size_canvas_value = document.getElementById("size_canvas").value;

	if(size_canvas_value == "1x1"){
		width_canvas = 800;
		heigth_canvas = 800
	}else if(size_canvas_value == "3x2"){
		width_canvas = 1000;
		heigth_canvas = 666;
	}else if(size_canvas_value == "16x9"){
		width_canvas = 800;
		heigth_canvas = 450;
	}else if(size_canvas_value == "Formato_libero"){
		width_canvas = parseInt(document.getElementById("wdt_form").value);
		heigth_canvas = parseInt(document.getElementById("hgt_form").value);
	}

}


function CreateClick(){

var canva = document.getElementById("world-1");
while (canva.firstChild) {
  canva.removeChild(canva.firstChild);
}

color_select()
shape_select()
CreateCanva()
CreateBox()

}

function Download(){
var world = document.getElementById("world-1");
var canva_img = world.firstChild
var image = canva_img.toDataURL('image/jpeg', 1.0)

const link = document.createElement('a')
  link.href = image
  link.download = 'LCH - Canvas'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)


}



