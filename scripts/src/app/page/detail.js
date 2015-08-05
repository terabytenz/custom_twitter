/* app/page/detail */

define(
	[
		'jquery',
		'app/ui/social/social',
		'app/ui/popup/popup'

	],

	function ($, Social, Popup) {

		//add id from twitter widget
		if($('#twitter-feed').length){
			//twitter widget Id
			var twitterConfig = {
				"id": '354149249912541184',
				"domId": 'twitter-feed',
				"maxTweets": 13
			};
			TwitterFeed.fetch(twitterConfig);
		}

		//this runs the popup box for 'reply/retweet/favourite'
		if($('.js-social-share').length) {
			Social.init();
		}

	}
);
