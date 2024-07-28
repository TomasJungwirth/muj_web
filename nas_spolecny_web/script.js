document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#menu nav ul li a');
    const currentUrl = window.location.href;

    // Zkontrolujte, zda je aktivní odkaz uložen v localStorage
    const activeLink = localStorage.getItem('activeLink');
    if (activeLink) {
        links.forEach(link => {
            if (link.href === activeLink) {
                link.classList.add('active');
            }
        });
    }

    links.forEach(link => {
        link.addEventListener('click', function() {
            // Odstraňte třídu 'active' ze všech odkazů
            links.forEach(l => l.classList.remove('active'));
            // Přidejte třídu 'active' na kliknutý odkaz
            this.classList.add('active');
            // Uložte aktivní odkaz do localStorage
            localStorage.setItem('activeLink', this.href);
        });
    });
});
