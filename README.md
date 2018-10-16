# TwitterIGBot
Twitter bot template. Will add Instagram bot later.
Making your own Twitter bot has never been easier.

# Setup Instructions:

0. Create a folder where you'll put your bot code
1. Download node.js (https://nodejs.org/en/)
2. Make a Twitter account (https://developer.twitter.com)
3. Select 'Create a new app'
* Fill in the details, url can be random
4. Go to the 'Keys and tokens' tab
* Write down your keys and tokens somewhere safe
5. Open up your command line
* cd /Documents/"your folder"/"keep going if your folder is somewhere deeper"/
6. Type in: npm install twitter
7. Setup is done
  
# Tweeting Instruction:

0. Make a new folder inside your directory, name it 'pictures' or similar
* Put the picture(s) you want to tweet inside it.
1. Download config.js and server.js from the repo, place them in <your folder>
2. Put your correct keys and tokens in the config.js file
3. Replace the tweet message and picture folder name in the server.js file
4. Read through the server.js file
* Decide which comment blocks you want to keep depending on if you want the bot to post once or every X seconds
5. Open up your command line
* Type in: node server.js
6. Type Ctrl C when you want to stop the bot from running
7. Your bot is done!
Have fun kids.
