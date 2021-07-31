import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import ScoreSidebar from "./components/ScoreSidebar/ScoreSidebar";
import EmailViewer from "./components/EmailViewer/EmailViewer";
import EmailTab from "./components/EmailTab/EmailTab";
import EmailTabContainer from "./components/EmailTabContainer/EmailTabContainer";
import SettingsTab from "./components/SettingsTab/SettingsTab";

function App() {
  const NUM_RANDOM_EMAILS = 20
  const RANDOM_EMAIL_BODIES = [
    "Answered: your most burning questions about MERN will be answered, with full answers coming in as soon as the topic is answered [i.e. by a new member that was just asked].\n" +
    "\n" +
    "In order to find answers for a specific group of questions in your own circles, you can either go to www.meth, then get your answers sent to your own group via email... If you have an answer you haven't received, please get the message, so if you never received a reply in an email, you can correct the error. Otherwise you may be in trouble, you can try searching on www.Methforums or your own personal forum for free answers...\n" +
    "\n" +
    "As a reminder... the FAQ page for this topic is: www.themethforum.com",
    "The lazy person's way to React can be a lot. It makes for a more streamlined and effective approach for using React. It's more elegant, clean and declarative, which I hope we will all improve upon.\n" +
    "\n" +
    "There are other ways to make your Angular App more readable. There is also another way to make it more concise, concise with AngularJS.\n" +
    "\n" +
    "So let's take it a step further. Let's try and improve upon the code in the above React post by combining it with the Angular CLI and running it live on test server. We will be using a simple application where you just create a controller that will handle the following tasks:\n" +
    "\n" +
    "A simple UI. Let's start with the first one:\n" +
    "\n" +
    "The last part that you need to test is:\n" +
    "\n" +
    "Adding an index file in React\n" +
    "\n" +
    "You first need to create a server which will handle the actions rendered by the user. For this example, we are going to use a simple, native app called Facebook. First you need to download and install Facebook. This app has a simple form which you can use, if you want it to be something that lets you do things like subscribe to the email lists or something of that sort, using just one click on the button in the UI.",
    "Why I turned down Mongo DB 6.0\n" +
    "\n" +
    "The reason was simple: I didn't want to have to choose Mongo DB 5. This is because I've seen DB5 (the new default) break. But MongoDB 3 now looks less likely to break. In that case, I had to go ahead and upgrade to DB5 to make sure. Here's how:\n" +
    "\n" +
    "When I switched off Mongo DB, I didn't see any DBDB6. This was due to Mongo DB 4 breaking in (it just looked something like DB4), but I also didn't want to make any changes to it by default. This was because MongoDB 5 is an open-source project already, and it takes many months just to make changes. MongoDB 5 doesn't have an open source API built in for MongoDB 4.\n" +
    "\n" +
    "And here's it…\n" +
    "\n" +
    "The reason I opted to upgrade to MongoDB 5 is because of how MongoDB 5 looked as the default. Now I can see that there isn't any bug that needs fixing. But it would be more accurate to say that I was going to roll back to Mongo DB when I switched back to DB5. And that's very simple by the way. If you want to choose DB5 over DB5, follow all the steps above to make sure.",
    "A toast to Node.js' creator, and thank you for making us the best place we can be.\n" +
    "\n" +
    "Node.js - the web's new cloud-services, and the best place to do IT. It makes sense, right?\n" +
    "\n" +
    "At what pace? Yes, it's slow. One of the best things in living is always the learning process at hand. While JavaScript is certainly one of those times, the Web isn't where you use it for anything but personal interaction. One of the challenges of JavaScript is that JavaScript may never be the best place to do it. It's a complex, sometimes frustrating process because of the complexity of a certain set of techniques. Luckily, Node.js is fast and free. With a great performance benchmark on your web server, you can optimize your web application to ensure you're not sacrificing performance!\n" +
    "\n" +
    "In short, Node.js is a cloud-service that lets you get to know your users in virtually the most convenient way possible. The service also supports JSON. You can view and request both a JSON and a Json schema on a separate computer.\n" +
    "\n" +
    "What's more, if you're using Node.js for creating apps, you can create multiple versions of your app and share it. You won't have to use different versions of Node.js (yet!), but it sure looks like a great opportunity for all.",
    "15 things you didn't know about Express.\n" +
    "\n" +
    "When I was a child I wanted to know about all that, but the world was full of confusing stuff. I'd see those things in the news. I'd find that information on Google or Bing. Now my brain thinks this is great, which is fine. I don't care how different it sounds. I'm going to go for what I believe is the greatest thing to come out of the next decade of media. Like, I have no idea what this movie just made and I'm going to try with it. If you want your money back what's the right path of course, so to speak. I'm going to stick to trying something that shows a certain way to a certain set of issues. It's not something that shows that there's an ideological difference at all. I'm going to continue trying that.\n" +
    "\n" +
    "You guys were talking about this movie all over again at this year's Cannes Film Festival, which is just across town in Cannes, and it really hits home with you guys. So, what went into making this movie? And what was this character like in the original?\n" +
    "\n" +
    "Yes, we had it at the time where David Fincher would go around the block and be like, \"Wow. I love this guy!\" I think this was his last big film. David Fincher doesn't like to get shit done, so I don't know when he got it. ",
    "How to take the headache out of MERN\n" +
    "\n" +
    "MERN is a public health organization focused on improving the health of people living with mental illnesses.\n" +
    "\n" +
    "MERN receives only about $4 million a year from the government, which it says is a significant amount.\n" +
    "\n" +
    "But if you go to your doctor, they'll send you a letter, a check for medical costs, and any other resources you need to treat your mental illness. So you can save a lot of money, save money.\n" +
    "\n" +
    "To do that, Dr. James Krom and his family at the National Institute are conducting a huge study on the importance of MERN in meeting your medical needs, including finding treatment options, treating symptoms and moving away from chronic stress and anxiety.\n" +
    "\n" +
    "If you decide you'd rather die from your illness, ask your doctor first, before you move on. It may take a month or two to start researching your health and potential treatments, but they will tell you if your doctor is telling you otherwise.",
    "Don't do React before reading this!\n" +
    "\n" +
    "That concludes the tutorial today to show you how to write a React framework that works with HTML5/ML5/CSS3 applications.\n" +
    "\n" +
    "Quick start\n" +
    "\n" +
    "In React this is one of React's main points. You can try using it directly with the command line to modify the code. You can add new views to React as you're programming, add new components. You can have everything get put in order, which is helpful when the only thing in your applications is data that you are going to use for purposes other than writing a functional program.\n" +
    "\n" +
    "We have two ways to work with React: By modifying the code using the command line.",
    "This might be the best way to do Mongo DB authentication.\n" +
    "\n" +
    "Let's suppose that you want to encrypt the incoming Mongo DB in your Mongo session. This is a very simple task we're going to do, but you also have to know your authentication level.\n" +
    "\n" +
    "In Mongo 1.9 you've installed a few basic authentication concepts. One is a client and server model, which is a common framework to work with. Client represents how you'll log transactions in, while server represents all transaction data in your Mongo session.\n" +
    "\n" +
    "Next up is a client. This is just a callback to a Mongo call. It contains either a callback which will ask for the Mongo DB to authenticate you, or an access callback which will tell you to create an authentication token.\n" +
    "\n" +
    "There are a couple of ways to achieve this. There's the key authentication which can be used a few different ways, as well as the ability to implement authentication and password schemes. You can choose the right way in the configuration file, but the key authentication scheme is the common one.",
    "The secret to Node.js security is the security of your code. It may be possible for you to code malicious code in the browser, where we don't know which client you use, or use the exact same code base, but it is impossible to see which of them is being compiled and shared. That is what's the problem. It is a very long term attack scenario. A way of looking at it is that if someone who is being compiled by us can access a browser in a shell, they can then access the other browser's code because of the threat factor. There is no way that one from our server could ever gain access to the web. However, the danger, that is what we are trying to address - not that I think is very scary. It could simply be a new attack vector designed to have the browser open to it, without it being the source and without being able to access the whole thing. But that is an incredibly scary thing to say now, to say that they did get access to the code and the source and not just the code being used for malicious purposes, but the code being used on all these other browsers because they control the code, not the source. That is a very scary thing to say to some, it seems like every time you make a change to the environment of a service this new attack vectors can be created and that is very scary. ",
    "4 questions answered about Expressions can be found at my question sheet under the subheading \"Expressions are Not Free\". You can also take a look at my Ask The Experts Question page (PDF).\n" +
    "\n" +
    "Q: What happens when I use this card? Will a ticket refund the balance I paid? Have the customer refund the ticket amount I paid when I bought it?\n" +
    "\n" +
    "A: The best thing about paying by debit card rather than in cash is that, unlike in a normal transaction, you won't be making a refund. The card is used to pay out your refund. You can use Paypal for more flexibility with payment methods. If you have no money from the card and are interested in using the card, I encourage you to consider purchasing your own card after visiting the store.\n" +
    "\n" +
    "Q: I did not pay for any tickets. What do I do with the amount of money? Am I reimbursed for paying the total amount of the tickets I bought?\n" +
    "\n" +
    "A: If you have a credit or debit card, you will be reimbursed for all your total travel insurance cost for travel which you plan to pay for. If the amount is less than $15 a day or less, you may pay another fee instead. Additionally, you may contact the airline at 1-866-846-3674.\n",
    "How to fix MERNs that didn't appear on the desktop, if you were using GNOME (and maybe your favourite GNOME). See this quick article for details about the procedure. Also I like to look at the MERN tree to make sure where I need them.\n" +
    "\n" +
    "Note: MERNs with errors are reported using the system log (see this, this, this, this etc.) and the corresponding patches that GNOME uses.\n" +
    "\n" +
    "Fixing MERNs with a different user\n" +
    "\n" +
    "It will take at least one (most certainly more) of you working on this issue. The most common way to fix MERNs is to change the application to use your current GNOME version of Debian. Once this happens, you can install MERN by simply setting the version in the application:\n" +
    "\n" +
    "apt-get install cmake cmake-dev\n" +
    "\n" +
    "Note that if you're using Ubuntu you need to install GKconfig first. These are the same packages as these (with the changes made manually for them).\n" +
    "\n" +
    "How to install MERNs with the Arch Linux build system\n" +
    "\n" +
    "sudo apt-get install cmake git-get git-config git-sync mnemonic\n" +
    "\n" +
    "This will install the Arch Linux build system after a run of xorg.conf .\n" +
    "\n" +
    "The Arch Linux build system should look something like this:\n" +
    "\n" +
    "/usr/local/build/main.build-amd64.tar.gz",
    "Get rid of React once and for all? Well, I didn't do that. After building, I wrote a little React that is a little more powerful but still not that exciting. I want it to look good because React3 had its ups and downs as well.\n" +
    "\n" +
    "Why was React3 better than React2?\n" +
    "\n" +
    "Let's begin with the idea itself. What are the differences.\n" +
    "\n" +
    "React is not a single file component. The structure of a React3 component differs from many different file components in many ways. React3 has the component, the code, and the component in it. React3 doesn't exist as an \"inherit.\" It's really an API which was used to implement the components you needed to know. React requires you to be able to use React 3 modules, but you can't get access to the same modules by having modules interact with your React3.\n" +
    "\n" +
    "Most of the time when I'm building a functional program, I'm not working with a very high complexity version and React3 doesn't care that much. It just has to be able to be used in combination with other code. Using React3 with other code you can have a more straightforward and reusable toolchain for your application. It doesn't just mean you have to use components. You also need to understand the rest of your app code.",
    "How to permanently stop Mongo DB (even if you've tried everything)\n" +
    "\n" +
    "When you save a new transaction from Mongo on your computer, change the address and port in the console,\n" +
    "\n" +
    "from your Mongo client to your MySQL database.\n" +
    "\n" +
    "in your MySQL database\n" +
    "\n" +
    "Add some user-specified names and aliases to your Mongo DB and specify their names and aliases as you like.\n" +
    "\n" +
    "This script allows you to run it without running a command on your computer. Use it for all of your Mongo queries but for one of the simplest MongoDB queries, as well as a whole variety of other common queries. (I also recommend running this script on my local machine — you'll have to configure the Mongo DB configuration). (Also, I don't recommend you run this script on a remote machine, because it will cause a lot of confusion about the remote database, and it's not the place for this script.)\n" +
    "\n" +
    "Note This script will work on any web browser and any internet connection, so you can't run this over a CDN to your own server:",
    "The uncomfortable truth about Node.js: You can only add two modules and you are already missing a whole bunch of features.\n" +
    "\n" +
    "We need a lot of changes to get things up to our goal: the codebase, the design tools, the devtools. You don't get more features, because you go from Node.js 0.8 to the 2.15 or better one.\n" +
    "\n" +
    "Node.js is the single most important platform for writing great code in the world.\n" +
    "\n" +
    "What do you want from Node.js?\n" +
    "\n" +
    "There are three main reasons:\n" +
    "\n" +
    "JavaScript 2 has always held the title for the most advanced and best coding solution, but the number of technologies and the level of knowledge needed have had no impact. JavaScript is used extensively in every major browser - everything from email to email clients to mobile applications.\n" +
    "\n" +
    "Node.js is the JavaScript 2.x platform with very powerful programming languages. It's the open source operating system for the PC. JavaScript, on the other hand, is largely used for most major game engines.\n" +
    "\n" +
    "I think one of the most important, important decisions Node.js makers have made has been to change the basic syntax of JavaScript. Now it's more intuitive and much easier – it's more of a functional imperative language, instead of calling functions in other browsers.",
    "his might be the best way to fix Express\n" +
    "\n" +
    "I think it's very cool that the people who wrote and approved Express are actually very good at helping us, so we've asked them to get a new project off the ground. We're now ready for it!\n" +
    "\n" +
    "You Can Help\n" +
    "\n" +
    "If you do anything besides help us fix Express, you might also be able to help us do more good than bad:\n" +
    "\n" +
    "Help us fix Express by making any changes\n" +
    "\n" +
    "Try to fix everything as quickly as possible and it may take a while. But if it feels good, feel free to do something with the repo and help fix everything.\n" +
    "\n" +
    "Want to help Fix Express?\n" +
    "\n" +
    "If you like our work, please support us by sharing it with your friends or submitting a donation: We're very thankful for your support! That's why we'd love to hear from you:\n" +
    "\n" +
    "Thanks!",
    "For when you need Software Engineering Students' Association (SEAA) support, we recommend the following:\n" +
    "\n" +
    "This course is approved by the Department of English and Literacy. It takes students 10 or fewer years of free or reduced-price English experience to complete.\n" +
    "\n" +
    "The course consists of an introduction to all of the fundamental concepts of English as a Common Language and a vocabulary. A survey of your Common Language skills and vocabulary.\n" +
    "\n" +
    "We suggest that you use all of each term in the beginning of your first semester.\n" +
    "\n" +
    "In English, you can use four different words, the \"language\" word (I, K, X, Y), the \"common\" and \"standard\" word (F, Kb, B, and Y).\n" +
    "\n" +
    "This is a short course, in the format described below.\n" +
    "\n" +
    "We recommend your students use this course to learn the most common and useful terms in your Common Language, but have a look at how to learn your vocabulary:\n" +
    "\n" +
    "English words are the primary English word that in most English-speaking countries is considered to be the \"master language\". They define different forms of spoken words.\n" +
    "\n" +
    "The language of language and the standard are used across the world.\n" +
    "\n" +
    "We suggest using only the most common words in your common language to understand each of them.\n" +
    "\n" +
    "In English, you need only two or three sentences of English to describe each word, not more!",
    "Who else wants SESA's support?\"\n" +
    "\n" +
    "The idea to change a company's name seemed like a great leap forward, when SESA executives made a few changes to the company's website. The first was the change to its brand of \"solar-powered computers.\"\n" +
    "\n" +
    "\"We think that it's absolutely worth it,\" Mark said at the time. \"We're not interested in anything more than a spinoff. We want to start out with a name that's something you can use and you love.\"\n" +
    "\n" +
    "Mark went on to say that SESA has been working on a number of design improvements that will hopefully see the company get a larger share of the way it is selling its products on the Internet.\n" +
    "\n" +
    "However, the first major change to the SESA profile comes with the inclusion of \"Satellites.\" In September of 2013, SESA, along with SpaceX and other Silicon Valley companies, signed the joint agreement, and the Satellites logo has appeared on the upper and lower screens of most of its rockets. While most rockets on the market use satellites, some have even carried satellites themselves. Satellites have been the primary source of rocket power for hundreds of years.\n" +
    "\n" +
    "Satellites aren't a new concept. NASA and Orbital Sciences began their exploration of the moon with the Satellites. Over the course of the 20th century, SESA's efforts to land robotic astronauts on other planets had the goal of reaching Mars.",
    "Sick of SESA?\n" +
    "\n" +
    "Yeah!\n" +
    "\n" +
    "OK!\n" +
    "\n" +
    "WEEK 6: On The Bands!\n" +
    "\n" +
    "WEEK 7: The New World Of Radio\n" +
    "\n" +
    "WEEK 8: The First Podcast With The Headline News\n" +
    "\n" +
    "WEEK 9: The Latest News from Inhumania - WTF It Is\n" +
    "\n" +
    "WEEK 10: THE DEVILES OF SCIENTISATION TOOLS\n" +
    "\n" +
    "WEEK 11: What Do We Eat?: The Question of Food Quality at Work\n" +
    "\n" +
    "WEEK 12: On A Planet In Your Head\n" +
    "\n" +
    "WEEK 13: How Can We Help Our Children Lose Sugar!\n" +
    "\n" +
    "WEEK 14: It's My Birthday, It's the End of Your Age!\n" +
    "\n" +
    "WEEK 15: What It Is And What Does It Mean?\n" +
    "\n" +
    "WEEK 16: Why Why Why Are We Still Watching Our Children Play?\n" +
    "\n" +
    "WEEK 17: Why It's So Hard to Find Beauty for Your Kids\n" +
    "\n" +
    "WELL YOU GET THIS, BUT WE ARE WRONG ABOUT WHAT IT IS TO BE A MAN IN WOODS!",
    "What you should know about WDCCL.\n" +
    "\n" +
    "The first step is to apply. When you apply the WDCCL application, you will be told which parts and parts are compatible with your brand. The first step is to enter the correct parts list on your application screen. At the top, the name of your WDCCL name with its manufacturer. You will then select 'Dedicated Drives' from the 'Tools' menu and select which parts and parts are required for WDCCL. You will find the tool that you are looking for in WDCCL. Select 'Copy & Replace'. Once you see the tool there, select Next then type your WDCCL installation tool and click Finish. If your tool does not automatically launch, you may need to restart it. In this case, when you do, a screen will show.\n" +
    "\n" +
    "You will see the following output.\n" +
    "\n" +
    "Step 2: Select the required Diodes\n" +
    "\n" +
    "There is two modes: Standard and Advanced modes. We will now cover Dioded Drives for WDCCL. To select any of the four modes, the application should start. To select both modes, go to Utilities and select the tool 'Copy & Replace'. Go to the 'Tools' menu and click the 'Copy & Replace' button. Select 'Copy and Replace' mode from the 'Choose' menu of the main utility window",
    "Take 13 minutes to get started with WDCC...you'll be happy you did!\n" +
    "\n" +
    "My own WDCC WD10 has come with an LCD display. It doesn't do much but it does allow you to control your device remotely from the dash and the ability to choose from a few other apps. There's also a built-in speaker on the side of the unit which you can also use as a directional speaker. However there's also an Audio Output, you can check it out here.\n" +
    "\n" +
    "Our own G5 HDZ958 was able to record a lot of videos over the phone this morning. As I did my other WDCC drives it worked wonderfully, especially when my phone was off for an entire day. For the day I used my DVR set to record my videos on this PC and I have to say I'm extremely impressed with my WDCC. It was extremely detailed and easy to set up and set up without any mistakes. The LCD power port is small due to its smaller dimensions and I would not be surprised if it would require me to do many more things on the phone in order to record my video on this PC but I am very pleased with my experience. It's only a matter of time before it appears in your collection.",
    "The ultimate guide to WDCC. All of our reviews are for this guide.\n" +
    "\n" +
    "Warp Drive\n" +
    "\n" +
    "This is our best-selling drive of all time. It's faster than your desktop and much faster than USB. The WDAC 500 also provides a good amount of space for your harddrive without sacrificing performance or battery life. WD's standard drive is a 15\" drive, meaning a 4K+ monitor is ideal for those who drive in small groups (up to 60 people). The best drive in it's class is also the 300W (also an SSD), which lasts much longer because of its fast SSD and the faster drive. There's no other drive in the world who offers a less expensive option. We highly recommend the WD-1000, which is priced around $1430, in the best of Class category.\n" +
    "\n" +
    "If your computer is an early NAS provider with a fast NAS drive and you're not planning on going into a NAS market, the NAS you choose provides great flexibility that many NAS providers want to give you. Most notably, we recommend Dell and HP SSDs that come with USB ports, but they all come with USB drive ports.\n" +
    "\n" +
    "A NAS drive for your Windows Server 2016 server"
  ];
  const RANDOM_EMAIL_TITLES = [
    "Answered: your most burning questions about MERN",
    "The lazy person's way to React",
    "Why I turned down Mongo DB",
    "A toast to Node.js",
    "15 things you didn't know about Express",
    "How to take the headache out of MERN",
    "Don't do React before reading this!",
    "This might be the best way to do Mongo DB",
    "The secret to Node.js",
    "4 questions answered about Express",
    "How to fix MERN",
    "Get rid of React once and for all",
    "How to permanently stop Mongo DB (even if you've tried everything)",
    "The uncomfortable truth about Node.js",
    "This might be the best way to fix Express",
    "For when you need SESA",
    "Who else wants SESA",
    "Sick of SESA?",
    "What you should know about WDCC",
    "Take 13 minutes to get started with WDCC...you'll be happy you did!",
    "The ultimate guide to WDCC",
  ];
  const RANDOM_SENDER_NAMES = [
    "Gero Trish Schuhmacher",
    "Janella Nerses Parks",
    "Hatidža Ilarion Rakes",
    "Abhishek Lauma Benbow",
    "Eligio Ayotunde Pekkanen",
    "Asif Cherish Slane",
    "Sigríðr Swanahilda De Vito",
    "Attila Borys Gabrielson",
    "Margriet Dalal Friel",
    "Rafael Thane Bannerman",
    "Valary Draško Geißler",
    "Psyche Theresa Ambrosi",
    "Quinctilianus Bara Geiger",
    "Nomiki Marjeta Dragović",
    "Yang Guinevere Cavan",
    "Bertha Fuat Montague",
    "Tzvia Helios Mihaljević",
    "Jannine Konrad Hashemi",
    "Marta Chae-Young Eklund",
    "Aminda Lilac Horák",
  ];
  const RANDOM_SENDER_IMAGE_URLS = [
    "./images/face1.jpg",
    "./images/face2.jpg",
    "./images/face3.jpg",
    "./images/face4.jpg",
    "./images/face5.jpg",
    "./images/face6.jpg",
    "./images/face7.jpg",
    "./images/face8.jpg",
    "./images/face9.jpg",
    "./images/face10.jpg",
    "./images/face11.jpg",
    "./images/face12.jpg",
    "./images/face13.jpg",
    "./images/face14.jpg",
    "./images/face15.jpg",
    "./images/face16.jpg",
    "./images/face17.jpg",
    "./images/face18.jpg",
    "./images/face19.jpg",
    "./images/face20.jpg"
  ];
  const RANDOM_SENDER_EMAILS = [
    "8alivarane112u@gmail.com",
    "3tediz@klttec.com",
    "hwildgaraja@gmailya.com",
    "sjeevithajose@virginiaintel.com",
    "7nadica.kiti@googl.win",
    "lasmaa.as@manlr.site",
    "mar@ttlrlie.com",
    "csigitcintawindyp@nebbo.online",
    "8waqas.ch07g@ttlrlie.com",
    "tpierina_olive@furnitt.com",
    "gail.moses@duck.com",
    "patrice.kirkland@zebra.com",
    "sherry.green@cow.com",
    "irwin.west@rat.com",
    "rowena.frazier@ant.com",
    "marcy.simon@snake.com",
    "laurie.johnson@hippopotamus.com",
    "ian.levy@panda.com",
    "cyrus.osborne@alligator.com",
    "austin.cohen@bird.com",
    "ernesto.roth@deer.com",
  ];

  const FOLDER_NAMES = [
      "work",
      "uni",
      "spam",
      "school",

  ]

  const NUM_FOLDERS = 5;
  const FOLDER_COST = 10;
  const NUM_ACCOUNTS = 4;
  const ACCOUNT_COST = 50;

  const returnRandomEmails = (numEmails) => {
    let emailArray = new Array(numEmails);

    for (let i = 0; i<numEmails; i++) {
      emailArray[i] = getSingleRandomEmail();
    }
    return emailArray;
  }

  const getSingleRandomEmail = () => {
    let randomEmailNum = Math.floor(Math.random()*(NUM_RANDOM_EMAILS-1));
    let randomNameNum = Math.floor(Math.random()*(RANDOM_EMAIL_TITLES.length-1));
    let randomAddressNum = Math.floor(Math.random()*(RANDOM_SENDER_EMAILS.length-1));
    return {
      emailTitle: RANDOM_EMAIL_TITLES[randomEmailNum],
      emailBody: RANDOM_EMAIL_BODIES[randomEmailNum],
      senderName: RANDOM_SENDER_NAMES[randomNameNum],
      senderImageURL: RANDOM_SENDER_IMAGE_URLS[randomNameNum],
      senderEmail: RANDOM_SENDER_EMAILS[randomAddressNum]
    }
  }


  const [emails, setEmails] = useState(returnRandomEmails(10))
  const [viewEmail, setViewEmail] = useState(emails[0])

  const [folderList, editFolderList] = useState([])
  // Account Data

  let workAccountData = {
    name: "Work Email",
    bought: false
  };

  let schoolAccountData = {
    name: "School Account",
    bought: false
  };

  let spamAccountData = {
    name: "Spam Account",
    bought: false
  };

  let accountData = [
    workAccountData,
    schoolAccountData,
    spamAccountData
  ];

  let reply = () => {
    console.log("Sent Reply")
    changeScore(1);
    addNewRandomEmail();
    loadFirstEmailToViewer();
  }

  const [sentEmails, setSentEmails] = useState(0);

  let changeScore = (amount) => {
    setSentEmails(sentEmails + amount);
    console.log("Score Increment: " + sentEmails);
  }


  let buyFolder = () => {
    if (sentEmails >= FOLDER_COST && folderList.length < FOLDER_NAMES.length) {
      let newFolderName = FOLDER_NAMES[folderList.length];
      let newFolderList = [...folderList];
      newFolderList.push(newFolderName);
      editFolderList(newFolderList);
    }
  }

  let buyAccount = () => {
    if (sentEmails >= ACCOUNT_COST) {
      let numBoughtAccounts = 0;
      for (let account of accountData) {
        if (!account.bought) {
          console.log("Bought Account: " + account.name);
          account.bought = true;
          break;
        } else {
          numBoughtAccounts++;
        }
      }
      // check if already bought every account
      if (numBoughtAccounts !== NUM_ACCOUNTS) {
        changeScore(-ACCOUNT_COST);
      }
    }
  }

  let loadFirstEmailToViewer = () => {
    setViewEmail(emails[1]);
  }

  let addNewRandomEmail = () => {

    let copyEmailArray = new Array(emails.length);

    for (let i = 0; i < emails.length - 1; i++) {
      copyEmailArray[i] = emails[i+1];
    }
    copyEmailArray[emails.length-1] = getSingleRandomEmail();
    setEmails(copyEmailArray);
  }


  return (
  <div className="App">
    <ScoreSidebar sentEmails={sentEmails} accounts={accountData} folderList={folderList}/>
    <div className={"BodyBox"}>
      <EmailTabContainer emailTabInfoArray={emails} />
      <div className={"RightBox"}>
        <EmailViewer email={viewEmail} replyFunction={reply} className={"RightBoxItem"}/>
        <SettingsTab buyFolderFunction={buyFolder} buyAccountFunction={buyAccount} className={"RightBoxItem"}/>
      </div>
    </div>
  </div>

);
}

export default App;
