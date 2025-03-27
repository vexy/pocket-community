<script lang="ts">
    //TODO: Add some code here
</script>

<h1>Кандидат</h1>

<form method="POST" action="?/newCandidate">
    <img src="/person.svg" alt="Candidate profile" />

    <label for="title" class="top-spacing">Титула</label>
    <input type="text" id="title" name="title">

    <label for="name">Име</label>
    <input type="text" id="name" name="name">

    <label for="lastname">Презиме</label>
    <input type="text" id="lastname" name="lastName">

    <label for="biography" class="top-spacing">Радна биографија</label>
    <textarea id="biography" name="biography"></textarea>

    <button type="submit" class="top-spacing">Пошаљи</button>
</form>

<style>
    h1 {
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        height: 180px;
    }

    textarea {
        min-width: 200px;
        min-height: 130px;
        font-family: inherit;
    }

    .top-spacing {
        margin-top: 1.5rem
    }
</style>