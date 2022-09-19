The Phonie Project is a web-based application created by the team "**Phantom_Devz**" that can simply identify the telecoms carrier from a phone number inputted by the user.

It is one of the three projects featured in the AltSchool Africa School Of Engineering holiday Hackathon in August '22.

This is an exciting project that contains interesting features that could also serve as a practice project for newbie techies willing to get ''_their hands dirty_'' while improving on their fundamental web-development Languages such as HTML, CSS & JavaScript.
Want to have more fun while building the project?
Try to collaborate with a friend or colleagues, assign tasks and play around with the codes.
Without further ado, let's delve right in.

# Contents

1. [Overview](#overview)
   -  [Objective](#objective)
   -  [The Challenge](#the-challenge)
   -  [Preview](#preview)
   -  [Links](#links)
2. [Deep Dive](#deep-dive)
   -  [Thought Process](#thought-process)
   -  [Built with](#built-with)
   -  [Some codes we are proud of](#some-codes-we-are-proud-of)
3. [Road Blocks](#road-blocks)
4. [Experienced Gained](#experienced-gained)
5. [Useful Resources](#useful-resources)
6. [Phantom_devz Members](#phantomdevz-members)
7. [Acknowledgement](#acknowledgement)

## Overview

### Objective

Have you ever tried to buy airtime for a family or friend online or through any finance app that requires you to input the phone number you want to recharge, however, you are unaware of the network provider they use ???

I guess you answered a big yes! to the above question, well you can bid your worries goodbye as this project was built to solve problems like that.

The Phonie Project can easily identify the telecoms carrier from a phone number inputted into the form field and lots more..

### The Challenge

We are tasked to create a scenario where a user is filling a form in our web application and they are required to enter their phone number into a form field.

#### Outcome

After inputting the phone number in the form field, the UI(user interface) stipulates if the phone number is an MTN, GLO, Airtel, or Etisalat number e.t.c (i.e. it displays the MTN icon/logo next to the form field if its an MTN line)

#### Advanced features

-  Add validation - Use the pattern attribute of the HTML form field to restrict phone numbers to a certain carrier, e.g restrict to only Airtel such that entering an MTN/GLO number would be invalid
-  Support +XYZ country codes (e.g +234 for Nigeria) - Still detect the carrier even if the user prefixed the number with their +XYZ country code
-  Show auto-completion - Show suggestions as the user starts typing the phone number. E.g once they type 080, show them that 0803 and 0806 and other possible matching variants of the carrier

### Preview

Below is a video preview of the features on The Phonie Project,
A link to a full explanatory video will; be shared at the end of the article, Enjoy!!!

https://user-images.githubusercontent.com/67319772/191020725-212b543b-60cb-4869-b6b0-1ee4ac879e5f.mp4

### Links
- Link to GitHub repository: [The Phonie Project Repo](https://github.com/babboe1/Phonie-project-Phantom_Devz)
- Project live link: [The Phonie Project](https://phantom-devz-phonie.netlify.app/)

## Deep Dive

### Thought Process

Before we commenced this project, we decided to analyze the problem, how to provide solutions, and the methods to be used in creating the project.

After our analysis, we started by splitting the task into bits and creating tickets from them,
GitHub served as a useful platform for collaboration and assignment of various tasks to team members.

The majority of the tasks were done individually, some were done in pairs, while others required working together as a team over a Video conference call. Google meet was our meeting room.

### Built With

The phonie Project was built in 3 languages which are;

-  HTML - HyperText Markup Language
-  CSS - Cascading Stylesheet
   -  Flexbox
   -  CSS Grid
-  JavaScript - Vanilla

### Some codes we are proud of 😎😎

This is a code snippet we used in setting the conditions for the Phone number Inputted by the user inputs and the outcome.

```javascript
const checkNumber = (array, provider) => {
   error = true;
   check = PHONE.value;
   for (const element of array) {
      if (
         check.includes(`${+234}${element}`) ||
         check.includes(`0${element}`)
      ) {
         ERROR_TEXT4.classList.add('hidden');
         error = false;
         if (provider === 'AIRTEL') {
            count = 1;
            TRUE_ICON.src = './assets/Icons/airtel-nigeria.svg';
            TRUE_ICON.classList.add('white');
         } else if (provider === '9MOBILE') {
            count = 2;
            TRUE_ICON.src = './assets/Icons/9mobile.svg';
         } else if (provider === 'GLO') {
            count = 3;
            TRUE_ICON.src = './assets/Icons/globacom-limited.svg';
         } else if (provider === 'MTN') {
            count = 4;
            TRUE_ICON.src = './assets/Icons/mtn.svg';
         }
      }

      if (
         (check.includes(`${+234}${element}`) && check.length > 14) ||
         (check.includes(`0${element}`) && check.length > 11)
      ) {
         count = 0;
         ERROR_TEXT4.textContent = 'Phone number too long!!';
      }

      if (count === 0) {
         TRUE_ICON.src = './assets/Icons/icon-error.svg';
         error = true;
         ERROR_TEXT4.classList.remove('hidden');
      }
   }
};
```

How the code snippet above could be improved using the switch case method

```javascript
switch (provider) {
   case 'AIRTEL':
      count = 1;
      TRUE_ICON.src = './assets/Icons/airtel-nigeria.svg';
      TRUE_ICON.classList.add('white');
      break;
   case '9MOBILE':
      count = 2;
      TRUE_ICON.src = './assets/Icons/9mobile.svg';
      break;
   case 'GLO':
      count = 3;
      TRUE_ICON.src = './assets/Icons/globacom-limited.svg';
      break;
   case 'MTN':
      count = 4;
      TRUE_ICON.src = './assets/Icons/mtn.svg';
      break;
   default:
      break;
}
```

### Road Blocks

We faced a couple of challenges all through the "_journey _" of building The Phonie Project and we eventually overcame them by doing research, studying, learning and working together.

Below is a list of the major Roadblocks we encountered

-  GitHub push and pull Request:
   This was a big challenge since most of the team members had little or no experience using Git and Github, we overcame this by purchasing and studying an Udemy course on Git and GitHub: [GitHub Ultimate Master Git and GitHub - Beginner to Expert](https://www.udemy.com/course/github-ultimate/) by Jason Taylor, alongside with some Youtube tutorials.
-  JavaScript Functions:
   we had some challenges using JavaScript concepts such as Conditional statements, maps, loops, callbacks, and closure, we solved this problem by revisiting our LMS contents on JavaScript provided by AltSchool Africa and taught by [Odugua Rising](@risingodegua)

### Experience Gained

During the making of The Phonie Project, we learned and grew to a great extent not just as individuals but also as a team.

We had a better understanding of some JavaScript concepts like callback functions, closures, loops, and maps. Learned how to use Git and GitHub for collaborations and personal projects, greatly Improved our problem-solving skills, and also overcame our Imposter syndrome.

### Useful Resources

-  [GitHub Ultimate Master Git and GitHub - Beginner to Expert](https://www.udemy.com/course/github-ultimate/) by Jason Taylor
-  [Introduction to function JavaScript FreeCodeCamp](https://www.freecodecamp.org/news/an-introduction-to-functional-javascript-e8dab63bb51d/)
-  [Full Video Review of The Phonie Project - Phantom_Devz](#)

### Phantom_Devz Members

1. Abiola Ayodele (Team Lead): [GitHub](https://github.com/babboe1) , [LinkedIn](https://www.linkedin.com/in/abiola-ayodele/), [Twitter](https://twitter.com/ausstinab), [Portfolio website](https://abiolayodele.live/)
2. Elue Michael: [GitHub](https://github.com/MeekyBerry), [LinkedIn](https://www.linkedin.com/in/mikkylanky/), [Twitter](https://twitter.com/Mikky_lanky)
3. Idowu olakunle M: [GitHub](https://github.com/kaywone), [LinkedIn](https://www.linkedin.com/in/olakunle-idowu-401a0989), [Twitter](https://twitter.com/LaundrySpecial)
4. Tinuola Boroni: [GitHub](https://github.com/TinuBoroni), [LinkedIn](https://www.linkedin.com/in/tinuola-boroni-5924a8227), [Twitter](https://twitter.com/TinuBoroni?t=CrgR7jcEcrY7mpmqWn7zRQ&s=09)
5. Fatai Raheem: [GitHub](https://github.com/Adebayorr), [LinkedIn](https://www.linkedin.com/in/raheem-adebayorr-8685391a1), [Twitter](https://twitter.com/bayorrcode)
6. Chidera Theodora: [GitHub](https://github.com/Ajility), [LinkedIn](https://www.linkedin.com/in/chidera-theodora-a57a0ab6), [Twitter](https://twitter.com/Ajility4)
7. Uriel Agbojo: [GitHub](https://github.com/Darasimiuriel), [LinkedIn](https://www.linkedin.com/in/uriel-agbojo-9231921b0/), [Twitter](https://twitter.com/UrielAgbojo)
8. Adebanjo Abolanle: [GitHub](https://github.com/Kaempy), [Linkedin](https://www.linkedin.com/in/abolanle-mary-adebanjo), [Twitter](https://twitter.com/ademarymi)
9. Light Osita-Amaechi: [Github](https://github.com/lightosita), [LinkedIn](https://www.linkedin.com/in/light-osita-734251112?), [Twitter](https://twitter.com/OsitaLight)
10.   Ibeh Miracle: [GitHub](https://github.com/Invincible-ibeh), [LinkedIn](https://www.linkedin.com/in/miracle-ibeh-a791421a9/), [Twitter](https://twitter.com/twit_magnet)
11.   Sarah Daniel: [GitHub](https://github.com/Sarah-Dan), [LinkedIn](https://www.linkedin.com/in/raheem-adebayorr-8685391a1),[Twitter](https://twitter.com/bayorrcode)

### Acknowledgement

Specials Thanks to [Hacksultan](https://twitter.com/hackSultan), [Adewale Yussuf](https://twitter.com/AdewaleYusuf_), and [AltSchool Africa](https://twitter.com/AltSchoolAfrica) for creating the Medium and giving us a platform to realize our dreams of becoming world-class developers, connecting with wonderful people, and being taught by some of the brightest minds in the text Industries such as [Odugua Rising](https://twitter.com/risingodegua), [Setemi Ojo](https://twitter.com/setemiojo)

Special thanks to our Principal😂 [Uke Jerry](https://twitter.com/UkeJerry) and our dearest community manager [Tabitha Kavyu](https://twitter.com/TabithaKavyu)

In conclusion, I hope this article how been able to share our experience, hard work, and story on how the 2022 AltSchool Africa Holiday Hackathon project **The Phonie Project** was created.

Thank you for reading till the end, I hope you have more fun practicing this project than we did.
