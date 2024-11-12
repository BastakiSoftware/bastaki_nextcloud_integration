// File: main.js
/** @odoo-module **/

import NextCloudLogin from './nextcloud_login';

function setup() {
    const app = new owl.App({
        root: NextCloudLogin,
    });
    app.mount(document.body);
}

setup();
