<template>
  <app-crud
    :dados="$store.state.cursos"
    carregadorDados="loadCursos"
    acaoSalvar="salvarCurso"
    acaoRemover="removerCurso"
    :lista-campos="campos"/>
</template>

<script>
import { mapState } from 'vuex'

export default {
  mounted () {
    this.$store.dispatch('loadInstrutores')
  },
  computed: {
    ...mapState(['instrutores']),
    campos () {
      return [
        {
          text: '#',
          align: 'left',
          value: 'id',
          allowForm: false
        }, {
          text: 'Nome',
          align: 'left',
          value: 'nome',
          allowForm: true,
          form: {
            type: 'v-text-field',
            prependIcon: 'people',
            rules: [
              v => !!v || 'Nome é um campo obrigatório!'
            ]
          }
        }, {
          text: 'Duração',
          align: 'left',
          value: 'duracao',
          allowForm: true,
          form: {
            type: 'v-text-field',
            prependIcon: '',
            rules: [
              v => !!v || 'Duração é um campo obrigatório!'
            ]
          }
        }, {
          text: 'Instrutor',
          align: 'left',
          value: 'instrutor_display',
          allowForm: false
        }, {
          text: 'Instrutor',
          align: 'left',
          value: 'instrutor',
          allowForm: true,
          allowTable: false,
          form: {
            type: 'v-select',
            items: this.instrutores,
            itemText: 'nome',
            itemValue: 'id',
            prependIcon: 'person',
            rules: [
              v => !!v || 'Instrutor é um campo obrigatório!'
            ]
          }
        }, {
          text: 'Opçoes',
          align: 'center',
          value: '',
          allowForm: false
        }
      ]
    }
  }
}
</script>
