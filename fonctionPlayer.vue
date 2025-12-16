<template>
<script setup lang ='js'>
import {ref} from vue
<div class="mb-3">

</div>

const dmgAttA
const dmgAttP
const PvPlayer = 100
const PvAdversaire = 100;

attackPlayer(){
    const dmgAttP = Math.floor(Math.random() * 15) + 10
    if (dmgAttP>PvPlayer) {
        PvPlayer = PvPlayer - dmgAttP;
    }
    else {
        PvPlayer = 0;
    }
    this.log.push(Monstre Attaque : -${dmgAttP} pts)
}
attaqueAdversaire() {
      const dmgAttA = Math.floor(Math.random() * 15)
      if (dmgAttA>PvAdversaire) {
        PvAdversaire = PvAdversaire - dmgAttA;
    }
    else {
        PvAdversaire = 0;
    }
    
      this.log.push(Monstre Attaque : -${dmgAttA} pts)
}
attaqueAdversaireSpe() {
      const dmgAttA = Math.floor(Math.random() * 15) + 5
      if (dmgAttA>PvAdversaire) {
        PvAdversaire = PvAdversaire - dmgAttA;
    }
    else {
        PvAdversaire = 0;
    }
    
      this.log.push(Monstre Attaque : -${dmgAttA} pts)
}
healPlayer() {
      this.currentRound++;
      const healValue = Math.floor(Math.random() * (15 - 8)) + 8;

      // S'assurer que la vie ne dépasse pas 100
      if (PvPlayer + healValue > 100) {
        PvPlayer = 100;
        attaqueAdversaire(dmgAttA=0)
      } else {
        PvPlayer += healValue;
        attaqueAdversaire(dmgAttA=0)
      }

</script>
</template>