let kiekTuri = prompt('Kiek plotu jau turi?', ''), kiekPerks = prompt('Kiek plotu perki? \(negalima daugiau 5\)', '');

if(kiekPerks > 5) {
    alert('Per daug nori.')

} else if (kiekPerks <= 5) {
   let atsakymas = (3 + kiekTuri / 3) * kiekPerks;
   alert('Už ' + kiekPerks + ' plotus mokėsi ' + Math.round(atsakymas) + ' deimantus');
}

else {
    alert('kažkas ne taip')
}

