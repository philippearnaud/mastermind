QUnit.module( "Choix de l'ordinateur computer" );

QUnit.test("Fonction computed()", function(assert) {
    expect( 12 );
     for(var i = 0 ; i <4 ; i++) {
        assert.notEqual(computed()[i], undefined, "L'ordinateur n'a pas choisi un élement de type undefined");
        assert.notEqual(computed()[i], null, "L'ordinateur n'a pas choisi un élément de type null"); assert.notEqual(computed()[i], "", "L'ordinateur n'a pas choisi une chaîne de caractères vide");
     }
});
QUnit.module( "Choix de l'utilisateur" );
    QUnit.test("fonction ask()", function(assert) {
    expect( 12 );
    for(var j = 0; j < 4; j++) {
        assert.notEqual(ask()[j], undefined, "L'utilisateur n'a pas choisi un élément de type udefined");
        assert.notEqual(ask()[j], null, "L'utilisateur n'a pas choisi un élement de type null");
        assert.notEqual(ask()[j], "", "L'ordinateur n'a pas choisi une chaîne de caractères vides");
    }
});
    QUnit.test("fonction test(user_choice)", function(assert) {
    expect( 3 );
        assert.notEqual(test(ask), undefined, "Test ne renvoie pas undefined");
        assert.notEqual(test(ask), null, "Test ne renvoie pas null");
        assert.notEqual(test(ask), "", "Test ne renvoie pas une chaîne de caractères");
});


