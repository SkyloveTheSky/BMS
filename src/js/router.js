async function loadPage(page) {

    const app =
        document.getElementById('app');

    try {

        const response =
            await fetch(`pages/${page}.html`);

        if (!response.ok) {

            throw new Error(
                'Page introuvable'
            );

        }

        const html =
            await response.text();

        app.innerHTML = html;

        loadComponents();

    } catch (error) {

        console.error(error);

        app.innerHTML = `

            <div
                style="
                    padding:40px;
                    color:white;
                    font-size:20px;
                "
            >
                Erreur chargement page
            </div>

        `;

    }

}

function loadComponents() {

    const sidebarContainer =
        document.getElementById(
            'sidebar-container'
        );

    if (sidebarContainer) {

        sidebarContainer.innerHTML =
            Sidebar();

    }

}