(function ($) {
  'use strict';

  $(function () {
    // Moves the search form into the search result page.
    if (window.location.href.indexOf('search/') > -1) {
      var search = $('.site-header .search-field-wrapper');
      search.addClass('search-field-in-content');
      search.addClass('js-search-field-in-content');

      // Remove label.
      search.find('.form-item-search-block-form label').remove();

      // Add the search field.
      var element = $('.pane-search-result-count');
      if (element.length) {
        search.insertAfter('.pane-search-result-count');
      }
      else {
        search.insertBefore('.view-node-search-result .search-results');
      }

      // Ensure that the spinner and other stuff works by wrapping it in a
      // search div.
      search.wrap('<div class="search"></div>');

      // Remove tabs (panels visibility rules do not work!).
      $('.pane-page-tabs').remove();

      // Hide top menu bar link.
      $('.topbar-link-search').hide();
    }

    // Extended search button location.
    $('.search .collapsible .fieldset-legend > a').insertBefore('.site-header .search .form-submit');

  });
}(jQuery));
