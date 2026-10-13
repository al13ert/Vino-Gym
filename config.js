// Edit this file to change promotions, feeds and optional public JSON endpoints.
window.VINO_CONFIG = {
  marketMode: 'widget',
  channelCount: 1, // One continuous sports channel; no channel selection required.
  channels: [
    {name:'RED BULL TV · CONTINUOUS SPORTS',url:'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8'},
    {name:'RTHK 32',url:'https://rthktv32-live.akamaized.net/hls/live/2036819/RTHKTV32/master.m3u8'}
  ],
  fifaYoutubeVideoId: '',  // Only an official FIFA video that permits embedding. No guaranteed 24/7 FIFA channel.
  timezone: 'Asia/Hong_Kong', rotationSeconds: 18, refreshMinutes: 10,
  promotions: [
    {tag:'THE REFUEL RITUAL',title:'Strong coffee.\nStronger you.',text:'Protein coffee, crafted for your post-workout moment.',cta:'DISCOVER AT RECEPTION',image:'assets/protein-coffee.png'},
    {tag:'VINO STANDARD. VINO RESULTS.',title:'Get better\ntoday.',text:'Asian evidence-based body transformation through personal training, nutrition coaching and community.',cta:'BOOK A 1-ON-1 CONSULTATION',image:''},
    {tag:'SUSTAINABLE TRAINING. SMART NUTRITION.',title:'Built for\nreal life.',text:'A practical approach for busy Hong Kong professionals, with coaching that fits your goals and routine.',cta:'SPEAK TO A VINO COACH',image:''},
    {tag:'NUTRITION COACHING',title:'Eat well.\nTrain smart.',text:'Explore practical, high-protein choices and build better nutrition habits for everyday life.',cta:'ASK ABOUT NUTRITION COACHING',image:''},
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
