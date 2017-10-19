(function ($) {
    $(document).ready(function () {
        if (!window.CKEDITOR) {
            return;
        }

        // Register our plugin
        CKEDITOR.plugins.addExternal('sourcedialog', '/sites/all/modules/h5p-css-overrides/sourcedialog/', 'plugin.js');
        H5PEditor.HtmlAddons = H5PEditor.HtmlAddons || {};
        H5PEditor.HtmlAddons.sourcedialog = H5PEditor.HtmlAddons.sourcedialog || {};
        H5PEditor.HtmlAddons.sourcedialog.sourcedialog = function (config, tags) {
            // Add the plugin.
            config.extraPlugins = (config.extraPlugins ? ',' : '') + 'sourcedialog';

            // Add plugin to toolbar.
            config.toolbar.push({
                name: "document",
                groups: ['mode'],
                items: ['Sourcedialog']
            });

            // Add our special tag
            tags.push('sourcedialog');
        };
    });
})(H5P.jQuery);