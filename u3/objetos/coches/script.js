 /*

        let a = new String();
        let b = new Number();
        let c = new Boolean();

        let cadena = new String("Hola");
        let cadena2 = "Hola";

        console.log(cadena === cadena2); // Triple === compara TIPO + VALOR
        console.log(typeof cadena);
        console.log(typeof cadena2);

        */

        let coche = {
            marca : "Ford",
            modelo : "Ka",
            color : "Rojo",
            puertas : 3,
            kms : 270000,
            automatico : false,
            propietario : {nombre : "Cristiano", apellido : "Ronaldo"}
        }

        let coche2 = new Object();
        coche2.marca = "Ferrari";
        coche2.modelo = "LaFerrari";
        coche2.color = "Rojo";
        coche2.puertas = 2;
        coche2.kms = 5;
        coche2.automatico = true;

        for (campo in coche){
            console.log(campo + ": " + coche[campo]);
        }
        
        console.log(coche["propietario"]["nombre"]); // MIRAR EXAMEN -- SE USA COMO UN ARRAY MULTIDIMENSIONAL ENTRECOMILLADO 
        console.log(coche["propietario"]["apellido"]); // MIRAR EXAMEN -- SE USA COMO UN ARRAY MULTIDIMENSIONAL ENTRECOMILLADO 