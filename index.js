/*this reload function is for home button*/

function reload(){
    window.location.reload();
}
/**this is the data from News API that is already fetched, but since it is paid for Production, 
 * all the data is hard-coded and the actual code for fetching the data is in comments.It still works in the same manner  */
var articlesPolitical=
     [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Politics no longer depends on the once-great UUP",
            "description": "Budget issues send the UUP into opposition but the executive would carry on, writes Enda McClafferty.",
            "url": "https://www.bbc.co.uk/news/uk-northern-ireland-68911089",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DB6D/production/_133237165_afb7c9100952543e3b4bded30099c53db7aef03a.jpg",
            "publishedAt": "2024-04-27T07:00:24Z",
            "content": "There was a time when big meetings of the Ulster Unionist Party were political box office, with good reason.\r\nDavid Trimble versus Jeffrey Donaldson - at stake the future of power sharing at Stormont… [+3578 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "What to watch out for in the local elections",
            "description": "The BBC's political editor breaks down what this week's local elections will mean for national politics.",
            "url": "https://www.bbc.co.uk/news/uk-politics-68926586",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C3AE/production/_133249005_pxl_20240430_133125190.jpg",
            "publishedAt": "2024-05-01T01:23:01Z",
            "content": "Wherever you live in England and Wales, you have a vote on Thursday.\r\nAssuming, that is, you decide to use it and you are on the electoral roll.\r\nThere are elections for:\r\nOh, and there is a Westmins… [+5261 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "Watch: The 12 days that ended Humza Yousaf’s time in power",
            "description": "Look back on a turbulent time in Scottish politics which concluded with the first minister quitting his job.",
            "url": "https://www.bbc.co.uk/news/av/uk-scotland-68921855",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13FB4/production/_133244818_p0htw0x3.jpg",
            "publishedAt": "2024-04-29T12:27:18Z",
            "content": "Its been a dramatic 12 days in Scottish politics. \r\nIt began with the Scottish Greens being kicked out of government after a fall-out over the decision to scrap key a climate change target - and ende… [+218 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "LGBTQ Indians are more accepted than ever - but politics hasn't caught up",
            "description": "Despite major wins for the community, no major party is fielding any openly LGBTQ candidates in this election.",
            "url": "https://www.bbc.co.uk/news/world-asia-india-68933715",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6B97/production/_133334572_6.png",
            "publishedAt": "2024-05-27T00:27:10Z",
            "content": "This year's election campaign comes months after the Supreme Court decided to not legalise same-sex unions.\r\nThree opposition parties have promised to recognise same-sex couples legally, but the gove… [+1395 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Matthew Fox",
            "title": "A majority of Americans polled believe the economy is in a recession — but it isn't",
            "description": "Inflation and politics appear to be driving the disconnect between Americans' view on the broader economy and reality.",
            "url": "https://www.businessinsider.com/us-recession-americans-believe-economic-downturn-new-poll-unemployment-2024-5",
            "urlToImage": "https://i.insider.com/664e230514fb5b23cc5f282c?width=1200&format=jpeg",
            "publishedAt": "2024-05-22T18:03:48Z",
            "content": "Silhouettes of people walking to work.EschCollection/Getty Images\r\n<ul>\n<li>A majority of Americans polled by Harris believe the US is already in an economic recession.</li>\n<li>About half of America… [+2899 chars]"
        }]
var articlesBusiness=[
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "First Apprentice wedding 'like an Alan Sugar task'",
        "description": "Akshay Thakrar and Harpreet Kaur put their business skills to use as they plan the week-long party.",
        "url": "https://www.bbc.co.uk/news/uk-england-leeds-69021231",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16B2B/production/_133317929_20240515_114638.jpg",
        "publishedAt": "2024-05-18T00:50:05Z",
        "content": "Akshay, 31, was also on the show in 2022 but it was not until after it finished that Harpreet got in touch, and they \"haven't looked back\", he said.\r\nLess than two years later, they have bought their… [+759 chars]"
    },
    {
        "source": {
            "id": "wired",
            "name": "Wired"
        },
        "author": "Lauren Goode",
        "title": "The Unsexy Future of Generative AI Is Enterprise Apps",
        "description": "Some startups that launched buzzy generative AI products are now narrowing their offerings to try to make them more useful to business clients.",
        "url": "https://www.wired.com/story/unsexy-future-generative-ai-enterprise-apps/",
        "urlToImage": "https://media.wired.com/photos/6632b8da9ddd878f29f04941/191:100/w_1280,c_limit/AI-Pivot-to-Boring-Business-GettyImages-1289189102.jpg",
        "publishedAt": "2024-05-02T10:00:00Z",
        "content": "However, that amount includes massive funding from corporate backers, like Microsofts infusion of capital into OpenAI and Amazons funding of Anthropic. Stripped down to conventional VC investments, f… [+4190 chars]"
    },
    {
        "source": {
            "id": "wired",
            "name": "Wired"
        },
        "author": "Louise Matsakis",
        "title": "Most US TikTok Creators Don’t Think a Ban Will Happen",
        "description": "The Chinese-owned app is in serious trouble in Washington, but a survey of US creators suggests TikTok’s influencer economy is carrying on with business as usual.",
        "url": "https://www.wired.com/story/most-us-tiktok-creators-dont-think-a-ban-will-happen/",
        "urlToImage": "https://media.wired.com/photos/664e62bf9beaedbe2925ba6a/191:100/w_1280,c_limit/tiktok-survey-02.jpg",
        "publishedAt": "2024-05-23T19:22:11Z",
        "content": "A majority of US TikTok creators dont believe the platform will be banned within a year, and most havent seen brands they work for shift their marketing budgets away from the app, according to a new … [+5165 chars]"
    },
    {
        "source": {
            "id": "wired",
            "name": "Wired"
        },
        "author": "Eric Ravenscraft",
        "title": "Dell Alienware m16 R2 Review: Gaming Power in a Business Suit",
        "description": "This laptop packs an all-day battery for work, a smooth screen, and enough power to run your favorite games.",
        "url": "https://www.wired.com/review/dell-alienware-m16-r2/",
        "urlToImage": "https://media.wired.com/photos/663144aca8388dc793210842/191:100/w_1280,c_limit/alienware-m16-r2-review-collage-SOURCE-Eric-Ravenscraft.jpg",
        "publishedAt": "2024-05-01T13:00:00Z",
        "content": "The Alienware m16 R2 uses a 2,560 X 1,600-pixel resolution IPS display thats decent for its price but not particularly remarkable. The display lacks HDR support, instead opting for a basic sRGB color… [+2657 chars]"
    },
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Tom Warren",
        "title": "Sony names new PlayStation leaders following Jim Ryan’s retirement",
        "description": "Sony has appointed co-CEOs to lead its PlayStation business. Hermen Hulst and Hideaki Nishino will takeover on June 1st, months after Jim Ryan retired.",
        "url": "https://www.theverge.com/2024/5/13/24155982/sony-playstation-co-ceo-hermen-hulst-hideaki-nishino",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/tyK6y0BwTvw_c3Aeyl_rKzvqILM=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23986615/acastro_STK097_01.jpg",
        "publishedAt": "2024-05-13T23:53:18Z",
        "content": "Sony names new PlayStation leaders following Jim Ryans retirement\r\nSony names new PlayStation leaders following Jim Ryans retirement\r\n / Sony is going with co-CEOs to lead its PlayStation business.\r\n… [+2348 chars]"
    }];
var articlesEntertainment=[
    {
        "source": {
            "id": "wired",
            "name": "Wired"
        },
        "author": "Omar L. Gallaga",
        "title": "Best TV Mounting Options: Stands, Wall Mounts, Corner Mounts, Electric Mounts",
        "description": "TV mounts have evolved, and so have all the other options for getting your huge new television set off the entertainment stand.",
        "url": "https://www.wired.com/story/best-options-for-mounting-a-tv/",
        "urlToImage": "https://media.wired.com/photos/66355bf3af10454d8d27948e/191:100/w_1280,c_limit/TV-wall-mount-wrench-level-screws-repair-GettyImages-1220323333-zayatssv-cropped.jpg",
        "publishedAt": "2024-05-04T12:00:00Z",
        "content": "A rash of recent hot deals on HDTVs, even two-for-one TV deals, might have you facing a dilemma that has been with us since the era of flatscreens began: Where are you gonna mount that thing?\r\nOf cou… [+2264 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ReadWrite"
        },
        "author": "Brian-Damien Morgan",
        "title": "Relic Entertainment goes independent",
        "description": "Relic Entertainment, known for classic game series like Company of Heroes and the Dawn of War franchise, has announced it… Continue reading Relic Entertainment goes independent\nThe post Relic Entertainment goes independent appeared first on ReadWrite.",
        "url": "https://readwrite.com/relic-entertainment-goes-independent/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/Relic-goes-independent.jpg",
        "publishedAt": "2024-05-22T16:12:38Z",
        "content": "Relic Entertainment, known for classic game series like Company of Heroes and the Dawn of War franchise, has announced it is to become an independent studio.\r\nThe studio has chosen to pursue its inde… [+1993 chars]"
    },
    
    
    {
        "source": {
            "id": null,
            "name": "Gizmodo.com"
        },
        "author": "Matt Novak",
        "title": "Dave & Buster's Adding Bets to Its App as America's Gambling Fixation Kicks Into High Gear",
        "description": "Dave & Buster’s plans to add a feature to its app that will allow customers to place bets amongst themselves on competitive games, according to an announcement from the entertainment chain on Tuesday. It’s just the latest sign that tech-based gambling is beco…",
        "url": "https://gizmodo.com/dave-busters-bet-wagers-betting-app-gambling-lucra-1851446091",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/885d2c50361ba5f7f4624945a061515e.jpg",
        "publishedAt": "2024-04-30T16:40:00Z",
        "content": "Dave &amp; Busters plans to add a feature to its app that will allow customers to place bets amongst themselves on competitive games, according to an announcement from the entertainment chain on Tues… [+2860 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ReadWrite"
        },
        "author": "Suswati Basu",
        "title": "Flutter Entertainment shareholders approve New York relocation",
        "description": "Flutter Entertainment is set to relocate its primary listing to the New York Stock Exchange (NYSE) after 98 per cent… Continue reading Flutter Entertainment shareholders approve New York relocation\nThe post Flutter Entertainment shareholders approve New York …",
        "url": "https://readwrite.com/flutter-entertainment-shareholders-approve-new-york-relocation/",
        "urlToImage": "https://readwrite.com/wp-content/uploads/2024/05/Flutter-Entertainment-shareholders-approve-New-York-relocation.png",
        "publishedAt": "2024-05-02T15:57:43Z",
        "content": "Flutter Entertainment is set to relocate its primary listing to the New York Stock Exchange (NYSE) after 98 per cent of its shareholders backed the move.\r\nFlutter is a major gambling operator that ow… [+2453 chars]"
    },{
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Sarah Fielding",
        "title": "Meta encourages you to disregard your seat mates and use VR headsets on a plane",
        "description": "Your experience while taking a flight comes down to many random factors, including who sits next to you. Your seatmate has plenty of ways to bother you — you've lived them, we don't need to remind you how — but now there's a whole new option. Meta has announc…",
        "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_ff259c15-eb92-4518-b989-dd0bc753c120",
        "urlToImage": null,
        "publishedAt": "2024-05-14T14:19:42Z",
        "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    }];
var articlesTechnology=[
    {
    "source": {
        "id": "the-verge",
        "name": "The Verge"
    },
    "author": "Elizabeth Lopatto",
    "title": "Apple doesn’t understand why you use technology",
    "description": "Apple’s marketing campaign for its new iPad suggests that the company is confused about what makes technology exciting. That’s new.",
    "url": "https://www.theverge.com/2024/5/9/24152987/apple-crush-ad-piano-ipad",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/wELW5KNlqEUBz5RbCOSRA3lkm3c=/0x0:3018x1586/1200x628/filters:focal(1509x793:1510x794)/cdn.vox-cdn.com/uploads/chorus_asset/file/25440653/Screenshot_2024_05_09_at_10.59.26_AM.png",
    "publishedAt": "2024-05-09T18:22:53Z",
    "content": "Apple doesnt understand why you use technology\r\nApple doesnt understand why you use technology\r\n / What, exactly, did Apple crush?\r\nByElizabeth Lopatto, a reporter who writes about tech, money, and h… [+4139 chars]"
}
,{
    "source": {
        "id": "wired",
        "name": "Wired"
    },
    "author": "Matt Simon",
    "title": "The One Thing Holding Back Heat Pumps",
    "description": "It’s not the technology itself. It’s that we don’t yet have enough trained workers to install heat pumps for full-tilt decarbonization.",
    "url": "https://www.wired.com/story/heat-pump-worker-shortage/",
    "urlToImage": "https://media.wired.com/photos/6633d3ad40c3d3a8581d4562/191:100/w_1280,c_limit/Science%20-%20heat%20pump%20engineer%20shortage%20-%20May%206_GettyImages-1252320781.jpg",
    "publishedAt": "2024-05-06T11:00:00Z",
    "content": "So the demand is there, as is growing support from the federal and state governments. Whats lagging is the workforceat least temporarily. And the US is nowhere near alone: Wherever heat pump adoption… [+2872 chars]"
},{
    "source": {
        "id": "wired",
        "name": "Wired"
    },
    "author": "Kate Knibbs",
    "title": "OpenAI Is ‘Exploring’ How to Responsibly Generate AI Porn",
    "description": "OpenAI released draft guidelines for how  it wants the AI technology inside ChatGPT to behave—and revealed that it’s exploring how to ‘responsibly’ generate explicit content.",
    "url": "https://www.wired.com/story/openai-is-exploring-how-to-responsibly-generate-ai-porn/",
    "urlToImage": "https://media.wired.com/photos/663bc0baa6e8aa6d53b55c2b/191:100/w_1280,c_limit/OpenAI-NSFW-Content-Business-GettyImages-2133941176.jpg",
    "publishedAt": "2024-05-08T19:13:20Z",
    "content": "OpenAI released draft documentation Wednesday laying out how it wants ChatGPT and its other AI technology to behave. Part of the lengthy Model Spec document discloses that the company is exploring a … [+3251 chars]"
},{
    "source": {
        "id": "the-verge",
        "name": "The Verge"
    },
    "author": "Verge Press Room",
    "title": "Kylie Robison Joins The Verge as Senior AI Reporter",
    "description": "She’ll lead the technology publication’s coverage of artificial intelligence, working closely with The Verge’s policy and tech teams.",
    "url": "https://www.theverge.com/2024/4/30/24145248/kylie-robison-joins-the-verge-as-senior-ai-reporter",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/DqhqIg7H_V0broyyiRke8zSgwmk=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/25426971/1vpavic_20240417__0002__1_.jpg",
    "publishedAt": "2024-04-30T13:54:48Z",
    "content": "Kylie Robison Joins The Verge as Senior AI Reporter\r\nKylie Robison Joins The Verge as Senior AI Reporter\r\n / Shell lead the technology publications coverage of artificial intelligence, working closel… [+2001 chars]"
},{
    "source": {
        "id": null,
        "name": "Gizmodo.com"
    },
    "author": "Matt Novak",
    "title": "Senators Want TSA to Pump the Brakes on Facial Recognition at Airports",
    "description": "The Transportation and Security Administration plans to vastly expand its use of facial recognition technology in the U.S., going from 25 airports with the tech to over 430 by this July. And a group of 14 senators from both parties are not happy, arguing in a…",
    "url": "https://gizmodo.com/senators-tsa-pump-brakes-facial-recognition-airports-1851454943",
    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/007e9a85cf579525389761a02c2f7727.jpg",
    "publishedAt": "2024-05-03T18:30:00Z",
    "content": "The Transportation and Security Administration plans to vastly expand its use of facial recognition technology in the U.S., going from 25 airports with the tech to over 430 by this July. And a group … [+3308 chars]"
},{
    "source": {
        "id": "wired",
        "name": "Wired"
    },
    "author": "Georgia Gee",
    "title": "Internal Emails Show How a Controversial Gun-Detection System Found Its Way to NYC",
    "description": "NYC mayor Eric Adams wants to test Evolv’s gun-detection tech in subway stations—despite the company saying it’s not designed for that environment. Emails obtained by WIRED show how the company still found an in.",
    "url": "https://www.wired.com/story/evolv-gun-detection-nyc-subways-emails/",
    "urlToImage": "https://media.wired.com/photos/6629392ea620d99a9e8ea90e/191:100/w_1280,c_limit/evolv-ny-subway-eric-adams.jpg",
    "publishedAt": "2024-05-13T16:59:51Z",
    "content": "There was a lot of overlap with former members of the NYPD. Adams and Banks came up together as police officersas did a then-account executive of Evolv, also name-dropped by Chitkara in the email to … [+3696 chars]"
},{
    "source": {
        "id": "wired",
        "name": "Wired"
    },
    "author": "Steven Levy",
    "title": "Meet the Woman Who Showed President Biden ChatGPT—and Helped Set the Course for AI",
    "description": "Arati Prabhakar has the ear of the US president and a massive mission: help manage AI, revive the semiconductor industry, and pull off a cancer moonshot.",
    "url": "https://www.wired.com/story/arati-prabhakar-ostp-biden-science-tech-adviser/",
    "urlToImage": "https://media.wired.com/photos/662fe814044a3fda321afa06/191:100/w_1280,c_limit/20240202_SR_17-Edit_web.jpg",
    "publishedAt": "2024-05-01T10:00:00Z",
    "content": "one day in March 2023, Arati Prabhakar brought a laptop into the Oval Office and showed the future to Joe Biden. Six months later, the president issued a sweeping executive order that set a regulator… [+3502 chars]"
},
{
    "source": {
        "id": null,
        "name": "Slashdot.org"
    },
    "author": "EditorDavid",
    "title": "Can Technology Help Reduce Drunk-Driving Deaths?",
    "description": "An anonymous reader shared this report from the Wall Street Journal:\nDrunken-driving deaths in the U.S. have risen to levels not seen in nearly two decades, federal data show, a major setback to long-running road-safety efforts. At the same time, arrests for …",
    "url": "https://yro.slashdot.org/story/24/05/05/2214210/can-technology-help-reduce-drunk-driving-deaths",
    "urlToImage": "https://a.fsdn.com/sd/topics/government_64.png",
    "publishedAt": "2024-05-05T22:18:00Z",
    "content": "An anonymous reader shared this report from the Wall Street Journal:\r\nDrunken-driving deaths in the U.S. have risen to levels not seen in nearly two decades, federal data show, a major setback to lon… [+1702 chars]"
},
{
    "source": {
        "id": "wired",
        "name": "Wired"
    },
    "author": "Blake Snow",
    "title": "Translation Tech Is Amazing, Except When It’s Not",
    "description": "We can hold surprisingly deep conversations across languages using simple apps on our phones. But even as these apps get a fresh boost from AI, they can still lead to some awkward moments.",
    "url": "https://www.wired.com/story/translation-tech-is-amazing-except-when-its-not/",
    "urlToImage": "https://media.wired.com/photos/66356649588f131dd8d770a5/191:100/w_1280,c_limit/Translation-Tech-Gear-GettyImages-1417723053.jpg",
    "publishedAt": "2024-05-05T12:00:00Z",
    "content": "Todays language translation apps are like self-driving cars: incredibly useful, promising, nearing maturity, and almost entirely powered by machines. It's astonishing that the technology even exists.… [+2941 chars]"
},
{
    "source": {
        "id": null,
        "name": "Gizmodo.com"
    },
    "author": "Maxwell Zeff",
    "title": "ChatGPT Could Power the iPhone's AI Chatbot: Report",
    "description": "Apple is reportedly holding discussions with OpenAI about using the startup’s AI technology to power some features coming to the iPhone later this year, Bloomberg reported on Friday. This comes roughly a month after reports surfaced that Apple was holding dis…",
    "url": "https://gizmodo.com/chatgpt-openai-could-power-apple-iphones-ai-chatbot-1851439853",
    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a2f3eac7c6a08e2d3d0169f05a4bb371.jpg",
    "publishedAt": "2024-04-27T11:00:00Z",
    "content": "Apple is reportedly holding discussions with OpenAI about using the startups AI technology to power some features coming to the iPhone later this year, Bloomberg reported on Friday. This comes roughl… [+1931 chars]"
},
{
"source": {
    "id": null,
    "name": "Gizmodo.com"
},
"author": "Maxwell Zeff",
"title": "OpenAI Unveils GPT-4 Omni’s Voice Capabilities and They’re Literally Unbelievable",
"description": "OpenAI unveiled GPT-4 Omni (GPT-4o) during its Spring Update on Monday morning in San Francisco. Chief Technology Officer Mira Murati and OpenAI staff showcased their newest flagship model, capable of real-time verbal conversations with a friendly AI chatbot …",
"url": "https://gizmodo.com/openai-unveils-gpt-4-omni-s-voice-capabilities-and-they-1851473470",
"urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/70a71beaa319ddc27762cafda40deea6.png",
"publishedAt": "2024-05-13T18:24:00Z",
"content": "OpenAI unveiled GPT-4 Omni (GPT-4o) during its Spring Update on Monday morning in San Francisco. Chief Technology Officer Mira Murati and OpenAI staff showcased their newest flagship model, capable o… [+3614 chars]"
},{
    "source": {
        "id": null,
        "name": "Gizmodo.com"
    },
    "author": "Maxwell Zeff",
    "title": "Alexa Will Get an Upgrade But It'll Cost You, Report Says",
    "description": "Amazon is reportedly releasing a generative AI version of Alexa later this year and plans to charge a monthly subscription fee separate from Amazon Prime for the technology, according to CNBC on Wednesday. It’s part of Amazon’s effort to compete with OpenAI’s…",
    "url": "https://gizmodo.com/amazon-alexa-generative-ai-upgrade-prime-cost-1851493383",
    "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/c26a94f1317e719043c8186079060c84.jpg",
    "publishedAt": "2024-05-22T14:40:00Z",
    "content": "Amazon is reportedly releasing a generative AI version of Alexa later this year and plans to charge a monthly subscription fee separate from Amazon Prime for the technology, according to CNBC on Wedn… [+2516 chars]"
}

];

/**we create an fetch url now */
/*async*/ function fetchData(query){
    /*const apikey=MY-API-KEY;
    const apiURL=`https://newsapi.org/v2/everything?q=${query}&apiKey=${apikey}&pageSize=10`;*/

    try{
        /*const response = await fetch(apiURL);
        const data= await fetch(apiURL).then(function (response) {
            return response.json();
          })*/
        switch(query){
            case "politics":
                const politics= articlesPolitical;
                console.log(politics) ;
                return politics;
            case "business":
                const business= articlesBusiness;
                console.log(business) ;
                return business;
            case "entertainment":
                const entertainment= articlesEntertainment;
                console.log(entertainment) ;
                return entertainment;
        } 
    }
    catch(error){
        console.log("Error in fetching random news");
        return [];
    }
}/** displayData function which displays all the articles in home page*/
 function displayData(allUnArticles,cat)
{
    const maindiv=document.querySelector("#main-container");    
    const category=document.createElement("div");//div category
    category.classList.add("category");
    const heading=document.createElement("h1");
    heading.innerHTML=cat;
    category.appendChild(heading);// we appended the main heading to div, so category is done
    console.log(maindiv);
    maindiv.appendChild(category);

    let allArticles = [];
    for (let i= 0; i<allUnArticles.length&& allArticles.length<6; i++) {
        if (!(allUnArticles[i].author=== null || allUnArticles[i].title === 'removed'||allUnArticles[i].description==='Removed'||allUnArticles[i].urlToImage===null ) )
            {
            allArticles = [...allArticles, allUnArticles[i]];
             }}
            
/* -------------------------------------------*/
const hero=document.createElement("div");
    hero.classList.add("hero");

    const article1=allArticles.slice(0,1);
   article1.forEach((article) => {    
    const main=document.createElement("div");
    main.classList.add("main");
    main.addEventListener("click",()=>{
         window.location.href=article.url;
    })
        const desc=document.createElement("div");
        desc.classList.add("desc");
            const title=document.createElement("h3");
            title.textContent=article.title;
            desc.appendChild(title);
           
            const description=document.createElement("p");
            description.textContent=article.description;
            desc.appendChild(description);
            
        const image=document.createElement("img");
        image.classList.add("main-img")
        image.src=article.urlToImage;

        main.appendChild(desc);//desc is appended to main
        main.appendChild(image);//image is appended to main  
        hero.appendChild(main);//main is appended to hero  
 });
 /* ------------------------------------*/
 const article2=allArticles.slice(1,2);
 article2.forEach((article)=>{
  const side=document.createElement("div");
  side.classList.add("side");
    const sideimg=document.createElement("img");
    sideimg.src=article.urlToImage;
    const desc=document.createElement("div");
        desc.classList.add("desc");
            const title=document.createElement("h3");
            if(article.title.length>50) title.textContent=article.title.slice(0,50) + " ...";
            else title.textContent=article.title;
            desc.appendChild(title);
            const description=document.createElement("p");
            if(article.description.length>100) description.textContent=article.description.slice(0,100) + " ...";
            else description.textContent=article.description;
            desc.appendChild(description);
    side.appendChild(desc);
    side.appendChild(sideimg);
/* link */
  side.addEventListener("click",()=>{
     window.location.href=article.url;
  })
  hero.appendChild(side);//side is also appended to hero
});

maindiv.appendChild(hero);//hero is appended to main div
/* --------------------------------*/
const articlesrest=allArticles.slice(2,5);
const support=document.createElement("div");
support.classList.add("support");
articlesrest.forEach((article)=>{
 const small=document.createElement("div");
 small.classList.add("small");
    const smallImg=document.createElement("img");
    smallImg.src=article.urlToImage;
    const desc=document.createElement("div");
    desc.classList.add("desc");
        const title=document.createElement("h3");
        if(article.title.length>20) title.textContent=article.title.slice(0,20) + " ...";
        else title.textContent=article.title;
        desc.appendChild(title);     
        const description=document.createElement("p");
        if(article.description.length>35) description.textContent=article.description.slice(0,35) + " ...";
        else description.textContent=article.description;
        desc.appendChild(description);
    small.appendChild(desc);
    small.appendChild(smallImg);
support.appendChild(small);
small.addEventListener("click",()=>{//link event listener
     window.open(article.url,"_blank");
  })
})
maindiv.appendChild(support);
}
/* this is called on loading*/ 
 /*async*/function getEverything(){
    try{
        const politicalArticles= /*await*/fetchData("politics");
        console.log(politicalArticles);
        displayData(politicalArticles,"Politics");
        const businessArticles= /*await*/fetchData("business");
        displayData(businessArticles,"Business");
        const entertainmentArticles= /*await*/fetchData("entertainment");
        displayData(entertainmentArticles,"Entertainment"); 
    }
    catch(error){
        console.log("Error in displaying the data");
    }
};
getEverything();
/*---------------------------- here we are going to implement the search functionality------------------------------------ */ 
var searching= /*async*/function (){
    const searchquery=document.getElementById("searchbar").value.trim();
    if(searchquery===""){
        reload();//there is no query;
    }
    else{
        try{
            const output= /**await*/fetchSearchedItems(searchquery);
            displaySearch(output);
        }
        catch(err){
            console.log(err);
        }
    }
    }
/** this is used to fetch the searched query items */
/*async*/function fetchSearchedItems(query){
    try{
       /*const apikey=MY-API-KEY;
        const apiURL=`https://newsapi.org/v2/everything?q=${query}&apiKey=${apikey}&pageSize=20`;  
        const response =  await fetch(apiURL);
        const data=  await fetch(apiURL).then(function (response) {
            return response.json(); })
           */
           console.log(query);
           return articlesTechnology;
    }
    catch(err){
        console.log(err);
    }
}
/**this is used to display the searched items */
 function displaySearch(searchResults){
    const maindiv=document.getElementById("main-container");
    maindiv.innerHTML="";
    let filteredOutput = [];
    for (let i= 0; i<searchResults.length&& filteredOutput.length<12; i++) {
        if (!(searchResults[i].author=== null || searchResults[i].title === 'removed'||searchResults[i].description==='Removed'||searchResults[i].urlToImage===null ) )
            filteredOutput = [...filteredOutput, searchResults[i]];
    }
    filteredOutput.forEach((out)=>{
        const sSide=document.createElement("div");
        sSide.classList.add("searchOutput");//created a div with classname searchOutput
            const oImage=document.createElement("img");
            oImage.src=out.urlToImage;
            const oHeading=document.createElement("h3");
            if(out.title.length>55) oHeading.textContent=out.title.slice(0,55) + " ...";
            else oHeading.textContent=out.title;
            const odesc=document.createElement("p");
            if(out.description.length>380) description.textContent=out.description.slice(0,380) + " ...";
            else odesc.textContent=out.description;
            sSide.appendChild(oImage);//image is appended to output container
            sSide.appendChild(oHeading);//heading is appended
            sSide.appendChild(odesc);//description is appended
        maindiv.appendChild(sSide);//appended it to the main conatiner
        sSide.addEventListener("click",()=>{//link event listener
            window.open(out.url,"_blank");
         })
    })
}
