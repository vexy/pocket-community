<script lang="ts">
    //TODO: Add some code here if needed
</script>

<h1>Кандидат</h1>
<img class='candidate-image' src="/person.svg" alt="Candidate profile" />

<form method="POST" action="?/newCandidate">

    <label for="title" class="top-spacing">Титула</label>
    <input type="text" id="title" name="title">

    <label for="name">Име</label>
    <input type="text" id="name" name="name">

    <label for="lastname">Презиме</label>
    <input type="text" id="lastname" name="lastName">

    <label for="biography" class="top-spacing">Радна биографија</label>
    <textarea id="biography" name="biography"></textarea>

    <button class='submit-button' type="submit">
        <img src="/send.svg" alt="Send proposal" height="30px" />
        <span>Пошаљи</span>
    </button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
    }

    input {
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid gray;
        font-size: 15px;
    }

    textarea {
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid gray;
        min-width: 200px;
        min-height: 130px;
        font-family: inherit;
        font-size: inherit;
        text-rendering: inherit;
    }
</style>