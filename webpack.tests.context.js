var context = require.context('./src', true, /.spec\.ts$/); //make sure you have your directory and regex test set correctly!
context.keys().forEach(context);