Hey guys, very clean project. Really nice to see how you've grown.

Few general takeaways:

-   I'd say keep in mind to make your code easier to deploy to production. I see in some of your templates for example, you  
    have "http://localhost:3000/api/sleep/getSleep/" hardcoded. Since your front end and back end are all coming from the same origin, it would
    be better if you used relative paths like "/api/sleep/getSleep/". Removing unnecessary hard codings like these make your project easier to
    move to development.
-   Better to use a "public" folder for your static assets instead of server side rendering them through ejs. Stuff like CSS and JS should
    be served from this folder, since those can get cached, and the overall load time of your page in the future would be quicker.
-   Good idea to have loaders whenever you're going to make an API call. If a user clicks on a button doesn't see an immediate response,
    they might think that something's not working.

That's basically it! Once again, really proud of you. Amazing job guys. Keep going from strength to strength.
