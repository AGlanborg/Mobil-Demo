# Mobil-demo

Display your favorite number on both mobile and desktop

## Start-up

First start the Docker-compose file in the root directory 

```
$ docker-compose up -d
```

### Mobile

Enter the `app` directory and run the starter command

```
$ cd app/
$ npm run start
```

### Desktop

Enter the `page` directory and run the starter command

```
$ cd page/
$ npm run start
```

## Instructions

For both `mobile` and `desktop` there is only a login screen and no register screen. This is becuase the **login screen** works both as a registry and a login feature. By entering a unused email and a `6 figure long password` a account will be created and automaticly logged in.

Your favorite number **can not** be changed on the desktop view.

## App

The version used for the `app` was:

| Expo SDK version | React Native version |
|--------|-------|
| 47.0.0 |	0.70 |

Patch notes and version differences can be found here: https://reactnative.dev/versions
