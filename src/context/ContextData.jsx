import React, { createContext, useEffect, useState } from 'react'

const ContextData = createContext({});

export const ContextProvider = ({ children }) => {

    const data = [
        {
            source: {
                id: "the-verge",
                name: "The Verge"
            },
            category: "Technology",
            author: "Thomas Ricker",
            title: "This LG lamp is also a projector and Bluetooth speaker - The Verge",
            description: "LG’s PF600U combines a full HD projector, Bluetooth speaker, and standing floor lamp, while the CineBeam S (model PU615U) is very small 4K ultra-short throw projector that sits inches from the wall.",
            url: "https://www.theverge.com/2025/1/3/24334850/lg-lamp-projectors-speaker-ust-4k-specs",
            urlToImage: "https://cdn.vox-cdn.com/thumbor/EMhxF4D45aWu7yIr9G9v0NITQ2M=/0x0:2200x1242/1200x628/filters:focal(1100x621:1101x622)/cdn.vox-cdn.com/uploads/chorus_asset/file/25814951/Ambient_C_Alt.jpg",
            publishedAt: "2025-01-03T08:57:55Z",
            content: "This LG lamp is also a projector and Bluetooth speaker\r\nThis LG lamp is also a projector and Bluetooth speaker\r\n / Its launching alongside an incredibly small 4K projector that sits just inches from … [+191 chars]"
        },
        {
            source: {
                id: null,
                name: "Forbes"
            },
            author: "Davey Winder",
            category: "Technology",
            title: "Gmail Security Threat Confirmed—Google Won’t Fix It, Here’s Why - Forbes",
            description: "As Gmail AI security vulnerabilities come to the surface, why won’t Google fix the problem? Here’s what Google has to say.",
            url: "https://www.forbes.com/sites/daveywinder/2025/01/03/gmail-security-threat-confirmed-google-wont-fix-it-heres-why/",
            urlToImage: "https://imageio.forbes.com/specials-images/imageserve/6708d84f24ab7e6166bd9fa8/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            publishedAt: "2025-01-03T07:37:24Z",
            content: "Google won't fix this confirmed AI security issuehere's why.\r\nSOPA Images/LightRocket via Getty Images\r\nUpdate, Jan. 3, 2025: This story, originally published Jan. 2, now includes details of another … [+9294 chars]"
        },
        {
            source: {
                id: null,
                name: "Forbes"
            },
            author: "Zak Doffman", category: "Technology",
            title: "Google Chrome Update—Bad News For Microsoft Windows - Forbes",
            description: "Chrome starts 2025 with a surprising update—it's not what Microsoft wanted. Here's what you need to know.",
            url: "https://www.forbes.com/sites/zakdoffman/2025/01/03/google-chrome-update-bad-news-for-microsoft-windows/",
            urlToImage: "https://imageio.forbes.com/specials-images/imageserve/5e66cc917d6f2600068f12ff/0x0.jpg?format=jpg&crop=1268,902,x1650,y1089,safe&height=900&width=1600&fit=bounds",
            publishedAt: "2025-01-03T07:22:00Z",
            content: "Google Chrome's latest update proves its resilience\r\nGetty\r\nRepublished on January 3 as a new Microsoft versus Google AI battle for Windows users leaks as a new pre-release Chrome feature leaks.\r\nIts… [+4661 chars]"
        },
        {
            source: {
                id: null,
                name: "GSMArena.com"
            },
            author: "Vlad", category: "Technology",
            title: "Samsung Galaxy A16 5G lands in the US next week alongside the Galaxy Fit3 - GSMArena.com news - GSMArena.com",
            description: "If you buy the phone in the first month you can get the wearable for half off. The Galaxy A16 5G was first announced in October, and today Samsung has...",
            url: "https://www.gsmarena.com/samsung_galaxy_a16_5g_lands_in_the_us_next_week_alongside_the_galaxy_fit3-news-65941.php",
            urlToImage: "https://fdn.gsmarena.com/imgroot/news/25/01/galaxy-a16-5g-us/-952x498w6/gsmarena_000.jpg",
            publishedAt: "2025-01-03T03:07:01Z",
            content: "The Galaxy A16 5G was first announced in October, and today Samsung has unveiled its release plans for the device in the US. The A16 5G will become available on January 9 from Samsung.com as well as … [+1009 chars]"
        },
        {
            source: {
                id: null,
                name: "Push Square"
            },
            author: "Khayl Adam", category: "Technology",
            title: "Leaked GTA 6 Image, Reportedly from Rockstar's Own Office, Surfaces - Push Square",
            description: "Truly AAAA; review scales will need to be recalibrated",
            url: "https://www.pushsquare.com/news/2025/01/leaked-gta-6-image-reportedly-from-rockstars-own-office-surfaces",
            urlToImage: "https://images.pushsquare.com/bc9b1492898fd/1280x720.jpg",
            publishedAt: "2025-01-03T03:00:00Z",
            content: "A reputed former Rockstar employee with no fear for the consequences has seemingly leaked an image of Grand Theft Auto 6. More brazen still, the image appears to have been taken inside the developer'… [+1364 chars]"
        },
        {
            source: {
                id: "the-verge",
                name: "The Verge"
            },
            author: "Jay Peters", category: "Technology",
            title: "The latest RTX 50 leak comes from Nvidia - The Verge",
            description: "It seems like Nvidia might be about to reveal its RTX 50 series GPUs, and Nvidia itself is teasing a new design in a video for upcoming LAN party.",
            url: "https://www.theverge.com/2025/1/2/24334642/nvidia-geforce-rtx-50-leak-lan-party",
            urlToImage: "https://cdn.vox-cdn.com/thumbor/5ijhZWotTzF4MjhMpTRCf42hoBI=/0x0:3840x2160/1200x628/filters:focal(1920x1080:1921x1081)/cdn.vox-cdn.com/uploads/chorus_asset/file/25814563/videoframe_30347.png",
            publishedAt: "2025-01-03T01:05:00Z",
            content: "The latest RTX 50 leak comes from Nvidia\r\nThe latest RTX 50 leak comes from Nvidia\r\n / Whats hidden in that shadowy PC?\r\nByJay Peters, a news editor who writes about technology, video games, and virt… [+1347 chars]"
        },
        {
            source: { id: "the-washington-post", name: "The Washington Post" },
            author: "Kelsey Ables", category: "General",
            title: "Wayne Osmond, founding member of the Osmonds, is dead at 73 - The Washington Post",
            description: "Donny Osmond, in a tribute on social media, described his brother and bandmate as the 'ultimate optimist' and said his death was the result of a stroke.",
            url: "https://www.washingtonpost.com/obituaries/2025/01/02/osmonds-wayne-osmond-donny/",
            urlToImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/F4X4UAB6JDNGIZ2EYPGZS6ZUQE.jpg&w=1440",
            publishedAt: "2025-01-03T08:08:17Z",
            content: "Wayne Osmond, a singer, guitarist and a founding member of the Osmonds family band, has died. He was 73. His brothers Donny and Merrill Osmond wrote on social media that the cause was a stroke."
        },
        {
            source: { id: null, name: "Financial Times" }, category: "General",
            author: "Harry Dempsey, Demetri Sevastopulo, Leo Lewis",
            title: "Joe Biden expected to block $15bn takeover of US Steel - Financial Times",
            description: "President set to kill Nippon Steel’s bid in one of his final acts in office",
            url: "https://www.ft.com/content/69d755cd-48d3-4be0-947d-0d05cc8d4a83",
            urlToImage: "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F3ea35d12-4783-44d2-9838-86f44a36118e.jpg?source=next-barrier-page",
            publishedAt: "2025-01-03T08:01:49Z",
            content: "The new FT Digital Edition: todays FT, cover to cover on any device."
        },
        {
            source: { id: null, name: "BBC News" },
            author: null, category: "General",
            title: "Delhi: Fog disrupts life and travel in northern India - BBC.com",
            description: "Several flights and trains were delayed as a thick blanket of fog engulfed Delhi and surrounding areas.",
            url: "https://www.bbc.com/news/articles/cx2yz5wv08jo",
            urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/3d38/live/78a2a5d0-c995-11ef-94cb-5f844ceb9e30.jpg",
            publishedAt: "2025-01-03T07:36:36Z",
            content: "A thick blanket of fog has engulfed Delhi and adjoining areas in northern India, leading to travel delays and chaos."
        },
        {
            source: { id: null, name: "CBS Sports" },
            author: "", category: "General",
            title: "Will Brinson's NFL Week 18 best bets: Motivation, starters resting key; Bengals roll to stay alive - CBS Sports",
            description: "Brinson's best bets for Week 18 of the NFL season",
            url: "https://www.cbssports.com/nfl/news/will-brinsons-nfl-week-18-best-bets-motivation-starters-resting-key-bengals-roll-to-stay-alive/",
            urlToImage: "https://sportshub.cbsistatic.com/i/r/2024/12/22/4a7f0dd0-f6bc-44cf-91ef-aa9f8aefbd9d/thumbnail/1200x675/67fc5fb5551be77c1ffd4e88a151d4ee/burrowjoe.jpg",
            publishedAt: "2025-01-03T07:22:00Z",
            content: "Week 18. The end of the freaking NFL season is here and, man, did it get here fast."
        },
        {
            source: { id: null, name: "Suntimes.com" },
            author: "Georgia Nicols", category: "General",
            title: "Horoscope for Friday, January 3, 2025 - Chicago Sun-Times",
            description: null,
            url: "https://chicago.suntimes.com/horoscopes/2025/01/03/horoscopes-today-friday-january-3-2025",
            urlToImage: "https://cst.brightspotcdn.com/dims4/default/e411933/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fchorus-production-cst-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2F33%2Ffd%2F7568bfef60962f663a8716ddcbb1%2Fgeorgia-nicols.jpg",
            publishedAt: "2025-01-03T06:03:10Z",
            content: "Moon alert After 9:45 a.m. Chicago time, there are no restrictions to shopping or important decisions."
        },
        {
            source: { id: "reuters", name: "Reuters" },
            author: "Reuters", category: "General",
            title: "China will sharply increase funding from treasury bonds to spur growth in 2025 - Reuters",
            description: "China will sharply increase funding from ultra-long treasury bonds in 2025 to spur business investment and consumer-boosting initiatives, a state planner official said on Friday, as Beijing ramps up fiscal stimulus to revitalise the faltering economy.",
            url: "https://www.reuters.com/world/china/china-will-sharply-increase-funding-treasury-bonds-spur-growth-2025-2025-01-03/",
            urlToImage: "https://www.reuters.com/resizer/v2/WCFPE7QKONMDBABREJ3UGFQJ4Q.jpg?auth=5de8b34672abef75dd38cdf295ffacc8b2d15af5a5ff3a93690195eb6fb9519a&height=1005&width=1920&quality=80&smart=true",
            publishedAt: "2025-01-03T05:53:00Z",
            content: null
        },
        {
            source: { id: null, name: "Financial Times" }, category: "Business",
            author: "Harry Dempsey, Demetri Sevastopulo, Leo Lewis",
            title: "Joe Biden expected to block $15bn takeover of US Steel - Financial Times",
            description: "President set to kill Nippon Steel’s bid in one of his final acts in office",
            url: "https://www.ft.com/content/69d755cd-48d3-4be0-947d-0d05cc8d4a83",
            urlToImage: "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F3ea35d12-4783-44d2-9838-86f44a36118e.jpg?source=next-barrier-page",
            publishedAt: "2025-01-03T08:01:49Z",
            content: "The new FT Digital Edition: todays FT, cover to cover on any device. ..."
        },
        {
            source: { id: "the-washington-post", name: "The Washington Post" },
            author: "Hannah Sampson", category: "Business",
            title: "What is Turo? Car rental app was used in New Orleans, Vegas incidents. - The Washington Post",
            description: "The company said it is “devastated” and working with law enforcement.",
            url: "https://www.washingtonpost.com/travel/2025/01/02/turo-car-rental-new-orleans-las-vegas/",
            urlToImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MIWAMJQWFJOZOHBJDC4GPVCYUU.jpg&w=1440",
            publishedAt: "2025-01-03T07:10:52Z",
            content: "Turo, an alternative to traditional car-rental companies, has found itself in an uncomfortable spotlight ..."
        },
        {
            source: { id: null, name: "CNBC" },
            author: "Sarah Min", category: "Business",
            title: "Stock futures are little changed after a rocky start to 2025: Live updates - CNBC",
            description: "Wall Street is coming off a choppy trading session, with investors taking profits in some notable 2024 gainers such as Apple and Tesla.",
            url: "https://www.cnbc.com/2025/01/02/stock-market-today-live-updates.html",
            urlToImage: "https://image.cnbcfm.com/api/v1/image/108077019-1734452579387-NYSE_Traders-OB-Photo-20241217-CC-PRESS-11.jpg?v=1734452791&w=1920&h=1080",
            publishedAt: "2025-01-03T06:47:00Z",
            content: "U.S. stock futures were little changed Thursday night after a volatile start to the new year ..."
        },
        {
            source: { id: "reuters", name: "Reuters" },
            author: "Reuters", category: "Business",
            title: "China will sharply increase funding from treasury bonds to spur growth in 2025 - Reuters",
            description: "China will sharply increase funding from ultra-long treasury bonds in 2025 to spur business investment and consumer-boosting initiatives...",
            url: "https://www.reuters.com/world/china/china-will-sharply-increase-funding-treasury-bonds-spur-growth-2025-2025-01-03/",
            urlToImage: "https://www.reuters.com/resizer/v2/WCFPE7QKONMDBABREJ3UGFQJ4Q.jpg?auth=5de8b34672abef75dd38cdf295ffacc8b2d15af5a5ff3a93690195eb6fb9519a&height=1005&width=1920&quality=80&smart=true",
            publishedAt: "2025-01-03T05:53:00Z",
            content: null
        },
        {
            source: { id: "reuters", name: "Reuters" },
            author: "Jonathan Stempel", category: "Business",
            title: "Apple to pay $95 million to settle Siri privacy lawsuit - Reuters",
            description: "Apple agreed to pay $95 million in cash to settle a proposed class action lawsuit claiming that its voice-activated Siri assistant violated users' privacy.",
            url: "https://www.reuters.com/legal/apple-pay-95-million-settle-siri-privacy-lawsuit-2025-01-02/",
            urlToImage: "https://www.reuters.com/resizer/v2/345JJD4CEZKSNP7HWXDRFUJ4AY.jpg?auth=ed3060ec4865465b50c832fb1c215557497c55c7e2b9b4cbfafebd4a86d2823f&height=1005&width=1920&quality=80&smart=true",
            publishedAt: "2025-01-03T04:37:00Z",
            content: null
        },
        {
            source: { id: null, name: "TheStreet" },
            author: "Rob Lenihan", category: "Business",
            title: "Analysts reset Nvidia stock forecast ahead of major conference - TheStreet",
            description: "Here's what could happen next to Nvidia shares.",
            url: "https://www.thestreet.com/technology/analysts-focus-on-nvidia-ahead-of-key-tech-event",
            urlToImage: "https://www.thestreet.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_1200/MjEwMjk1MjgxMjM1Nzk3NTgy/key-speakers-at-the-nvidia-gtc-conference.jpg",
            publishedAt: "2025-01-03T03:44:54Z",
            content: "You have to wonder what Bob Galvin would have thought of Jetson Thor..."
        },
        {
            source: { id: null, name: "The Daily Galaxy --Great Discoveries Channel" }, category: "Science",
            title: "NASA Claims: China Could Slow Earth’s Rotation With a Single Action",
            description: "NASA scientists explore the impact of the massive Three Gorges Dam on Earth's rotation due to its redistribution of water mass.",
            url: "https://dailygalaxy.com/2025/01/nasa-claims-china-could-slow-earths-rotation-with-a-single-action/",
            urlToImage: "https://dailygalaxy.com/wp-content/uploads/2025/01/Three-Gorges-Dam-Earths-Rotation-NASA.jpeg",
            publishedAt: "2025-01-03T10:00:55Z",
        },
        {
            source: { id: null, name: "ScienceAlert" },
            author: "Mike McRae", category: "Science",
            title: "New Theory Solves Paradox of Schrödinger's Cat by Claiming We're in a Multiverse",
            description: "A new theory suggests that the paradox of Schrödinger's Cat might be explained by the multiverse, reshaping our understanding of quantum mechanics.",
            url: "https://www.sciencealert.com/new-theory-solves-paradox-of-schrdingers-cat-by-claiming-were-in-a-multiverse",
            urlToImage: "https://www.sciencealert.com/images/2024/12/many_cats_in_a_box_header.jpg",
            publishedAt: "2025-01-03T03:36:50Z",
        },
        {
            source: { id: null, name: "SciTechDaily" }, category: "Science",
            title: "The Chilling Discovery That Could Point to Life Beyond Earth",
            description: "Research into icy ocean worlds like Jupiter's Europa offers new insights into conditions that could support life, exploring thermodynamic concepts.",
            url: "https://scitechdaily.com/?p=445748",
            urlToImage: "https://scitechdaily.com/images/Cold-Icy-Exoplanet-Art-Concept-Illustration.jpg",
            publishedAt: "2025-01-03T02:58:49Z",
        },
        {
            source: { id: null, name: "ScienceAlert" },
            author: "Michelle Starr", category: "Science",
            title: "Massive 'Grand Design' Spiral Galaxy Found Just a Billion Years After Big Bang",
            description: "Astronomers find a 'grand design' spiral galaxy dating back just a billion years after the Big Bang, challenging current cosmological models.",
            url: "https://www.sciencealert.com/massive-grand-design-spiral-galaxy-found-just-a-billion-years-after-big-bang",
            urlToImage: "https://www.sciencealert.com/images/2024/12/m51.jpg",
            publishedAt: "2025-01-03T01:32:29Z",
        },
        {
            source: { id: null, name: "Spaceflight Now" }, category: "Science",
            title: "Live coverage: SpaceX to launch Thuraya 4-NGS telecommunications satellite on Falcon 9 rocket from Cape Canaveral",
            description: null,
            url: "https://spaceflightnow.com/2025/01/03/live-coverage-spacex-to-launch-thuraya-4-ngs-telecommunications-satellite-on-falcon-9-rocket-from-cape-canaveral/",
            urlToImage: null,
            publishedAt: "2025-01-03T01:18:16Z",
        },
        {
            source: { id: "the-times-of-india", name: "The Times of India" },
            author: "Sonal Khandelwal", category: "Science",
            title: "10 animals that are older than dinosaurs",
            description: "Ancient species such as crinoids have survived for millions of years, offering a glimpse into Earth’s extraordinary evolutionary past.",
            url: "https://timesofindia.indiatimes.com/life-style/spotlight/web-stories/10-animals-that-are-older-than-dinosaurs/photostory/116890109.cms",
            urlToImage: "https://static.toiimg.com/thumb/msid-116890285,imgsize-250146,width-900,height-1200,resizemode-6/116890285.jpg",
            publishedAt: "2025-01-03T00:30:00Z",
        },
        {
            source: { id: null, name: "BBC News" },
            author: null, category: "Health",
            title: "Musician who contracted flesh-eating bug gets new lease of life - BBC.com",
            description: "Mike Stobbie contracted a \"flesh-eating disease\" but says it has given him a new appreciation of life.",
            url: "https://www.bbc.com/news/articles/crl3d2x70p5o",
            urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/c5a0/live/57b8cd80-b89d-11ef-8f4f-f32c7e094699.jpg",
            publishedAt: "2025-01-03T06:16:30Z",
            content: "Mike Stobbie, with his wife Anna, at the Royal London Hospital recovering from necrotising fasciitis..."
        },
        {
            source: { id: "the-times-of-india", name: "The Times of India" },
            author: "TOI World Desk", category: "Health",
            title: "Another pandemic brewing in China? All you need to know about Human Metapneumovirus - The Times of India",
            description: "Rest of World News: China faces a surge in respiratory infections, likely linked to Human Metapneumovirus (HMPV), causing overcrowded hospitals.",
            url: "https://timesofindia.indiatimes.com/world/rest-of-world/another-pandemic-brewing-in-china-all-you-need-to-know-about-human-metapneumovirus/articleshow/116900423.cms",
            urlToImage: "https://static.toiimg.com/thumb/msid-116900694,width-1070,height-580,imgsize-1792772,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            publishedAt: "2025-01-03T03:31:00Z",
            content: null
        },
        {
            source: { id: "the-washington-post", name: "The Washington Post" },
            author: "Anjuman Ali", category: "Health",
            title: "Exercise, nudge words and resolutions: The week in Well+Being - The Washington Post",
            description: "Plus, 10 tips from our Ask a Doctor column to help you live better.",
            url: "https://www.washingtonpost.com/wellness/2025/01/02/exercise-nudge-words-resolutions/",
            urlToImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/URUK3OHR45AT3GAY4DSDBSQMU4.jpg&w=1440",
            publishedAt: "2025-01-03T03:00:00Z",
            content: "You are reading our weekly Well+Being newsletter. Sign up here to get it delivered to your inbox every Thursday..."
        },
        {
            source: { id: null, name: "ScienceAlert" },
            author: "David Nield", category: "Health",
            title: "Vagus Nerve Stimulation Shows Lasting Effects in People With Severe Depression - ScienceAlert",
            description: "Stimulating either of a pair of crucial nerves that carry messages from the brain to several major organs could be an effective way to treat people with severe depression.",
            url: "https://www.sciencealert.com/vagus-nerve-stimulation-shows-lasting-effects-in-people-with-severe-depression",
            urlToImage: "https://www.sciencealert.com/images/2024/12/DepressedFace.jpg",
            publishedAt: "2025-01-03T01:57:30Z",
            content: "Stimulating either of a pair of crucial nerves that carry messages from the brain to several major organs could be an effective way to treat people with severe depression..."
        },
        {
            source: { id: null, name: "KOIN.com" },
            author: "Jenna Deml", category: "Health",
            title: "2 Portland area children died from flu, OHA says - KOIN.com",
            description: "Two children from the Portland area died of influenza in late December, according to new data released from the Oregon Health Authority.",
            url: "https://www.koin.com/news/health/2-portland-area-children-died-from-flu-oha-says/",
            urlToImage: "https://www.koin.com/wp-content/uploads/sites/10/2025/01/GettyImages-1386012927.jpg?w=1280",
            publishedAt: "2025-01-03T01:54:39Z",
            content: "PORTLAND, Ore. (KOIN) — Two children from the Portland area died of influenza in late December, according to new data released from the Oregon Health Authority..."
        },
        {
            source: { id: null, name: "[Removed]" },
            author: null, category: "Health",
            title: "[Removed]",
            description: "[Removed]",
            url: "https://removed.com",
            urlToImage: null,
            publishedAt: "2025-01-03T01:30:00Z",
            content: "[Removed]"
        },
        {
            source: { id: null, name: "CBS Sports" },
            author: "", category: "Sports",
            title: "Will Brinson's NFL Week 18 best bets: Motivation, starters resting key; Bengals roll to stay alive - CBS Sports",
            description: "Brinson's best bets for Week 18 of the NFL season",
            url: "https://www.cbssports.com/nfl/news/will-brinsons-nfl-week-18-best-bets-motivation-starters-resting-key-bengals-roll-to-stay-alive/",
            urlToImage: "https://sportshub.cbsistatic.com/i/r/2024/12/22/4a7f0dd0-f6bc-44cf-91ef-aa9f8aefbd9d/thumbnail/1200x675/67fc5fb5551be77c1ffd4e88a151d4ee/burrowjoe.jpg",
            publishedAt: "2025-01-03T07:22:00Z",
            content: "Week 18. The end of the freaking NFL season is here and, man, did it get here fast. We should be in store for some awesome playoff games based on the teams in and/or vying for the postseason. But fir… [+7422 chars]"
        },
        {
            source: { id: null, name: "247Sports" },
            author: "Jeremy Werner", category: "Sports",
            title: "Quick hits: Humrichous, bench boost Illini in 109-77 rout at No. 9 Oregon - 247Sports",
            description: "Illinois catches fire from three and gets a nearcomplete team effort in Quad 1 road win at Oregon",
            url: "https://247sports.com/college/illinois/article/illinois-fighting-illini-basketball-oregon-ducks-recap-quick-hits-243406866/",
            urlToImage: "https://s3media.247sports.com/Uploads/Assets/333/852/12852333.jpeg?width=1200&height=628&crop=1.91:1&fit=cover",
            publishedAt: "2025-01-03T05:16:42Z",
            content: "Illinois men's basketball ensured Oregon athletics' terrible start to 2025 continued.\r\nA day after Ohio State football demolished No. 1 seed Oregon in the College Football Playoff quarterfinal at the… [+5639 chars]"
        },
        {
            source: { id: null, name: "NBCSports.com" },
            author: "Mike Florio", category: "Sports",
            title: "For the CFP, a bye became a quick exit - NBC Sports",
            description: "From time to time in the NFL playoffs, teams that earn a bye week have a hard time firing up the engines against a team that played and won in the wild-card round.",
            url: "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/for-the-cfp-a-bye-became-a-quick-exit",
            urlToImage: "https://nbcsports.brightspotcdn.com/dims4/default/826dae5/2147483647/strip/true/crop/6000x3375+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F92%2Fb1%2F35b2a68b4961993b06cb347f8f09%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2191626261",
            publishedAt: "2025-01-03T04:38:38Z",
            content: "From time to time in the NFL playoffs, teams that earn a bye week have a hard time firing up the engines against a team that played and won in the wild-card round.\r\nIn the first year of the 12-team c… [+1673 chars]"
        },
        {
            source: { id: null, name: "hoopsrumors.com" },
            author: null, category: "Sports",
            title: "Jimmy Butler Tells Heat He Wants Trade - hoopsrumors.com",
            description: "Butler said he wants to 'get his joy back' playing basketball and that it's 'probably not' going to happen in Miami.",
            url: "https://www.hoopsrumors.com/2025/01/latest-on-jimmy-butler-9.html",
            urlToImage: "https://cdn.hoopsrumors.com/files/2024/12/Jimmy-Butler-1-900x600.jpg",
            publishedAt: "2025-01-03T04:22:00Z",
            content: "10:22pm: Butler has indicated to the Heat that he wants to be traded, according to Shams Charania and Brian Windhorst of ESPN.\r\nAlthough Charania previously identified the Suns, Warriors, Mavericks, … [+3945 chars]"
        },
        {
            source: { id: null, name: "Yahoo Entertainment" },
            author: "Jack Baer", category: "Sports",
            title: "Kirby Smart complains about officials allowing Notre Dame's 11-man substitution on critical Sugar Bowl play - Yahoo Sports",
            description: "Notre Dame got the best of Georgia on fourth-and-1, and Kirby Smart was not happy.",
            url: "https://sports.yahoo.com/kirby-smart-complains-about-officials-allowing-notre-dames-11-man-substitution-on-critical-sugar-bowl-play-031323798.html",
            urlToImage: null, publishedAt: "2025-01-03T03:41:00Z",
            content: "Kirby Smart had something to say to Sugar Bowl officials. (Photo by Sean Gardner/Getty Images)\r\nGeorgia's season is over after a 23-10 loss to Notre Dame in the Sugar Bowl, but the single moment that… [+4470 chars]"
        },
        {
            source: { id: null, name: "247Sports" },
            author: "Drew Mentock", category: "Sports",
            title: "Everything Coach Freeman, Leonard, Watts Said Following No. 5 Notre Dame's Playoff Victory Over No. 2 Georgia - 247Sports",
            description: "On Thursday No 7seed Notre Dame football defeated No 2seed Georgia 2310 in a College Football Playoff quarterfinal matchup Following the victory Fighting Irish head coach Marcus Freeman quarterback Riley Leonard and safety Xavier Watts spoke with the media He…",
            url: "https://247sports.com/college/notre-dame/longformarticle/everything-coach-fighting-irish-coach-marcus-freeman-riley-leonard-xavier-watts-said-following-no-5-notre-dames-college-football-playoff-victory-over-no-2-georgia-243394685/",
            urlToImage: "https://s3media.247sports.com/Uploads/Assets/55/852/12852055.jpg?width=1200&height=628&crop=1.91:1&fit=cover",
            publishedAt: "2025-01-03T03:25:51Z",
            content: "RL: 'Yeah, I mean, everybody keeps telling me stop doing that, and I did it, and it worked out today. Plus, we're in the playoffs, which was like, all right, put your butt on the line. But that's my … [+726 chars]"
        },
        {
            source: {
                id: "business-insider",
                name: "Business Insider"
            },
            author: "Amanda Goh", category: "Entertainment",
            title: "Jennifer Aniston, 55, says she keeps her diet in check with the '80/20' rule - Yahoo Life",
            description: "Aniston said she avoids extra salt or salad dressing and instead uses ingredients like vinegar to season her dishes.",
            url: "https://www.businessinsider.com/jennifer-aniston-diet-80-20-rule-health-fitness-routine-2025-1",
            urlToImage: "https://s.yimg.com/ny/api/res/1.2/S9Bo36HGs3GFiOayRBNfSA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://media.zenfs.com/en/insider_articles_922/d830668f949a5a006467f3a82d52fd5b",
            publishedAt: "2025-01-03T09:34:53Z",
            content: "<ul><li>Jennifer Aniston, 55, exercises regularly and keeps her diet in check with the 80/20 rule.</li><li>The 80/20 rule involves eating healthily 80% of the time and being more lenient during the… [+2092 chars]"
        },
        {
            source: {
                id: "the-washington-post",
                name: "The Washington Post"
            },
            author: "Kelsey Ables", category: "Entertainment",
            title: "Wayne Osmond, founding member of the Osmonds, is dead at 73 - The Washington Post",
            description: "Donny Osmond, in a tribute on social media, described his brother and bandmate as the “ultimate optimist” and said his death was the result of a stroke.",
            url: "https://www.washingtonpost.com/obituaries/2025/01/02/osmonds-wayne-osmond-donny/",
            urlToImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/F4X4UAB6JDNGIZ2EYPGZS6ZUQE.jpg&w=1440",
            publishedAt: "2025-01-03T08:08:17Z",
            content: "Wayne Osmond, a singer, guitarist and a founding member of the Osmonds family band, has died. He was 73. His brothers Donny and Merrill Osmond wrote on social media that the cause was a stroke."
        },
        {
            source: {
                id: null,
                name: "Suntimes.com"
            },
            author: "Georgia Nicols", category: "Entertainment",
            title: "Horoscope for Friday, January 3, 2025 - Chicago Sun-Times",
            description: null,
            url: "https://chicago.suntimes.com/horoscopes/2025/01/03/horoscopes-today-friday-january-3-2025",
            urlToImage: "https://cst.brightspotcdn.com/dims4/default/e411933/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fchorus-production-cst-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2F33%2Ffd%2F7568bfef60962f663a8716ddcbb1%2Fgeorgia-nicols.jpg",
            publishedAt: "2025-01-03T06:03:10Z",
            content: "Moon alert After 9:45 a.m. Chicago time, there are no restrictions to shopping or important decisions. The moon is in Pisces. Aries (March 21-April 19) Steer clear of arguments with your kids or f… [+3936 chars]"
        },
        {
            source: {
                id: null,
                name: "Daily Beast"
            },
            author: "William Vaillancourt", category: "Entertainment",
            title: "Matt Gaetz Unveils Radical New Look During MAGA TV Debut - Yahoo! Voices",
            description: "Former Florida congressman Matt Gaetz debuted his eponymous show Thursday night on One America News Network—but much of the attention wasn’t on what the MAGA...",
            url: "https://www.thedailybeast.com/matt-gaetz-unveils-radical-new-look-during-his-debut-show-on-oan/",
            urlToImage: "https://media.zenfs.com/en/thedailybeast.com/12036848ac20d23add5ee569844be5dd",
            publishedAt: "2025-01-03T04:04:00Z",
            content: "Former Florida congressman Matt Gaetz debuted his eponymous show Thursday night on One America News Network but much of the attention wasn’t on what the MAGA figure had to say. Instead, many viewers r… [+2479 chars]"
        },
        {
            source: {
                id: "business-insider",
                name: "Business Insider"
            },
            author: "Amanda Goh", category: "Entertainment",
            title: "Jennifer Love Hewitt, 45, says fans have a 'hard time' accepting that she doesn't look like she did in her 20s - Yahoo Entertainment",
            description: "In a survey published in Harvard Business Review, women in leadership roles reported facing workplace age discrimination at every age bracket.",
            url: "https://www.businessinsider.com/jennifer-love-hewitt-struggle-aging-appearance-ageism-hollywood-workplace-discrimination-2025-1",
            urlToImage: "https://s.yimg.com/ny/api/res/1.2/vTw5AQgtosh8rLbgMMMZww--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://media.zenfs.com/en/insider_articles_922/99f84b3d0bfcbc38e1f2511d3144c896",
            publishedAt: "2025-01-03T01:57:00Z",
            content: "<ul><li>Jennifer Love Hewitt, 45, is speaking out against ageism in Hollywood.</li><li>She told Fox News that fans have a \"hard time\" accepting that she no longer looks like she did in her 20s.</li><li>… [+2917 chars]"
        },
        {
            source: {
                id: null,
                name: "Daily Beast"
            },
            author: "William Vaillancourt", category: "Entertainment",
            title: "Matt Gaetz Unveils Radical New Look During MAGA TV Debut - Yahoo! Voices",
            description: "Former Florida congressman Matt Gaetz debuted his eponymous show Thursday night on One America News Network—but much of the attention wasn’t on what the MAGA...",
            url: "https://www.thedailybeast.com/matt-gaetz-unveils-radical-new-look-during-his-debut-show-on-oan/",
            urlToImage: "https://media.zenfs.com/en/thedailybeast.com/12036848ac20d23add5ee569844be5dd",
            publishedAt: "2025-01-03T04:04:00Z",
            content: "Former Florida congressman Matt Gaetz debuted his eponymous show Thursday night on One America News Network but much of the attention wasn’t on what the MAGA figure had to say. Instead, many viewers r… [+2479 chars]"
        }
    ]

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [category, setCategory] = useState("General");
    const [fetchError, setFetchError] = useState(null);


    useEffect(() => {
        const mylist = data.filter(item => (
            item.category === category
        ))
        setArticles(mylist);
        setIsLoading(false)
    }, [category])

    localStorage.setItem('mews', JSON.stringify(articles))


    return (
        <ContextData.Provider
            value={{

                articles,
                fetchError,
                setArticles,
                isLoading,
                setIsLoading,
                category,
                setCategory
            }
            }>
            {children}
        </ContextData.Provider>
    )
}

export default ContextData