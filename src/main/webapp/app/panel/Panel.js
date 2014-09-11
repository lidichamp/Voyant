Ext.define('Voyant.panel.Panel', {
	mixins: ['Voyant.util.Localization','Voyant.util.Api','Voyant.notebook.util.Embeddable','Voyant.util.DetailedError'],
	statics: {
		i18n: {
			term: {en: "Term"},
			rawFreq: {en: "Count"},
			relativeFreq: {en: 'Relative'},
			trend: {en: "Trend"}
		}
	},
	constructor: function(config) {
		this.mixins['Voyant.util.Api'].constructor.apply(this, arguments);
		this.mixins['Voyant.notebook.util.Embeddable'].constructor.apply(this, arguments);
	},
	
	getApplication: function() {
		return Voyant.application
	},
	
	getBaseUrl: function() {
		return this.getApplication().getBaseUrl();
	},
	
	getTromboneUrl: function() {
		return this.getApplication().getTromboneUrl();
	},
	
	showError: function(config) {
		this.getApplication().showError.apply(this, arguments)
	}
});