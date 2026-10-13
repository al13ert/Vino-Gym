// Edit this file to change promotions, feeds and optional public JSON endpoints.
window.VINO_CONFIG = {
  marketMode: 'widget',
  fifaYoutubeVideoId: '', // Only an official FIFA video that permits embedding. No guaranteed 24/7 FIFA channel.
  timezone: 'Asia/Hong_Kong', rotationSeconds: 18, refreshMinutes: 10,
  promotions: [
    {tag:'THE REFUEL RITUAL',title:'Strong coffee.\nStronger you.',text:'Protein coffee, crafted for your post-workout moment.',cta:'DISCOVER AT RECEPTION',image:'assets/protein-coffee.png'},
    {tag:'PERSONAL TRAINING',title:'Your goals.\nOur focus.',text:'Make your next session count. Ask our coaches about a personal training consultation.',cta:'SPEAK TO A VINO COACH',image:''},
    {tag:'YOUR DAILY RESET',title:'Move well.\nFeel better.',text:'Take a breath. Stay hydrated. Build a routine that works for you.',cta:'WELCOME TO VINO',image:''}
  ],
  feeds:[
    {name:'BBC WORLD',url:'https://feeds.bbci.co.uk/news/world/rss.xml',home:'https://www.bbc.com/news'},
    {name:'SCMP',url:'https://www.scmp.com/rss/91/feed',home:'https://www.scmp.com'},
    {name:'BBC ASIA',url:'https://feeds.bbci.co.uk/news/world/asia/rss.xml',home:'https://www.bbc.com/news/world/asia'}
  ],
  // Optional CORS-enabled HTTPS endpoints. Do not put secret API keys here.
  marketsEndpoint:'', sportsEndpoint:'',
  ticker:'Welcome to VINO Personal Training     •     Ask our coaches about personal training     •     Stay hydrated between sets     •     Protein coffee promotion concept — ask our team for availability'
};
