# -*- coding: utf-8 -*-
# from odoo import http


# class BastakiNextcloudIntegration(http.Controller):
#     @http.route('/bastaki_nextcloud_integration/bastaki_nextcloud_integration', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/bastaki_nextcloud_integration/bastaki_nextcloud_integration/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('bastaki_nextcloud_integration.listing', {
#             'root': '/bastaki_nextcloud_integration/bastaki_nextcloud_integration',
#             'objects': http.request.env['bastaki_nextcloud_integration.bastaki_nextcloud_integration'].search([]),
#         })

#     @http.route('/bastaki_nextcloud_integration/bastaki_nextcloud_integration/objects/<model("bastaki_nextcloud_integration.bastaki_nextcloud_integration"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('bastaki_nextcloud_integration.object', {
#             'object': obj
#         })

