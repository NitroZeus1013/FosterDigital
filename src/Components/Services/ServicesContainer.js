import React from "react";
import { useRouteMatch } from "react-router";
import Service from "./Service";

const servicesData = {
  seo: {
    title: "SEO",
    path: "/seo",
    heroImage: "",
    image: "",
    description: `Eighty-one percent of customers and 94% of B2B buyers will perform searches online before they make a purchase, so brands that do not have a strong online presence will find themselves falling behind the competition. It provides organizations with the visibility they need to attract customers during this digital era.",
      A strong SEO strategy will allow brands to position their website and their content highly on the SERPs for relevant keywords so that they can attract the attention of prospective customers and bring them into their sales funnel.`,
    keypoints: [
      {
        heading: "Social media marketing is not enough",

        content:
          "Yes, channels like Facebook and Instagram are hot. You'll find plenty of marketing experts recommending them. And sure, they can play a vital role in your overall marketing efforts. But in reality, social media marketing is never enough to market your business.That 50% number quoted above? The same study found that social media only accounts for 5% of traffic generation. In addition, even the best presence on your (or your audience's) favorite networks will have no direct impact on your search rankings.Social media is great for brand awareness. It might be even better for customer service interactions. It does not, however, lead to traffic to your website that drives actual leads and customers.Google only includes quantifiable data in its search algorithms and because it doesn't have access to social media metrics, it disconnects social from search rankings. If you want to rank highly, you need an SEO strategy.",
      },
      {
        heading: "Investing in SEO is not expensive",

        content: `I often hear that investing in SEO is expensive. That's relative, but generally not true. In fact, you can get to a #1 ranking on a popular search term with absolutely no budget at all. Because you can't pay your way to the top, you don't need a line item. It really can be that simple.
          Instead, SEO is all about the time you invest and the expertise you bring to the table. If you are looking for external expertise, that does mean spending some money. But you don't need to budget anything for actual ads, because SEO is all about authenticity. It's your actual website or business that ranks, not promotional messages.
          Even when you do invest some money, don't think about SEO as a cost. It's an investment in your business that will pay off long after you spend the money. Your SEO rankings need nurturing, but they won't just disappear. There is no campaign length. The investment you make now is into your business future and growth.`,
      },
      {
        heading: "Slow and steady can win the race",

        content: `Closely related to the above notion is the idea that SEO is not effective because it cannot achieve results quickly. That's true. It takes the average business 4-6 months to see a tangible increase in web traffic as a result of search optimization. The important thing to remember is that this slow and steady approach is actually a good thing.
         When you're embracing SEO, you're playing the long game. The reason it's such a good long-term investment is that even though it takes some time to build, that build will pay off multifold. If you are looking for immediate results, don't abandon SEO—instead, look into some paid SEM ads that can complement your long-term efforts to rank on relevant keywords.`,
      },
      {
        heading: "You can still beat your competition",

        content: `Looking at those relevant keywords for your business and industry can be depressing, especially if your competition is already ranking highly and you're nowhere to be seen. That doesn't mean you shouldn't even start. Beating your competitors and climbing to the top of the rankings is impossible if you don't start somewhere. Remember: You miss 100% of the shots you don't take.
          Viewed differently, your competition's head start might not actually be a bad thing. It gives you the opportunity to find the chinks in the Armor of your closest competitors. They're not doing all they can either, and once they reach a high spot on a relevant search results page, they tend to get lazy. Now is the time to strike.
          Knowing what your competitors are doing is half the battle. Use some competitive SEO research to uncover their tactics and devise a strategy to beat them. They'll never see you coming until your website suddenly receives more clicks and climbs up the rankings higher than theirs.`,
      },
      {
        heading: "Bad experiences don't predict the future",

        content: `Unfortunately, I sometimes run into potential clients who swear off investing in SEO because they've had a bad experience. That's all too common. Many in this game are unscrupulous or not transparent. They engage black hat tactics to get some immediate results, which get your website penalized and hurt your efforts in the long run.`,
      },
    ],
    faqs: [
      {
        que: "What is SEO?",
        ans: `SEO stands for Search Engine Optimization. You engage in SEO when you attempt to get a page to rank higher in a search engine’s SERPs (search engine results pages), with the ultimate goal being to increase organic (unpaid) traffic to that page.`,
      },
      {
        que: "Once I start SEO, how long will it take to get rankings?",
        ans: `SEO isn’t an overnight strategy. The first few months are dedicated to making updates to your site and waiting for the search engine spiders to crawl and index the changes. Depending on your website, the amount of work it requires, and the crawl frequency of the search engine spiders, it typically takes 3-9 months to begin seeing new rankings.`,
      },
      {
        que: "How long will it take to see increases in traffic?",
        ans: `Traffic is typically a direct result of an increase in rankings. Once your rankings begin to increase, you will also begin to see gradual increases in traffic to your website. Keep in mind that new rankings and traffic are not instantaneous, it takes a few months to complete the necessary updates and get them indexed before you will begin to see these increases.`,
      },
      {
        que: "Why should I continue SEO once I’ve gotten good rankings?",
        ans: `Achieving the rankings is only half the battle. Since the search engines are constantly evolving and updating their algorithms, your rankings can fluctuate from one day to the next. Maintaining current rankings is just as involved as getting new ones; it takes constant research, updates, and testing to keep your URL ranking in the top positions. Discontinuing SEO after you’ve achieved rankings will result in a loss of rankings fairly quickly.`,
      },
    ],
  },
  smm: {
    title: "SMM",
    path: "/smm",
    heroImage: "./allImages/Services/SMMM.jpg",
    image: "./allImages/Services/smm2.png",
    description: `That’s 490 million more social media users than at the start of 2020 and shows that social media is still growing rapidly. It’s also 53.6% of the total global population (around 7.8 billion people).
      Yep, you heard it right – more than half of all the people on earth use social media.
      And that’s even more impressive when you consider that only 4.66 billion people have access to the internet.`,

    keypoints: [
      {
        heading: "You can target a specific audience",
        content: `The beauty of social media marketing is that you can create targeted adverts that reach a specific audience. You can select people based on their occupation, skills, likes, dislikes, region, and much, much more. This means that you aren’t wasting any money on advertising to the wrong people. Instead, you are attracting dream customers/clients to your page every day.`,
      },
      {
        heading: "It increases your brand awareness",
        content: `Social media is a great platform to show off the more humane side of your business. You can talk about your staff, your culture, the reason behind your business and bring your customers in on the journey. This acts as an integral touchpoint for customers to understand who you are and what you do before they purchase from you.`,
      },
      {
        heading: "You can provide better customer service",
        content: `With the nature of social media being 24/7 and well, social, you will get a lot of customers interacting with you directly at all times of the day. From asking questions to giving real-time reviews and feedback. This gives you an opportunity to respond quickly to any queries and thank your customers for their support, instead of them having to wait to talk to a customer service representative during office hours.`,
      },
      {
        heading: "It’s cost-effective",
        content: `Advertising on social media is a lot cheaper compared to traditional marketing methods. The best part is that you can run both organic (free) and paid campaigns at once. There are really no rules on this. So, if you’re on a tight budget, you can just put money on content that is going to drive sales and leads, and leave the more engaging posts as organic.`,
      },
      {
        heading: "It gives you access to invaluable customer data",
        content:
          "When you start advertising, or even just posting on social media, you will start to see data populate. This tells you the audience you’re reaching, how many people have liked each post, the biggest cities that engage with your content, how many times people click on your links, and much, much more. This data is invaluable, as it will provide you with up-to-the-minute customer insights, which you can use to steer business decisions going forward.",
      },
    ],

    faqs: [
      {
        que: "How has social media changed marketing strategies?",
        ans: "Social media is now an integral part of an effective digital marketing strategy. Many brands use social media for top-of-funnel marketing and then utilize paid advertising on social media to drive middle-of-funnel or bottom-of-funnel efforts. It has heavily influenced the design and video strategies, as users today expect to get information very quickly. For example, videos that can be understood while muted are popular now, as people want to consume that content while in public. ",
      },
      {
        que: "Why should I invest in social media marketing?",
        ans: "At the very least, social media is great for increasing brand awareness and building a community of prospects. At most, social media can be a major revenue driver. It’s a facilitator of conversation. It’s one of the best ways to make an audience feel like a part of your brand, which drives purchases. Finally, audience targeting is a great reason to invest in social. Boosted/promoted posts and display advertising is great ways to launch a retargeting or brand awareness campaign.",
      },
      {
        que: "Why should I use social media?",
        ans: "Let’s face it: the world’s gone social. In fact, 30% of all time (and counting) spent online is allocated to social media. If you want to get in front of people, social media is the way to do it. Whether you’re interested in brand awareness, sponsored content, or a combination of both, we can help!",
      },
    ],
  },
  "graphic designing": {
    title: "Graphic Designing",
    path: "/graphic designing",
    heroImage: "./allImages/Services/GD.jpg",
    image: "./allImages/Services/Graphic.png",
    description: `Ninety percent of the information transmitted in the human brain is visual so your business needs strong design in order to communicate its purpose.1 With 65% of the population categorized as ‘visual learners’, your money is well spent on formulating a visual approach to create a persona for your business.
    The main reason people prefer graphics and imagery to overwritten text is primarily due to its speed of absorption. This is an extremely important component of consideration and also a major drawback concerning a long body of text.`,

    keypoints: [
      {
        heading: "Helps create a strong impression",
        content:
          "An impressive graphic design must leave an impact on the audience in the first instance. The challenge is to grab attention and keep them hooked on. And the only way to do this is to create a powerful graphic design.",
      },
      {
        heading: "Building a brand identity",
        content:
          "It is very important for your business to establish a brand image, to stand out from the competitors, and help establish your own identity. Every business has its own strength and so you would definitely not want to look like anybody else.",
      },
      {
        heading: "It helps to convey your information",
        content:
          "Most of the time it so happens that words cannot effectively convey information. Or rather it can be done more interestingly with pictures. It is at such times graphic designers can play an important role in conveying information. Your business is complex with many products, sizes, colors and sizes and many other factors which are available. This can sometimes prove a little complex in conveying accurate information. A good graphic design can communicate your offerings in the form of reports, charts, and illustrations.",
      },
      {
        heading: "A good graphic design can narrate a story",
        content: `People must get a feel of what the business is like before they decide to go for a product. A thoughtful design captures the audience’s or a potential customer’s attention. E.g. The concept of renewable energy is completely different from a jewelry design concept. IKF crafted a well-thought-out strategy for both the domains which were starkly different from each other and created graphics accordingly.
            As you can see in the graphic the product is highlighted and the use of ice in the image complements the quality of the product to be ‘crystal clear.
            
            And the other graphic was about Windergy which was into renewable energy.
            The concept of the below graphic is to join a revolution which is conveyed by a walking figure. The background color green compliments the overall placing of the graphics.`,
      },
      {
        heading: "Strong graphic design= Strong consumer trust",
        content:
          "We are living in an era where everything is online even the minutest of information. A poor interactive design will not communicate your brand’s message effectively since the visual is not read, and understood by the audience. As people respond quickly to a rich illustration you should use every opportunity to develop consumer trust and confidence. Poor interface design can develop a rather unfavorable image of the company.",
      },
    ],

    faqs: [
      {
        que: " What is a graphic design and what does it include?",
        ans: "Graphic design is a design process that combines text and graphics in a way that is intended to communicate a specific message.",
      },
      {
        que: " Where is graphic design used?",
        ans: "You will find the graphic design in company logos, printed materials like brochures, posters, signs, greeting cards, postcards, business cards, billboards, and ads. Advances in technology have brought us the digital environment complete with websites, online ads, virtual brochures and presentations, and so very much more.",
      },
      {
        que: " What do graphic designers use to create these designs?",
        ans: "Graphic designers can use hand-illustrated designs as well as computer-aided designs thanks to a wide range of software with nearly endless digital design tools. The availability of software like Adobe Illustrator and Photoshop have become staples of the graphic designer",
      },
      {
        que: "What can a graphic designer do that I can’t do?",
        ans: `A graphic designer does more than just put their creative skills to work. Though most graphic designers are intuitively creative already, they have generally spent time studying numerous design principles. It’s vital to understand how to use design elements to transmit the required messages and values as well as evoke a certain feeling in the viewer. As visual communicators, leverage these design elements and use concepts such as color, typography, space, balance, form, and lines to create their visual message.
            Some graphic designers are also able to understand the more technical aspects of design required to create digital assets for a company. For example, a web designer is often able to create wireframes, workflows, and sitemaps and understand how to develop easy navigation for the user experience`,
      },
    ],
  },
  "web developement": {
    title: "Website Development",
    path: "/website development",
    heroImage: "./allImages/Services/Web-dev.jpg",
    image: "./allImages/Services/Web.png",
    description: `Most consumers are looking online for information that will help them make smarter purchasing decisions.
    In fact, according to the eCommerce Foundation, 88% of consumers will research product information before they make a purchase online or in the store.
    This buying behavior trend emphasizes the importance of a website for today’s businesses.
    If you want your company to be successful in the modern marketplace, you’ve got to have a professional website design.
    Your website is the backbone of your business, supporting all of your digital marketing efforts.`,

    keypoints: [
      {
        heading:
          "Having a website will attract new customers to your business and make you more money.",
        content: `We like this stat so much, we’re mentioning it twice: 81% of people research a business or service online before making a purchase decision. If you don’t have a website, you have no chance of capturing a share of this market.
            Your website can be available 24/7/365 even when you’re not. A website acts as your “always-on” business advocate during and outside of office hours.
            Websites help you convert more of your existing referrals because most people still do their own research and stack you against your competitors.`,
      },
      {
        heading:
          "Add instant credibility to your business simply by having a website.",
        content: `The 21st-century consumer is a skeptic; in fact, 56% of people stated that they won’t trust a business without a website. Having a good website instantly boosts your credibility as a legitimate business.
            First impressions count, and websites allow you to make a very strong impression with a well-designed introduction for your business.
            A website can help showcase your expertise and better position your business. A website can be your number one tool for standing out in a crowd.`,
      },
      {
        heading: "It’s not as hard, or as expensive, as you think.",
        content: `You don’t need to be tech-savvy to get a website. Many web development companies have very simple signup processes which make the process quick and painless for you.
            It can be very cost-effective. Websites offer a better return on investment than any other form of advertising. If you’re planning to market your business, a website should be your first priority.
            Over time the relatively low investment of getting a business website will pay dividends by driving you new customers and building your brand. Plus, it’s a legitimate business expense and a tax write-off.`,
      },
      {
        heading: "Having a website will end up saving you time.",
        content: `Whether you’re trading emails, taking calls, or sending out proposals – communicating with potential customers takes time. Your website can save you that time by providing answers to common customer questions and inquiries. What does this mean for you? You can spend your time doing more valuable things.`,
      },
      {
        heading: "Position yourself and stay in control of your brand.",
        content: `A website acts as a platform for your messaging and shapes the online perception of your business in a way that your social media channels cannot provide.
            The platform allows you to position yourself in the market to get the exact type of customers you’re looking for.
            Many business owners have been reviewed online, sometimes unknowingly and/or negatively. How does this affect you? 79% of users who read online reviews, believe them. Combat that negativity by posting your own positive testimonials`,
      },
    ],
    faqs: [
      {
        que: "How long does it take to build a website?",
        ans: "It takes approximately 6-10 weeks to build a website from start to finish, providing we have all the information from you. Our full web design process is broken down here. Generally speaking, the website will only take a long time if we are still waiting for text and images from you.",
      },
      {
        que: "Will my website be mobile-friendly?",
        ans: "Yes. Your website will be fully responsive and will look great on all devices. We don’t charge extra for this. It comes as standard.",
      },
      {
        que: "Do I actually need a website?",
        ans: " If you want to expand the business, get more inquiries, or become the go-to person in your space then you should have a website.",
      },
    ],
  },
  "website design": {
    title: "Web Design",
    path: "/Web Design",
    heroImage: "./allImages/Services/web-design.jpg",
    image: "./allImages/Services/Web.png",
    description: `Web design is important because you make on them can either get them to remain on your page and learn about your business or leave your page and turn to a competitor. A good web design helps you keep your leads on your page`,

    keypoints: [
      {
        heading: "It sets the first impression",
        content: `When your audience visits your website, it gives them their first impression of your business. They will judge your business within seconds. In these first few seconds, you want to make a positive impact on your audience.
            If your website looks unappealing or outdated, your audience will immediately have a negative impression of your business. They won’t find your website appealing, which deters them from your page. You’ll miss out on leads because they’ll leave your page for a competitor’s page.
            Web design is important because it impacts how your audience perceives your brand. The impression you make on them can either get them to remain on your page and learn about your business or leave your page and turn to a competitor. A good web design helps you keep your leads on your page.`,
      },
      {
        heading: "It aids your search engine optimization (SEO) strategy",
        content: `Many web design elements and practices influence how you publish content on your website, which in turn affects how search engine spiders crawl and index your website.
            This is one thing you cannot afford to mess up. If your on-page SEO fundamentals are not up to snuff, you’ll be fighting an uphill battle for visibility from the start.
            Aside from how content is published on your website, certain web design elements can directly affect SEO in and of themselves. Web design can be difficult to understand if you’re not familiar with how it works, but to put it simply, your code needs to be SEO-friendly.
            The best way to ensure proper web design practices (and subsequent search engine visibility) is to partner up with a web design agency that knows what they’re doing.`,
      },
      {
        heading: " It sets the impression for customer service",
        content: `People can judge how you will treat them by looking at your website. Your design gives them insight as to how you view your audience. If you don’t put any effort into your website’s design, your audience knows that you won’t put effort into helping them.
            Your website is like a customer service representative. If your website is bright, modern, and inviting, your audience will feel more welcome on your page. You’ll give the impression that you are open and welcoming to new people who visit your website.
            On the other hand, an outdated and unappealing site makes your business appear cold and aloof. People don’t want to check out a business that doesn’t value them enough to make a good first impression.
            Think of your web design as the digital face of your business. If someone walked into your physical location, wouldn’t you want a friendly face to greet them and make them feel welcome? An updated and modern web design is the equivalent of a friendly face greeting your new visitors.`,
      },
      {
        heading: "It builds trust with your audience",
        content: `People don’t trust poorly designed websites. If they see your poor design or the information looks outdated, they won’t trust your site. They may view your site as seedy or shady because you don’t have an updated web design.
            Think about a person looking to place a bulk order with a manufacturing company. They’re spending a tremendous amount of money, which means if your manufacturing website design doesn’t convey trust, they’ll find another business to fulfill their order.
            On the other hand, a professional site signals trust with your audience. They will trust your business and feel comfortable checking it out further.
            It’s important to build trust with your audience so they remain on your site. When visitors remain on your site longer, you create more opportunities for your business to capture those leads.`,
      },
      {
        heading: "Your competitors are doing it",
        content: `If you need a reason why web design is important, here’s a big one: Your competitors are already utilizing web design. If you want to remain in competition with them, you must use web design for your site.
            You want your website to stand out from the competition. If you have an old, outdated, and low-quality website, your competitors will outrank you. Their well-designed website will perform better than your website.
            This means you’ll lose leads to your competitors. They’ll attract more leads to their page because their page is more appealing.
            Your website’s design is an opportunity for you to set your business apart from the competition. When you’re competing with other businesses, you generally have the same services and similar pricing. You need that one thing that will make your business stand out from the rest.
            A well-designed website is an opportunity for your business to showcase its unique features. You can show your audience why they should choose your business over the competition.`,
      },
    ],
    faqs: [{}],
  },
  "app development": {
    title: "App Development",
    path: "/App Development",
    heroImage: "./allImages/Services/App-dev.jpg",
    image: "./allImages/Services/app-dev.png",
    description: `With the growing number of people accessing the Internet via smartphones and tablets, mobile app development has the unique ability to access a large number of potential consumers.`,

    keypoints: [
      {
        heading: "Worldwide Audience Reach",
        content: `It’s been proven that most of the traffic from the internet is from mobile devices as almost everyone has access to the internet. When you hire dedicated developers to create a mobile business app, this mobile application will increase your business's global reach, growth, and support market expansion.
            A recent survey reported that over 400 companies with mobile apps had over 50% sales increases and over 40% revenue increases. Mobile apps make your business more accessible to customers as they can get what they want with just a click of a button.`,
      },
      {
        heading: "Active and Direct Advertising",
        content: `When you invest in hiring a web and mobile development company to build your mobile app, your customers can communicate with your business at any time, regardless of their location. The fact that your business is easily accessible on a customer-friendly app will strengthen your business brand which will make customers more likely to buy from your business. This is because, through your app, you’ve created a relationship with your app users.
            Nowadays, when businesses hire dedicated developers to build their mobile apps, they usually add the chatbot option to allow clients to communicate with their businesses 24/7. Mobile apps enable businesses to reach their target audience (including current customers) directly at any time through mobile app notifications.`,
      },
      {
        heading: "Improved Customer Engagement",
        content: `Customer engagement is significant for the sale of any product or service. Mobile apps offer customers a smooth experience with your business – as they can easily access your business from the convenience of their mobile devices.
            Businesses with mobile apps reach their customers effectively, and clients can contact your business quickly – effective communication improves customer engagement with your business. When businesses invest in mobile app development, features such as a support desk, real-time chat, and geo-targeted adverts are most times included, improving communication with customers.`,
      },
      {
        heading: "Enhanced Customer Service",
        content: `Mobile apps built by an excellent mobile development company provide customers excellent customer service. These apps allow customers to make transactions on their phones, get notifications on offers, view product guides, FAQs, and reviews, and access the help desk.
            The live chatbot option is an excellent mobile app feature that enhances customer service by eliminating the need for a customer care rep to be on hand 24/7 – this feature also helps businesses save costs.`,
      },
      {
        heading: "Direct Channel for Marketing",
        content: `The best channel for your business is through your mobile apps as customers can get direct information about everything that goes on in the businesses through reminders, news feeds, and notifications. The different features available on mobile apps such as push notifications make it easy for businesses to connect and interact with their customers.
            Businesses can also make use of information about customers to market specific products to the target audience. Rather than spending on traditional marketing channels, it’s a very cost-saving method for business owners as both current and prospective customers are the focus audience.`,
      },
    ],

    faqs: [
      {
        que: "What is the average duration of the process? ",
        ans: "On average, it takes at least five weeks to create an enterprise-level app. Generally, the duration of the process depends on the complexity of the app and the features that you want in the app.",
      },
      {
        que: "I only want to enhance my existing app? Can I get it done?",
        ans: "Yes, of course. You can either partner with us to develop an app right from the scratch or just to enhance the functionality of your app. You can avail of our mobile app development services in their entirety or individually. In any case, we promise to deliver high-quality apps. We also provide migration services.",
      },
      {
        que: "Do you only build native apps?",
        ans: "No, our developers are also proficient in hybrid/cross-platforms apps development. We will listen to your requirements and will also suggest which platform and what type of app development process will be the most advantageous to you.",
      },
    ],
  },
  "content writing": {
    title: "Content Writing",
    path: "/Content Writing",
    heroImage: "./allImages/Services/contentt.jpg",
    image: "./allImages/Services/content.png",
    description: `Content has come a long way from the days of print advertising. With the introduction of SEO and digital marketing, content has become the most effective way to get your brand into the digital sphere. Consistent, high-quality content writing is an invaluable way to connect brands with their consumers.
    Content also improves audience engagement and retention. Encouraging your audience to participate in your brand and delivering useful information will ensure your customers keep coming back for more`,

    keypoints: [
      {
        heading: "EXCEPTIONAL ROI",
        content: `When it comes to looking for great value for money, content marketing has few peers. While many companies may balk at the thought of having to invest in content, the enduring value of effective, quality work cannot be overstated. Imagine investing in a 1,000-word article that attracts 50 links. Those links will prove invaluable to your search rankings and will have a lasting effect on your website, attracting traffic and boosting sales for months and years to come. When compared to the short-term gains achieved through such activities as PPC, the ROI afforded by content is clear to all.`,
      },
      {
        heading: "SUPPORT THE BUYING CYCLE",
        content:
          "Here at Minerva Copywriting, we’re huge advocates of the customer buying cycle and, when it comes to content creation, we like to ensure that the work we create plays an important role in the journey a customer makes. By investing in content writing services, you are able to generate the necessary marketing messages that push an audience towards a sale. From brand awareness and regular blog posts, email copywriting to social media content, every piece of content work plays an integral role in a successful conversion.",
      },
      {
        heading: "ENGAGEMENT",
        content:
          "Establishing a rapport and lasting relationship with a customer is essential for any company. While customer service represents one means of creating an enduring relationship, content marketing is another. Engaging with an audience is never easy, but with professional copywriting services, you can generate the marketing messages necessary to foster a rapport with your target marketing. Whether it’s through informative blog posts or detailed product descriptions, content can connect with an audience in a manner that lasts for years to come.",
      },
      {
        heading: "GET NOTICED",
        content: `Social media has become integral to online and business success – no form of marketing can be quite as powerful as word of mouth. As such, you should look to invest in content writing services that promote the sharing and dissemination of your content. Invest in work that is engaging and interactive, informative and entertaining, and it will soon be shared on social networks. As a major SEO signal and playing an important role in your search rankings, can you afford not to have content that is shared socially?`,
      },
      {
        heading: "FRESH CONTENT KEEPS THINGS INTERESTING",
        content: `It’s worth remembering that much of the content you see online is time-sensitive. Unless you’re able to establish yourself with evergreen content (how-to guides, in-depth reports, etc.) you will need to keep posting new and interesting content in order to attract attention. What’s more, search engines place great value on the regular production of content, with publication alerting search engine bots to crawl your site more often and improving your SEO performance.`,
      },
    ],

    faqs: [
      {
        que: "Will the content be original?",
        ans: "Yes, absolutely. At FDS, we follow a stringent ‘No Plagiarism Policy’ assuring you 100% unique content.",
      },
      {
        que: "What if I want my content to be optimized for SEO?",
        ans: "Most of the content we create is written with search engine optimization in mind, but never at the expense of readability and value to your users. If you have specific keywords you are trying to target, we will be happy to fit them into your content.",
      },
    ],
  },
  advertising: {
    title: "Advertising",
    path: "/Advertising",
    heroImage: "./allImages/Services/Ads.jpg",
    image: "./allImages/Services/ad.png",
    description: `Advertisements play a major role in every business, especially for new businesses. The business world is competitive, and advertising is used to raise awareness about a business or product, build a rapport, a brand, and position a company, product, or service against the competition for them to have an advantage. Advertising promotes strategic messaging or information and increases awareness within the target market. Several advertising media are used to deliver the advertisement to the market. Hence it is important to determine which media outlet is best for your business. In this case, media buyers usually take the role or they enroll in adtrics academy review`,

    keypoints: [
      {
        heading: "Advertising is the only medium you can control",
        content:
          " if you want your message to hit on the day product launches or event is about to happen, this is the only vehicle you control completely.",
      },
      {
        heading: "Advertising allows you to target ideal customers only",
        content:
          "when you match a very personal message to a very select audience you get a far greater connection.",
      },
      {
        heading: "Advertising creates awareness for your content",
        content:
          "The force that drives a great deal of conversion and trust building these days is educational content – eBooks, seminars, and blog posts – advertising is a great way to help get that content found and consumed once you’ve gone to the effort to produce it.",
      },
      {
        heading: "Advertising adds credibility to your message",
        content:
          "Don’t ask me why this is exactly, but every time I run advertising people comment that business must be going well. The perception that you can afford to advertise is often enough to sell and resell prospects and customers alike and makes it easier to get attention for your entire message.",
      },
      {
        heading: "Advertising amplifies everything else you’re doing",
        content:
          "When you are using advertising to create awareness for your content you automatically create more awareness for everything you are doing. Journalists find companies that advertise, referral sources remember companies that advertise, people fan and follow and friend from ads, and employees can point to well-placed ads as a source of pride in the place they work.",
      },
    ],

    faqs: [
      {
        que: "Does my business need to advertise?",
        ans: `Most businesses need to advertise at some stage - but for many, PR, events, direct selling, email marketing, and use of social media will also achieve excellent results.
            Online advertising is now generally the most cost-effective and easiest way to reach a large audience; national media publications are losing readership. However, local papers and magazines are still widely read, and some specialist journals can also hit the mark if you want to reach a niche audience`,
      },
      {
        que: "What can advertising do for me?",
        ans: `A good advert might bring in a lot of inquiries but lead to few sales because it is poorly worded or badly targeted. Measuring the effectiveness of your advertising is absolutely key.
            A well-designed advertisement can:
            •	generate sales or inquiries;
            •	improve your company image;
            •	create awareness of your products or services;
            •	get the word out about a sales promotion or offer;
            •	help establish you in a new location.`,
      },
      {
        que: "How much do I need to spend on advertising?",
        ans: `Consider how much you normally spend on marketing, and how effective it is in relation to your business objectives. Assess what your competitors are doing - if they are advertising heavily, you might need to do the same to ensure your message is heard.
           Consider how far you are from achieving your objectives. For example, if you are launching a new product, you may need to spend heavily to create awareness.
           Consider what your advertising is worth to you. Calculate how many extra sales you need to make to justify your spending?`,
      },
    ],
  },
};

function Services() {
  let { path, url } = useRouteMatch();
  console.log({ path, url });
  path = path.slice(1);

  return (
    <div>
      <Service data={servicesData[path]} />
    </div>
  );
}

export default Services;
