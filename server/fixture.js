if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Introducing Telescope',
		url: 'http://google.com'
	});

	Posts.insert({
		title: 'Telescope',
		url: 'http://google.com'
	});
	
	Posts.insert({
		title: 'The Meteor Book',
		url: 'http://google.com'
	});
}