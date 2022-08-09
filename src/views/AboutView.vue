<script>
import { SERVER_URI } from '../../env'

export default {
  computed: {
    urlPDF() {
      return `${SERVER_URI}/curriculo.pdf`
    },
  },
}
</script>

<template>
  <div class="about">
    <v-row class="pa-10">
      <pre>
    Leandro Huber,
    Desenvolvedor full Stack, experiência no desenvolvimento de APIs e sistemas Web
    Ensino Superior incompleto em Análise e desenvolvimento de sistemas – UNIASSELVI
    51-985558361 - emaildohuber@gmail.com
    Dário da Rosa, 300, São João do Rio Vermelho, 988060-383, Florianópolis – SC
    </pre
      >
    </v-row>

    <v-row>
      <v-col class="ml-15">
        <v-btn :href="urlPDF" target="_blank">
          Download Curriculo em PDF
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

 