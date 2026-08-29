# jcsnp website

Create a website for my portfolio, main page showing a dev's information. and it serve apps section that use for my mobile application project. it will be like `jcsnp.xxx/apps/<appname>`

each app has its website but instead of create separate website, we will create new page in this project.

## apps page

app website serve at `jcsnp.xxx/apps/<appname>`. policy serve at `jcsnp.xxx/apps/<appname>#privacy-policy`, terms of service serve at `jcsnp.xxx/apps/<appname>#terms-of-service`

## technical requirement

this website should be static web page cause i will deploy with github page. so you need to use static site generator framework. each app can have difference page content, so i prefer to not use a component for some part (make it separate as a folder)

### additional technical requirement

- typescript
- tailwindcss
- light/dark mode supported
- custom font from google fonts: [Figtree](https://fonts.google.com/specimen/Figtree)

## design

i prefer modern ui, material, little rounded border corner, transition.

## Initial page

create a short landing page that display about my short information then render grid of apps that link to mock app.

## Important ambiguities

- my aka is `jcsnp` my full name is `Chitsanupong Paenyoi`
- mock app name called `PhoneticAlphabet` it's iOS application, no store yet
- mock privacy-policy and terms
- default theme is system if possible, fallback to light
- github page deployment mode: custom domain
- i can't decide tld yet.
- improve the SEO

## New requirement

- I want to change the website behaviour. instead of using anchor for tos and policy, we should use other solution. but could you give me an idea
