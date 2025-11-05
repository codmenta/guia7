// ============================================
// GUÍA 7 - INTRODUCCIÓN A JAVASCRIPT
// SOLUCIONES DETALLADAS
// ============================================

console.log("=== INICIO DEL PROGRAMA ===\n");

// ============================================
// ACTIVIDAD 1: TIPOS PRIMITIVOS
// ============================================
console.log("--- ACTIVIDAD 1: Tipos Primitivos ---");

// Number - Representa valores numéricos
let edad = 25;
console.log("Number (edad):", edad, "- Tipo:", typeof edad);

// String - Representa cadenas de texto
let nombre = "Juan";
console.log("String (nombre):", nombre, "- Tipo:", typeof nombre);

// Boolean - Representa valores de verdad
let esMayorDeEdad = true;
console.log("Boolean (esMayorDeEdad):", esMayorDeEdad, "- Tipo:", typeof esMayorDeEdad);

// Null - Representa ausencia intencional de valor
let coche = null;
console.log("Null (coche):", coche, "- Tipo:", typeof coche);

// Undefined - Variable declarada pero no asignada
let direccion;
console.log("Undefined (direccion):", direccion, "- Tipo:", typeof direccion);

// NaN - Not a Number
let resultadoInvalido = 0 / 0;
console.log("NaN (resultadoInvalido):", resultadoInvalido, "- Tipo:", typeof resultadoInvalido);

console.log("\n");

// ============================================
// ACTIVIDAD 2: ORDEN DE OPERACIONES (PEMDAS)
// ============================================
console.log("--- ACTIVIDAD 2: Orden de Operaciones (PEMDAS) ---");

// Explicación paso a paso de cada operación
let resultado1 = (3 + 2) * (10 / 2);
console.log("resultado1 = (3 + 2) * (10 / 2)");
console.log("  Paso 1: (3 + 2) = 5");
console.log("  Paso 2: (10 / 2) = 5");
console.log("  Paso 3: 5 * 5 = 25");
console.log("  Resultado:", resultado1);

let resultado2 = 3 + 2 * 10 / 2;
console.log("\nresultado2 = 3 + 2 * 10 / 2");
console.log("  Paso 1: 2 * 10 = 20 (multiplicación primero)");
console.log("  Paso 2: 20 / 2 = 10 (división de izquierda a derecha)");
console.log("  Paso 3: 3 + 10 = 13 (suma al final)");
console.log("  Resultado:", resultado2);

let resultado3 = (3 + 2) * 10 / 2;
console.log("\nresultado3 = (3 + 2) * 10 / 2");
console.log("  Paso 1: (3 + 2) = 5 (paréntesis primero)");
console.log("  Paso 2: 5 * 10 = 50 (multiplicación)");
console.log("  Paso 3: 50 / 2 = 25 (división)");
console.log("  Resultado:", resultado3);

console.log("\n");

// ============================================
// ACTIVIDAD 3: OPERACIONES BÁSICAS
// ============================================
console.log("--- ACTIVIDAD 3: Operaciones Básicas ---");

// Declarar tres variables numéricas
let a = 15;
let b = 5;
let c;

console.log("Variables iniciales: a =", a, ", b =", b);

// a. Suma de a y b
c = a + b;
console.log("Suma: a + b =", a, "+", b, "=", c);

// b. Resta de a y b
c = a - b;
console.log("Resta: a - b =", a, "-", b, "=", c);

// c. Multiplicación de a y b
c = a * b;
console.log("Multiplicación: a * b =", a, "*", b, "=", c);

// d. División de a y b
c = a / b;
console.log("División: a / b =", a, "/", b, "=", c);

console.log("\n");

// ============================================
// ACTIVIDAD 4: OPERADORES DE ASIGNACIÓN COMPUESTA
// ============================================
console.log("--- ACTIVIDAD 4: Operadores de Asignación Compuesta ---");

let numero = 10;
console.log("Valor inicial:", numero);

numero += 5; // numero = numero + 5
console.log("Después de += 5:", numero, "(equivalente a numero = numero + 5)");

numero -= 3; // numero = numero - 3
console.log("Después de -= 3:", numero, "(equivalente a numero = numero - 3)");

numero *= 2; // numero = numero * 2
console.log("Después de *= 2:", numero, "(equivalente a numero = numero * 2)");

numero /= 4; // numero = numero / 4
console.log("Después de /= 4:", numero, "(equivalente a numero = numero / 4)");

numero %= 5; // numero = numero % 5
console.log("Después de %= 5:", numero, "(equivalente a numero = numero % 5)");

console.log("\n");

// ============================================
// ACTIVIDAD 5: OPERADORES DE INCREMENTO Y DECREMENTO
// ============================================
console.log("--- ACTIVIDAD 5: Operadores de Incremento y Decremento ---");

// Incremento
let x = 5;
console.log("Valor inicial de x:", x);
console.log("++x (prefijo - incrementa antes):", ++x, "| x ahora es:", x);

x = 5; // Reiniciar
console.log("\nReiniciamos x a:", x);
console.log("x++ (sufijo - incrementa después):", x++, "| x ahora es:", x);

// Decremento
let y = 5;
console.log("\nValor inicial de y:", y);
console.log("--y (prefijo - decrementa antes):", --y, "| y ahora es:", y);

y = 5; // Reiniciar
console.log("\nReiniciamos y a:", y);
console.log("y-- (sufijo - decrementa después):", y--, "| y ahora es:", y);

console.log("\n");

// ============================================
// ACTIVIDAD 6: const, let y var
// ============================================
console.log("--- ACTIVIDAD 6: const, let y var ---");

// Usando let - permite reasignación
let miVariable = "Valor inicial";
console.log("let miVariable =", miVariable);
miVariable = "Nuevo valor";
console.log("Después de reasignar:", miVariable);

// Usando const - NO permite reasignación
const miConstante = "Valor constante";
console.log("\nconst miConstante =", miConstante);
console.log("Intentando reasignar una constante...");
try {
    // Esto causará un error
    // miConstante = "Nuevo valor"; 
    console.log("ERROR: No se puede reasignar una constante!");
    console.log("Si descomentamos la línea, obtendremos: TypeError: Assignment to constant variable.");
} catch (error) {
    console.log("Error capturado:", error.message);
}

console.log("\n");

// ============================================
// ACTIVIDAD 7: CONVENCIONES DE NOMENCLATURA
// ============================================
console.log("--- ACTIVIDAD 7: Convenciones de Nomenclatura ---");

// Nombres de Variables (camelCase)
let nombreUsuario = "María García";
let edadUsuario = 28;
let esEstudianteActivo = true;

console.log("Variables con camelCase:");
console.log("  nombreUsuario:", nombreUsuario);
console.log("  edadUsuario:", edadUsuario);
console.log("  esEstudianteActivo:", esEstudianteActivo);

// Nombres de Funciones (camelCase, verbales)
function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

function mostrarMensaje(mensaje) {
    console.log("  Mensaje:", mensaje);
}

console.log("\nFunciones con camelCase:");
let notasEstudiante = [8.5, 9.0, 7.5, 8.0, 9.5];
console.log("  Notas:", notasEstudiante);
console.log("  Promedio calculado:", calcularPromedio(notasEstudiante).toFixed(2));
mostrarMensaje("¡Excelente desempeño!");

console.log("\n");

// ============================================
// ACTIVIDAD 8: MANIPULACIÓN DE STRINGS
// ============================================
console.log("--- ACTIVIDAD 8: Manipulación de Strings ---");

// Índices de los Strings
let texto = "JavaScript";
console.log("Texto original:", texto);
console.log("Carácter en índice 0:", texto.charAt(0));
console.log("Carácter en índice 4:", texto[4]);
console.log("Longitud del texto:", texto.length);

// Métodos de Búsqueda
let frase = "JavaScript es genial y JavaScript es poderoso";
console.log("\nFrase:", frase);
console.log("indexOf('es'):", frase.indexOf("es"));
console.log("lastIndexOf('JavaScript'):", frase.lastIndexOf("JavaScript"));
console.log("includes('genial'):", frase.includes("genial"));
console.log("includes('Python'):", frase.includes("Python"));

// Métodos de Reemplazo
let textoOriginal = "JavaScript es genial";
console.log("\nTexto original:", textoOriginal);
console.log("replace('genial', 'increíble'):", textoOriginal.replace("genial", "increíble"));

let textoConA = "JavaScript es un lenguaje de programación";
console.log("\nTexto:", textoConA);
console.log("replaceAll('a', 'A'):", textoConA.replaceAll("a", "A"));

// Modificación del Casing
let palabraMixta = "JavaScript";
console.log("\nPalabra original:", palabraMixta);
console.log("toUpperCase():", palabraMixta.toUpperCase());
console.log("toLowerCase():", palabraMixta.toLowerCase());

// Demostración de inmutabilidad
console.log("\nDemostración de Inmutabilidad:");
console.log("Palabra original después de todas las operaciones:", palabraMixta);
console.log("Los strings son inmutables - el original no cambia");

console.log("\n");

// ============================================
// EJEMPLOS ADICIONALES
// ============================================
console.log("--- EJEMPLOS ADICIONALES ---");

// Concatenación de strings
let primerNombre = "Ana";
let apellido = "Rodríguez";
let nombreCompleto = primerNombre + " " + apellido;
console.log("Concatenación:", nombreCompleto);

// Template literals
let ciudad = "Popayán";
let mensajeBienvenida = `Bienvenido a ${ciudad}, ${nombreCompleto}!`;
console.log("Template literal:", mensajeBienvenida);

// Más métodos de strings
let espaciado = "   texto con espacios   ";
console.log("Original: '" + espaciado + "'");
console.log("trim(): '" + espaciado.trim() + "'");

let textoParaDividir = "manzana,naranja,plátano,uva";
console.log("\nTexto:", textoParaDividir);
console.log("split(','):", textoParaDividir.split(","));

console.log("\n=== FIN DEL PROGRAMA ===");
