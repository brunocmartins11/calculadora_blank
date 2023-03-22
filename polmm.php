<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de Discos</title>

    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="index.css" />
</head>

<body>

    <nav class="navbar">
        <ul>
            <li><a href="index.php">Discos</a></li>
            <li><a href="retangulo.php">Chapas</a></li>
            <li><a href="polmm.php">Pol/mm</a></li>
        </ul>
    </nav>
    <br>
    <br>

    <center>
        <h2 style="font-family: 'Roboto', sans-serif; text-align: center; font-size: 30px"><B>CONVERSOR DE POLEGADAS PARA MILÍMETROS</B></h2>
        <p>Colocar ponto (.) ao invés de vírgula (,)</p>
        <br>

        <div class="container">
            <form action="polmm.php" method="POST">

                <div class="form-group col-sm-6 flex-column d-flex">
                    <label>Polegadas:</label>
                    <input type="text" class="form-control" id="pol1" name="pol1" placeholder="Insira o numerador">
                </div>
                <hr>
                <div class="form-group col-sm-6 flex-column d-flex">
                    <input type="text" class="form-control" id="pol2" name="pol2" placeholder="Insira o denominador">
                </div>
                <div>
                    <button type="submit" class="btn btn-outline-success" id="calcular" name="calcular" style="border-radius: 15px; margin-top: 25px;">Calcular</button>
                </div>
            </form>
        </div>
        <br>
        <br>
        <?php

        /* Criado por Bruno Carvalho Martins */
        /* GitHub: https://github.com/brunocmartins11 */

        error_reporting(0);

        $calcular = $_POST['calcular'];

        if (isset($calcular)) {


            $pol1 = $_POST['pol1'];
            $pol2 = $_POST['pol2'];
            
            $div = $pol1 / $pol2;
            $mm = $div * 25.4;


            echo "<h4>Resultado em milímetros (mm):</h4>";
            echo "<h5>" . $mm . " mm</h5>";
        };


        ?>

        <br>

    </center>
    </center>
</body>

</html>