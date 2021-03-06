/**
 * Documentation: https://www.algolia.com/doc/integration/magento-2/customize/custom-front-end-events/
 **/

/**
 * Autocomplete hook method
 * autocomplete.js documentation: https://github.com/algolia/autocomplete.js
 **/

algolia.registerHook('beforeAutocompleteSources', function(sources, algolia_client, algoliaBundle) {
	// Modify autocomplete data sources
	
	return sources;
});

algolia.registerHook('beforeAutocompleteOptions', function(options) {
	// Modify autocomplete options
	
	return options;
});

/**
 * InstantSearch hook methods
 * IS.js v2 documentation: https://community.algolia.com/instantsearch.js/
 * IS.js v4 documentation: https://www.algolia.com/doc/api-reference/widgets/instantsearch/js/
 **/

algolia.registerHook('beforeInstantsearchInit', function(instantsearchOptions, algoliaBundle) {
	// Modify instant search options
	
	return instantsearchOptions;
});

algolia.registerHook('beforeWidgetInitialization', function(allWidgetConfiguration, algoliaBundle) {
	// Modify instant search widgets
	
	return allWidgetConfiguration;
});

algolia.registerHook('beforeInstantsearchStart', function(search, algoliaBundle) {
	// Modify instant search instance before search started
	
	return search;
});

algolia.registerHook('afterInstantsearchStart', function(search, algoliaBundle) {
	// Modify instant search instance after search started
	
	return search;
});
