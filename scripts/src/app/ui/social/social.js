/* app/ui/social/social */

define(
	[
		'jquery',
		'app/ui/popup/popup'
	],

	function ($, Popup) {

		var Social;
		var $shareList;
		var shareTopPos;
		var shareLeftPos;
		var shareOriginalLeftPos;

		return {

			init: function () {
				Social = this;
				Social._initVars();
				Social._stickyShareInit();

				$('body').on('click', '.js-social-popup', this._processClick);
			},

			_initVars: function () {
				$shareList = $('.js-social-share');
				shareTopPos = $shareList.offset().top;
				shareOriginalLeftPos = $shareList.css('left');
			},

			_processClick: function (event) {
				event.preventDefault();
				console.log('boosh');
				var $thisLink = $(this);
				var width = $thisLink.attr('data-social-width') ? $thisLink.attr('data-social-width') : 550;
				var height = $thisLink.attr('data-social-height') ? $thisLink.attr('data-social-height') : 450;
				Popup.open(this.href, width, height);
			}
		};

	}
);
