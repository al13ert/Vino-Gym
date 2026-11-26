// Edit this file to change promotions, feeds and optional public JSON endpoints.
window.VINO_CONFIG = {
  marketMode: 'widget',
  youtubePlaylistId: '', // Optional: set a playlist ID here for no-code playlist updates on YouTube.
  youtubeVideoIds: ['OJ53aG34CTs', 'PMDQ82w1pAE'], // Used in this order when no playlist ID is set.
  timezone: 'Asia/Hong_Kong', rotationSeconds: 18, refreshMinutes: 10,
  promotions: [
    {tag:'THE REFUEL RITUAL',title:'Strong coffee.\nStronger you.',text:'Protein coffee, crafted for your post-workout moment.',cta:'DISCOVER AT RECEPTION',image:'assets/protein-coffee.png'},
    {tag:'VINO STANDARD. VINO RESULTS.',title:'Get better\ntoday.',text:'Angela’s 70-week journey: lasting change built with the right coaching, consistency and support.',cta:'BOOK A 1-ON-1 CONSULTATION',image:'assets/vino-angela-70-week.jpg',imageFit:'poster'},
    {tag:'SUSTAINABLE TRAINING. SMART NUTRITION.',title:'Build strength.\nGet better.',text:'Evidence-based training helps you build muscle, move with confidence and keep progressing.',cta:'SPEAK TO A VINO COACH',image:'assets/vino-strength-training.jpg',imageFit:'poster'},
    {tag:'NUTRITION COACHING',title:'Eat well.\nTrain smart.',text:'Smart choices are practical. VINO’s Hong Kong guide makes protein-forward meals easier to find.',cta:'ASK ABOUT NUTRITION COACHING',image:'assets/vino-high-protein-rice.jpg',imageFit:'poster'},
    {tag:'VINO COMMUNITY',title:'Stronger\ntogether.',text:'Find support, consistency and a community that celebrates progress at every step.',cta:'MEET THE VINO TEAM',image:''}
  ],
  feeds:[
    {name:'BBC WORLD',url:'https://feeds.bbci.co.uk/news/world/rss.xml',home:'https://www.bbc.com/news'},
    {name:'SCMP',url:'https://www.scmp.com/rss/91/feed',home:'https://www.scmp.com'},
    {name:'BBC ASIA',url:'https://feeds.bbci.co.uk/news/world/asia/rss.xml',home:'https://www.bbc.com/news/world/asia'}
  ],
  // Optional CORS-enabled HTTPS endpoints. Do not put secret API keys here.
  marketsEndpoint:'', sportsEndpoint:'',
  ticker:'GET BETTER TODAY     •     ASIAN EVIDENCE-BASED BODY TRANSFORMATION     •     PERSONAL TRAINING     •     NUTRITION COACHING     •     COMMUNITY     •     BOOK A 1-ON-1 CONSULTATION     •     Follow @vinopt.hk'
};
