//Rédigez une fonction expandedForm qui écrive un nombre sous sa forme développée.

function expandedForm(nbre){
    if (nbre.toString().length < 4){
        step1 = nbre%10
        step2 = (nbre - nbre%10)/10;

        return nbre + ' = ' + step2 + '*10' + ' + ' + step1 + '*1' 
    }
    else if (nbre.toString().length >=4) {
        step1 = nbre%10
        step2 = (nbre - nbre%100)/100;
        step3 = nbre%100
        step4 = nbre%1000

        return nbre + ' = ' + step4 + '*1000' + ' + ' + step3 + '*100' + ' + ' + step2 + '*10 ' + step1 + '*1' 
    }

    
}



console.log(expandedForm(12)); 
console.log(expandedForm(42));
console.log(expandedForm(150));
console.log(expandedForm(2345));
console.log(2345%100);
console.log(expandedForm(70304));




/* expandedForm(12); // Should return '10 + 2*1'
expandedForm(42); // Should return '4*10 + 2*1'
expandedForm(70304); // Should return '7*10000 + 3*100 + 4*1' */