<script>
    import "./styles.sass"

    let menuItems = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' },
        { name: 'Login', link: '/login'}
    ];
</script>

<div class="navbar">
    <ul>
        {#each menuItems as item}
            <li><a href={item.link}>{item.name}</a></li>
        {/each}
    </ul>
</div>
