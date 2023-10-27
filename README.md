<div align=center>
  <h1>TalkToo Login Assessment</h1>
  <p>Simple development task done in order to implement a Login screen of <a href='https://www.talktoo.ai/'>TalkToo</a> using React Native Web</p>

  ![React Native Web](docs/assets/badges/ReactNativeWeb.svg)
  ![Expo](docs/assets/badges/Expo.svg)
  ![Firebase](docs/assets/badges/Firebase.svg)

  [Live Application](https://talktoologinassessement.web.app/)

  <details>
    <summary>
      <strong>See a screenshot</strong>
    </summary>
    <br />
    <img src=docs/assets/gifs/Screenshot.gif alt="Project Screenshot" />
  </details>
</div>
  
</div>

## About

On this assessement, it was desired to reproduce a login screen prototype <a href='https://www.figma.com/file/ExCv1Dc4WdUUzR3h3ipjvh/Sample-Task?node-id=12%3A190&mode=dev'>screen prototype</a> of TalkToo app, based on web.

Was used <ins>React Native Web</ins> in order to get the advantage of compatibility with components used on existent mobile app.

<ins>Expo</ins> was the framework to bundle packages thanks for your ease to use and configure, and its broader compatibility with React Native core components.

At the end, <ins>Firebase</ins> takes place on deploying and hosting application providing a domain on WWW.

<br />

## Application Description

It consists on a login landing page for users who wants register and connect with the restricted features of application.

The login proccess is made using a Google account, which is possibly by Firebase integration and its API.

In addition, the guest user even can see some of the character sprites on a automatic carousel, and have a link for Terms of Use and Privacy Policy.

<br />

## Architecture

This application makes use of components React in order to provide a modularized development and also flexibility. There are four main different kind of source code on the project, as described bellow:

<br />

| Source Type   | Description |
| ------------- | ------------- |
| Components    | Here places the basis of development. The whole application is made by these small block of codes, that together, makes it works. These components has it's only states, logical and styling. All related to it is put on his bound. This strategy improves code reusability, and isolation for cases of maintaince or code testing  |
| Context  | Here we can find the application store. It's where we can get data that stay available on all application components. It is primarily fetched using React Hooks. |
| Services    | Is where are bundled the functions that makes comunication with other applications, mainly over HTTP. On case of this application, besides of lack of need in using external data, was created a mock function for getting the above mentioned sprites. On this way, the architecture stays ready for using real external data |
| Services    | Here we can see the all logical implemented for authenticating.  |

<br />

## External libraries

Two external libraries was so usefull during development proccess, beyond the Expo itself:

- [Expo LinearGradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/): this package makes possible creating the "gradient overlaying" between textual content and sprite pictures. The great advantage here is having a way to use *linear-gradient()* CSS funtion, which is still unavailable in core React-Native;
  
- [react-native-web-swiper](https://github.com/reactrondev/react-native-web-swiper): it's provide a swiper available on React-Native-Web, and compatible with Expo. It is a simple, but very powerful API, and allow a lot of custom too. It was used for building the sprites carousel.

<br />

## How can application be runned?

If you want to see application run on online environment, it's possibly use the firebase public domain of project (https://talktoologinassessement.web.app/).

On the other hand, you can run this application on your local, if would you prefer, being required having installed this programs runtimes:

- Node.js;
- NPM.
  
To run application, you need first clone this repository, which is possible by one of these methods:

> - HTTPS: https://github.com/Fabio-Vicente/Playground-Functions.git
> - SSH: git@github.com:Fabio-Vicente/Playground-Functions.git
> - ZIP: https://github.com/Fabio-Vicente/Playground-Functions/archive/refs/heads/main.zip

Once you made the clone, open the destination directory (`cd TalkTooLogin`), and install its dependencies:

> npm install

After installation proccess (it can take a little bit), you must be able to running project. Run this script on terminal:

> npm run web

A web browser will arise, automatically, opening the app. At most of times, it uses 19006 port for running it. In case that port is already in use, expo handle it choosing another port for running.

I hope you enjoy the experience! 😄

<br />

Want to make contact? Please send me a message on this GitHub or by following the e-mail:

<br />

fab10_lima@hotmail.com

<br />
<br />
<br />
<br />
<br />


<div align=right>

[![Code with love by Fábio Vicente](docs/assets/badges/made-with-love.svg)](https://github.com/Fabio-Vicente)

</div>
