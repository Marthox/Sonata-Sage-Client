<script>
    import { t, locale, locales } from "$lib/i18n";
    import { convertNumberToNote, convertNoteToNumber } from "$utils/notesConverter";
    import "./styles.sass";
</script>

<svelte:head>
    <title>{$t("pentagram_hero.name")}</title>
    <meta name="description" content={$t("pentagram_hero.description")} />
</svelte:head>

<div class="main">
    <h1>{$t("pentagram_hero.name")}</h1>
    <p>{$t("pentagram_hero.description")}</p>

    <div class="pentagram_hero_container">
        <div id="25" class="line"/>
        <div id="26" class="space"/>
        <div id="27" class="line"/>
        <div id="28" class="space"/>
        <div id="29" class="line"/>
        <div id="30" class="space"/>
        <div id="31" class="line"/>
        <div id="32" class="space"/>
        <div id="33" class="line"/>
    </div>
</div>
