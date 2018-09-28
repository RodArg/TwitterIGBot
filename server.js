var tweet_msg = 'Your tweet text here'
var folder_name = 'The name of the folder with your pictures here'

var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config.twitter);

//Use the following block of code if you want to tweet out a single message with no image
/* 
T.post('statuses/update', { status: tweet_msg }, function(err, data, response) {
  console.log(data)
}); 
*/

//Generates a random number from 0 to the length of your picture folder
function picture_from_array(pictures){
	return pictures[Math.floor(Math.random() * pictures.length)];
}

//Randomly chooses a picture from your folder and uploads it
function upload_picture(pictures){
	console.log('Loading picture...');
	
	var picture_path = path.join(__dirname, '/' + folder_name + '/' + picture_from_array(pictures)),
		b64content = fs.readFileSync(picture_path, {encoding: 'base64'});
		
	console.log('Uploading picture...');
	
	T.post('media/upload', {media_data: b64content}, function(err, data, response){
		if(err){
			console.log('ERROR:');
			console.log(err);
		}
		else{
			console.log('Picture uploaded!');
			console.log('I\'m tweeting');
			
			T.post('statuses/update', {
				status: tweet_msg,
				media_ids: new Array(data.media_id_string)
			},
				function(err, data, response){
					if(err){
						console.log('ERROR:');
						console.log(err);
					}
					else{
						console.log('I posted the picture');
					}
				}
			);
		}
	});
}

fs.readdir(__dirname + '/' + folder_name, function(err, files){
	if(err){
		console.log(err);
	}
	else{
		var images = [];
		files.forEach(function(f){
			images.push(f);
		});
		//upload a single picture once
		upload_picture(images);
		
		//if you want to upload pictures from your folder periodically,
		//comment out the 'upload_pictures' line above and use the block of code below instead
		//by default, pictures will be uploaded every 10s
		//change 1000 to your desired timeframe
		/* 
		setInterval(function(){
			upload_picture(images);
		}, 10000); 
		*/
	}
});