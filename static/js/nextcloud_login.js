// File: nextcloud_login.js
/** @odoo-module **/

import { Component, useState } from 'owl';
import { xml } from 'owl.tags';

class NextCloudLogin extends Component {
    static template = xml`
        <div>
            <button t-on-click="startLoginFlow">Login to NextCloud</button>
            <div t-if="state.showLoginPopup">
                <iframe 
                    src="${this.state.loginUrl}" 
                    style="width:100%; height:400px;" 
                    t-on-load="handleLoginRedirect"
                ></iframe>
            </div>
            <div t-if="state.credentials">
                <p>Server: <t t-esc="state.credentials.server"/></p>
                <p>User: <t t-esc="state.credentials.user"/></p>
            </div>
        </div>
    `;

    state = useState({
        showLoginPopup: false,
        loginUrl: "<your_nextcloud_server>/index.php/login/flow",
        credentials: null,
    });

    startLoginFlow() {
        // Set up any required headers here if necessary
        this.state.showLoginPopup = true;
    }

    async handleLoginRedirect(event) {
        // Listen for the final URL redirection and extract login details
        const redirectedUrl = event.target.src;
        if (redirectedUrl.startsWith("nc://login/")) {
            // Parse the redirected URL to extract server, user, and password
            const params = new URLSearchParams(redirectedUrl.replace("nc://login/", ""));
            this.state.credentials = {
                server: params.get('server'),
                user: params.get('user'),
                password: params.get('password')
            };
            this.state.showLoginPopup = false;
            // Optionally save credentials securely, like in Odoo's config
        }
    }
}

export default NextCloudLogin;
