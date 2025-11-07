<script lang="ts">
    const { isLeading=false }: {isLeading: boolean} = $props()
</script>

<footer>
    <img src="/info.svg" alt="Important notice" />
    <div>
        <b>НАПОМЕНА:</b>
        {#if isLeading}
            <span>
                Платформа је у активној изради и тренутно је у
                <i>ПРОБНОЈ ВЕРЗИЈИ</i>. 
                Унос нових података или интеракција са деловима сајта неће бити трајно запамћена
            </span>
        {:else}
            <span>
                Сви предлози и личности су фиктивне и служе у илустративне сврхе.
                Свако подударање са свакодневним околностима је случајно.
                Свака сличност са стварним особама нема за циљ њихову личну промоцију нити деградацију.
            </span>
        {/if}
    </div>
</footer>

<style>
    footer {
        display: flex;
        flex-direction: row;
        align-items: center;

        padding: 5px;
        background-color: #dedddd;
        font-size: smaller;
    }

    img {
        height: 35px;
        margin-right: 0.75rem;
    }

    div {
        flex-grow: 1;
    }
</style>