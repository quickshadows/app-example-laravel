import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
