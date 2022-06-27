import { writable } from "svelte/store";

export let mostrar_sequencia = writable(false)
export let exercicios_selecionados = writable([])

export const abdominal = writable({
    name: 'Abdominal',
    icon: "../icons/abdominal.png"
})
export const afundo_barra = writable({
    name: 'Afundo de Barra',
    icon: "../icons/afundo_barra.png"
})
export const agachamento_barra = writable({
    name: 'Agachamento de Barra',
    icon: "../icons/agachamento_barra.png"
})
export const alongamento = writable({
    name: 'Alongamento',
    icon: "../icons/alongamento.png"
})
export const barra_fixa = writable({
    name: 'Barra Fixa',
    icon: "../icons/barra_fixa.png"
})
export const bicicleta = writable({
    name: 'Bicileta',
    icon: "../icons/bicicleta.png"
})
export const corrida = writable({
    name: 'Corrida',
    icon: "../icons/corrida.png"
})
export const desenvolvimento_halteres_ombro = writable({
    name: 'Desenvolvimento com Halteres para Ombro',
    icon: "../icons/desenvolvimento_halteres_ombro.png"
})
export const desenvolvimento_ombros_barra = writable({

    name: 'Desenvolvimento de Ombros com Barra',
    icon: "../icons/desenvolvimento_ombros_barra.png"
})
export const elevacao_frontal_barra = writable({
    name: 'Elevação Frontal com Barra',
    icon: "../icons/elevacao_frontal_barra.png"
})
export const elevacao_lateral_halteres = writable({
    name: 'Elevação Lateral com Halteres',
    icon: "../icons/elevacao_lateral_halteres.png"
})
export const elevacao_panturrilha = writable({
    name: 'Elevação de Panturrilha',
    icon: "../icons/elevacao_panturrilha.png"
})
export const elevacao_pelvica = writable({
    name: 'Elevação Pélvica',
    icon: "../icons/elevacao_pelvica.png"
})
export const flexao_bracos = writable({
    name: 'Flexão de Braços',
    icon: "../icons/flexao_bracos.png"
})
export const leg_45 = writable({
    name: 'Leg 45°',
    icon: "../icons/leg_45.png"
})
export const levantamento_halteres_biceps = writable({
    name: 'Levantamento com Halteres para Bíceps',
    icon: "../icons/levantamento_halteres_biceps.png"
})
export const levantamento_terra = writable({
    name: 'Levantamento Terra',
    icon: "../icons/levantamento_terra.png"
})
export const pular_corda = writable({
    name: 'Pular Corda',
    icon: "../icons/pular_corda.png"
})
export const puxada_alta = writable({
    name: 'Puxada Alta',
    icon: "../icons/puxada_alta.png"
})
export const puxada_unilateral= writable({
    name: 'Puxada Unilateral',
    icon: "../icons/puxada_unilateral.png"
})
export const rosca_concentrada = writable({
    name: 'Rosca Concentrada',
    icon: "../icons/rosca_concentrada.png"
})
export const rosca_invertida_antebraco = writable({
    name: 'Rosca Invertida com Antebraço',
    icon: "../icons/rosca_invertida_antebraco.png"
})
export const  supino_barra = writable({
    name: 'Supino na Barra',
    icon: "../icons/supino_barra.png"
})
export const supino_inclinado_halteres = writable({
    name: 'Supino Inclinado com Halteres',
    icon: "../icons/supino_inclinado_halteres.png"
})