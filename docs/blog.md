##Introduction



##Analysing the Data

The NYTimes provided thousands of tweets to us in an alphabetical list broken down by the subject's name, their title if they had one, and a category the subject fell under. The list was was visually impressive to scroll through, but difficult to get a good grasp on the demographic and categorical breakdown of Trumps targets. So, we did what every data analyst has had to do a few times in their life - we copied and pasted the entire thing into Google Sheets and hand-entered some analysis from there. 

As anyone who has done this can tell you - managing a spreadsheet is never fun. We didn't have much opportunity to utilize automation here considering we had a raw dump of data that was loosely organized by a couple of categories. Google Sheets automated the most tedious task - counting the number of tweets under each name. It also allowed us to export our data as a .CSV file which would come in handy later when we served our data from Node.

We assigned gender to each person based off of the pronouns used by public media articles. On the whole, all of the persons in our data are well-known public figures except where a name was not provided (see: "Jeb Bush campaign staffer"). In cases like this and in cases of non-persons like organizations, tv shows, places, etc, we assigned them a non-gender. 

##Designing the Visualization

##Serving the Data with Node

When designing our asset pipeline, or, how we to wanted process and ship this data, we decided that the best method would be to store the .csv files server-side, convert them to JSON using the NPM package [csvtojson](https://www.npmjs.com/package/csvtojson), and then serve them to the client on initial page load with an AJAX request. 

Certainly, we could have packaged the data into JSON ourselves and included it in a separate static file along with the client-side HTML/CSS/JS files. In the scope of having a single page app, this seems entirely acceptable. There was no need to secure any of the data or prevent users from tampering with it, as well as little need to worry about the speed of the site since a quick analysis by [http://bytesizematters.com/](http://bytesizematters.com/) measured the size of the text data to be less than 75kb.

In the end, we decided to go with a Node server because it coincided with best-practices for providing data to users. The main benefit would be that we could easily update the data when the NYTimes updated theirs. We'd still have to manually update the .csv files, but now, with the NPM Package csvtojson, we didn't have to convert it to JSON ourselves.


##Implementing D3



