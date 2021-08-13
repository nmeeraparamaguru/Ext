Ext.define('myapp3.Application', {
	extend: 'Ext.app.Application',
	name: 'myapp3',
	requires: [
		'myapp3.*',
		'Ext.dataview.List',
		'Ext.field.Date',
		'Ext.Video',
		'Ext.carousel.Carousel',
		'Ext.data.TreeStore',
		'Ext.layout.Center'
	],
	defaultToken: 'personnelview',

	launch: function () {
		Ext.getBody().removeCls('launching');
		var elem = document.getElementById("splash");
		elem.parentNode.removeChild(elem);

		Ext.Viewport.add([{ xtype: 'mainview'}]);
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
