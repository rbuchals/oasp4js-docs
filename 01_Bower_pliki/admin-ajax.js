
                if (window.addthis_product === undefined) {
                    window.addthis_product = "wpwt";
                }

                if (window.wp_product_version === undefined) {
                    window.wp_product_version = "wpwt-1.1.0";
                }

                if (window.wp_blog_version === undefined) {
                    window.wp_blog_version = "4.5.3";
                }

                if (window.addthis_share === undefined) {
                    window.addthis_share = {};
                }

                if (window.addthis_config === undefined) {
                    window.addthis_config = {"data_track_clickback":true,"ui_atversion":300};
                }

                if (window.addthis_layers === undefined) {
                    window.addthis_layers = {};
                }

                if (window.addthis_layers_tools === undefined) {
                    window.addthis_layers_tools = [];
                } else {
                    
                }


                if (window.addthis_plugin_info === undefined) {
                    window.addthis_plugin_info = {"info_status":"enabled","cms_name":"WordPress","cms_version":"4.5.3","plugin_name":"Website Tools by AddThis","plugin_version":"1.1.0","plugin_mode":"AddThis","anonymous_profile_id":"wp-78f2e3ad67d3b7a4e1cd19aeb4c7debe","page_info":{"template":false}};
                }

                
                    (function() {
                      var first_load_interval_id = setInterval(function () {
                        if (typeof window.addthis !== 'undefined') {
                          window.clearInterval(first_load_interval_id);
                          window.addthis.layers(window.addthis_layers);
                          for (i = 0; i < window.addthis_layers_tools.length; i++) {
                            window.addthis.layers(window.addthis_layers_tools[i]);
                          }
                        }
                     },1000)
                    }());
                
            