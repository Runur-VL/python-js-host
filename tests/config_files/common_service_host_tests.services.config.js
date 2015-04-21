module.exports = {
	port: 56789,
	services: {
		echo: function(data, done) {
			if (!data.echo) {
				return done(new Error('No `echo` prop provided'));
			}
			done(null, data.echo);
		},
		echo_data: function(data, done) {
			done(null, JSON.stringify(data));
		},
		error: function(data, done) {
			done(new Error('Hello from error service'));
		},
		async_echo: function(data, done) {
			setTimeout(function() {
				if (!data.echo) {
					return done(new Error('No `echo` prop provided'));
				}
				done(null, data.echo);
			}, 500);
		}
	}
};