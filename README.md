## Frontend developer assignment Caspr Sambrook-Smith

Hello, here's my ABN assignment.

-   Have structured the application how I would usually
-   Used MobX as oppose to a Flux driven store. So much less boilerplate and a lot less code.
-   Used Matieral UI for speed
-   Have added some Storybook stories, although personally would've preferred to add more
-   Have covered unit tests for the store, carousel hook and carousel component
-   Was using the tvmaze-api-ts npm lib as an API client for TV Maze, but there were a lot of typos in the types the library was using and it depended on the request lib which caused issues during testing. So i harvested the types and created my own simple service instead.
-   I decided to build my own simple carousel component. I works okay, but could do with more work to make it more intelligent.

### Technlogies

-   TypeScript
-   React
-   Material UI
-   MobX
-   Storybook
-   Jest
-   Enzyme

Run project: `npm start`

Run Storybook: `npm run storybook`

Run tests: `npm test`
