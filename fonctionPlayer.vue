<template>
<script setup lang ='js'>
import {ref} from vue
<div class="mb-3">

</div>

const dmgAttA
const dmgAttP
const PvPlayer
const PvAdversaire

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

</script>
</template>