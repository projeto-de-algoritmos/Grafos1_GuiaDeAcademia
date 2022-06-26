<script>
    import { exercicios_selecionados } from '../store';
    import { abdominal } from '../store'
    import { afundo_barra } from '../store'
    import { agachamento_barra } from '../store'
    import { alongamento } from '../store'
    import { barra_fixa } from '../store'
    import { bicicleta } from '../store'
    import { corrida } from '../store'
    import { desenvolvimento_halteres_ombro } from '../store'
    import { desenvolvimento_ombros_barra } from '../store'
    import { elevacao_frontal_barra } from '../store'
    import { elevacao_lateral_halteres } from '../store'
    import { elevacao_panturrilha } from '../store'
    import { elevacao_pelvica } from '../store'
    import { flexao_bracos } from '../store'
    import { leg_45 } from '../store'
    import { levantamento_halteres_biceps } from '../store'
    import { levantamento_terra } from '../store'
    import { pular_corda } from '../store'
    import { puxada_alta } from '../store'
    import { puxada_unilateral } from '../store'
    import { rosca_concentrada } from '../store'
    import { rosca_invertida_antebraco } from '../store'
    import { supino_barra } from '../store'
    import { supino_inclinado_halteres } from '../store'

</script>

<main>
    <button>
        Gerar Sequência de Treino
    </button>
    <div>
        <label>
            <input type="checkbox" value={$abdominal.name} bind:group={$exercicios_selecionados}>
            {$abdominal.name}
        </label>
        <label>
            <input type="checkbox" value={$afundo_barra.name} bind:group={$exercicios_selecionados}>
            {$afundo_barra.name}
        </label>
        <label>
            <input type="checkbox" value={$agachamento_barra.name} bind:group={$exercicios_selecionados}>
            {$agachamento_barra.name}
        </label>
        <label>
            <input type="checkbox" value={$alongamento.name} bind:group={$exercicios_selecionados}>
            {$alongamento.name}
        </label>
        <label>
            <input type="checkbox" value={$barra_fixa.name} bind:group={$exercicios_selecionados}>
            {$barra_fixa.name} 
        </label>
        <label>
            <input type="checkbox" value={$bicicleta.name} bind:group={$exercicios_selecionados}>
            {$bicicleta.name}
        </label>
    </div>
    <div>
        <label>
            <input type="checkbox" value={$corrida.name} bind:group={$exercicios_selecionados}>
            {$corrida.name}
        </label>
        <label>
            <input type="checkbox" value={$desenvolvimento_halteres_ombro.name} bind:group={$exercicios_selecionados}>
            {$desenvolvimento_halteres_ombro.name}
        </label>
        <label>
            <input type="checkbox" value={$desenvolvimento_ombros_barra.name} bind:group={$exercicios_selecionados}>
            {$desenvolvimento_ombros_barra.name}
        </label>
        <label>
            <input type="checkbox" value={$elevacao_frontal_barra.name} bind:group={$exercicios_selecionados}>
            {$elevacao_frontal_barra.name}
        </label>
        <label>
            <input type="checkbox" value={$elevacao_lateral_halteres.name} bind:group={$exercicios_selecionados}>
            {$elevacao_lateral_halteres.name}
        </label>
        <label>
            <input type="checkbox" value={$elevacao_panturrilha.name} bind:group={$exercicios_selecionados}>
            {$elevacao_panturrilha.name}
        </label>
    </div>
    <div>
        <label>
            <input type="checkbox" value={$elevacao_pelvica.name} bind:group={$exercicios_selecionados}>
            {$elevacao_pelvica.name}
        </label>
        <label>
            <input type="checkbox" value={$flexao_bracos.name} bind:group={$exercicios_selecionados}>
            {$flexao_bracos.name}
        </label>
        <label>
            <input type="checkbox" value={$leg_45.name} bind:group={$exercicios_selecionados}>
            {$leg_45.name}
        </label>
        <label>
            <input type="checkbox" value={$levantamento_halteres_biceps.name} bind:group={$exercicios_selecionados}>
            {$levantamento_halteres_biceps.name}
        </label>
        <label>
            <input type="checkbox" value={$levantamento_terra.name} bind:group={$exercicios_selecionados}>
            {$levantamento_terra.name}
        </label>
        <label>
            <input type="checkbox" value={$pular_corda.name} bind:group={$exercicios_selecionados}>
            {$pular_corda.name}
        </label>
    </div>
    <div>
        <label>
            <input type="checkbox" value={$puxada_alta.name} bind:group={$exercicios_selecionados}>
            {$puxada_alta.name}
        </label>
        <label>
            <input type="checkbox" value={$puxada_unilateral.name} bind:group={$exercicios_selecionados}>
            {$puxada_unilateral.name}
        </label>
        <label>
            <input type="checkbox" value={$rosca_concentrada.name} bind:group={$exercicios_selecionados}>
            {$rosca_concentrada.name}
        </label>
        <label>
            <input type="checkbox" value={$rosca_invertida_antebraco.name} bind:group={$exercicios_selecionados}>
            {$rosca_invertida_antebraco.name}
        </label>
        <label>
            <input type="checkbox" value={$supino_barra.name} bind:group={$exercicios_selecionados}>
            {$supino_barra.name}
        </label>
        <label>
            <input type="checkbox" value={$supino_inclinado_halteres.name} bind:group={$exercicios_selecionados}>
            {$supino_inclinado_halteres.name}
        </label>
    </div>
</main>

<style>
    main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    }

    button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
    }

    button:focus {
      border: 2px solid #ff3e00;
    }

    button:active {
      background-color: rgba(255, 62, 0, 0.2);
    }

</style>