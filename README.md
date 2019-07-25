Number and name of feature: Class 13

Estimate of time needed to complete: 2 hours

Start time: 7:47

Finish time: _____

Actual time needed to complete: _____

<App>
  <Header>
  <SearchForm>
  <Map>
  <SearchResults>
    <Result> -- should exist and be individually named for each set of API call results - for example:

    <Yelp lat="x" long="x">
    <MovieDB lat="x" long="x">

<App>
  Should contain all child components and manage the application state.
  this.state = {
    location: {}
  };

<Header>
  Should contain an <h1> with the title of your application (City Explorer).
  Should contain a <p> with the following text: “Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!”

<SearchForm>
  Should contain <form> that makes a request to capture the users location and stores that in the application state for other components to use.

<Map>
  Should use the geo-location data from youur <SearchForm> to display a Google Map with a pin on your location.

<SearchResults>
  Should contain a container to house your <Result> components.

<Result>
  Should contain a container with the data from your API call. This should be nested within a <SearchResults> parent component and each <Result> component should be individually created and named. Essentially, this means that you should have a component for each API. For example: <Yelp>, <MovieDB>, <DarkSky>, <EventBrite>, etc. Each one of these components should then render a <ul> with the data from that API.













Number and name of feature: class-12

Estimate of time needed to complete: 1.5 hours

Start time: 5:51 PM

Finish time: 6:38 PM

Actual time needed to complete: 47 Minutes

<Header>
  <Main>
    <Search>
    <Maps>
    <Results>


<Header> DONE
  Should contain an <h1> with the title of your application (City Explorer).
  Should contain a <p> with the following text: “Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!”

<Main>
  Should contain the homepage markup and subsequent components. This includes the following:
  - A search box and button for searching for a location
  - A Google Maps placeholder
  - 5 result boxes that will be used to house results our future API calls. You may use “lorem ipsum” text for now. Those   APIs include: the Dark Sky API, Yelp API, Eventbrite API, MovieDB API, nd the Hiking Project API.
  <Header>
  <Main>
    <Search>
    <Maps>
    <Results>

<Search> DONE
  Should contain an <input> and a <button> element for searching for a location. This does not have to be wired to work yet - just the markup is required.

<Map>
  Should contain a Google Map placholder. This does not have to be wired up work yet - just the markup is required.

<Result>
  Should contain an <section> element with placeholder content that will be filled with real-time data later in the week. You may simply nest 5 <Result> components inside of <Main> for the time being. We will be recomposing this later in the week.











This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
