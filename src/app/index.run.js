(function() {
  'use strict';

  angular
    .module('progress3')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
