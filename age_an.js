/*
J'ai un chat et un chien que j'ai eu en même temps ils s'appellent : kitten et Puppy.
C'était il y a quelques humanYears.
Retourner leur âge respectif tel que : [humanYears,catYears,dogYears] 

_NOTES:_

humanYears >= 1

*Equivalence des années pour le chat :*

* 15 années de chat pour la première année humaine
* +9 années de chat pour la seconde année humaine
* +4 année de chat pour chaque année humaine suivante.

*Equivalence des années pour le chien :*

* 15 années chien pour la première année humaine
* +9 années chien pour la seconde année humaine
* +5 années chien pour chaque année humaine suivante.
*/
function ageAn(a){
    age = a;
    age_chat = 0;
    age_chien = 0;
    if (age===1){
        age_chat = age * 15;
        age_chien = age * 15;
       
        console.log ('Age humain : ' + age + ', age du chat : ' + age_chat + ', age du chien : ' + age_chien);
    }
    else if (age===2){
        age_chat = 15+9;
        age_chien = 15+9;

        console.log ('Age humain : ' + age + ', age du chat : ' + age_chat + ', age du chien : ' + age_chien);
    }
    else if (age > 2){
        age_chat = (15+9)+(4*(age-2));
        age_chien = (15+9)+(5*(age-2));

        console.log ('Age humain : ' + age + ', age du chat : ' + age_chat + ', age du chien : ' + age_chien);
    }
    else {
        console.log("L'age n'est pas correct")
    }
}

ageAn(-1);
ageAn(0);
ageAn(1);
ageAn(2);
ageAn(5);
ageAn(17);