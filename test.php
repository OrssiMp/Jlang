<?php
/**
 * Implémentation de la fonction isset() de PHP
 * 
 * En PHP, isset() vérifie si une variable est définie et n'est pas null.
 * Elle peut être utilisée avec des tableaux multidimensionnels.
 */

// Exemples d'utilisation de isset() en PHP

// 1. Variables simples
$var1 = "test";
$var2 = null;

var_dump(isset($var1));  // bool(true)
var_dump(isset($var2));  // bool(false)
var_dump(isset($var3));  // bool(false) - variable non définie

// 2. Tableaux
$array = [
    'a' => 1,
    'b' => null,
    'c' => [
        'd' => 'test',
        'e' => null
    ]
];

var_dump(isset($array['a']));        // bool(true)
var_dump(isset($array['b']));        // bool(false) - valeur null
var_dump(isset($array['c']['d']));   // bool(true)
var_dump(isset($array['c']['e']));   // bool(false) - valeur null
var_dump(isset($array['x']));        // bool(false) - clé inexistante
var_dump(isset($array['c']['x']));   // bool(false) - clé imbriquée inexistante

// 3. Propriétés d'objets
class Test {
    public $prop1 = 'test';
    public $prop2 = null;
}

$obj = new Test();
var_dump(isset($obj->prop1));  // bool(true)
var_dump(isset($obj->prop2));  // bool(false) - propriété null
var_dump(isset($obj->prop3));
function add(){
    return 1+1;
};
var_dump(function_exists(add()));
// bool(false) - propriété inexistante

// function_exists()
