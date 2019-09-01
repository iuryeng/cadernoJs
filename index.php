<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Sistema de Gestão CURSOS-FIC-POLOCG</title>
	<style type="text/css">
		/*Estilos Gerais */
		.container {
			width: 50%;
			margin: 0 auto;
			padding: 10px;
			
		}
		/*Estilos Formulario*/
		.areaPesquisa{
            
			border-radius: 5px;
			background-color: #8B8682;
			padding: 10px;
		}
		.titulo{

	        border-radius: 5px;
		    width: 50%;
			margin: 0 auto;
		


		}
		input{

			padding: 10px;
			margin: 8px 0;
			border: 1px solid #000;
			border-radius: 4px;
		}
		input[type=text]{

			width: 15%;
		}
		input[type=submit]{
			width: 30%;
			background-color: #2E8B57;
			color : #FFF;
			cursor: pointer;
		}

/*Estilo da Tabela */
		table{
			border-radius: 5px;
			
			width: 100%;
			margin-top: 10px;
		}
		table th{

			border-radius: 5px;
			background-color: #2E8B57;
			color: #FFF;
			height: 30px;
		}

	</style>


</head>
<body>
   
	<div class="container">
		<div class ="titulo">
			<h1>Sistema de Gestão - FIC </h1>
		    <h2>EEEMP Dr. Elpídio de Almeida</h2>
		</div>
		<div class="areaPesqu-isa">
			<form = action="" method="POST">
				<input type="text" name="data" placeholder="mes/ano">
				<input type="submit" name="submit" value="Buscar">
			</form>
	    </div>

<?php  

	include "conexao.php";

	if ($_SERVER['REQUEST_METHOD'] == "POST") {
		//echo "<h1> Recebeu a data : " . $_POST['data'] . "</h1";
		$dataPesquisa = $_POST['data'];
		$dataArray = explode("/", $dataPesquisa);

		$dataPesquisa = $dataArray[1] . "-" . $dataArray[0];

		echo"data da pesquisa: " . $dataPesquisa;





		$sql = "SELECT * FROM tbdados WHERE data_hora LIKE '%" . $dataPesquisa ."%'"; // LIKE '%2017-09-15'

	}else {
			//echo "<h1> Não recebeu nada, vai mostrar mes atual</h1";
			$dataAtual = date('Y-m');
			// echo "Mes Atual:" . $dataAtual ;
			$sql = "SELECT * FROM tbdados WHERE data_hora LIKE '%" . $dataAtual ."%'"; // LIKE '%2017-09-15'
		}

		$stmt = $PDO->prepare($sql);	
		$stmt ->execute();
		echo "<table border=\"1\">";
		echo "<tr>
			<th> Sensor1</th>
			<th> Sensor2</th>
			<th> Tag</th>
			<th>Data/Hora</th>
		</tr>";

		while ($linha = $stmt->fetch(PDO::FETCH_OBJ)){
			$timestamp = strtotime($linha->data_hora);
			$dataTabela = date('d/m/Y H:i:s', $timestamp);
		echo "<tr>";
			echo"<td>" . $linha->sensor1 . "</td>";
			echo"<td>" . $linha->sensor2 . "</td>";
			echo"<td>" . $linha->sensor3 . "</td>";
			echo"<td>" . $dataTabela ."</td>";
		echo "</tr>";

		}

		echo "</table";
	
?>
</div>

</body>
</html>