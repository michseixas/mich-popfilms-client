<h1>
POPFILMS - FRONT END
</h1> 

Popfilms is our fullstack final project, featuring a social web app focused on movies. This is the front-end repository.  [here](https://github.com/michseixas/popfilms-client).

## About us
Fully updated by Mich Seixas, with her assistant Bô =^..^=
We are three movie enthusiasts and Ironhack students who have collaborated to create Popfilms, a captivating social web app dedicated to exploring and sharing our love for films.

![Project Image](https://res.cloudinary.com/dvdoxs7vr/image/upload/v1686252694/popfilms-logo-1_ssovwp.png "Project Image")

## Deployment
You can check the app fully deployed [here](https://popfilms.michseixas.com/). 

```shell
$ cd popfilms
$ npm run build
$ git add . 
$ git commit
$ git push origin main 
```

There is a webhook in github that will deploy automatically every push.

## Installation guide
- Fork this repo
- Clone this repo 



## Routes
| Route                | Privacy         | Renders                  |
| -------------------- | :-------------: | ------------------------ |
| /                    | public          | Home                 |
| /profile             | private (user)  | UserProfilePage          |
| /:movieListType            | public (user)  | MovieListPage          |
| /movies/:movieId           | public (user)  | MovieDetailsPage          |
| *            | public (user)  | ErrorPage          |
|      ...        |   |           |

## Components
- Alert
- CarouselCard
- CommentCard
- CreateComment
- EditUserInfoModal
- FilterForm
- Footer
- LoginForm 
- LoginModal 
- MenuTop
- MovieDetailInfo  
- Navbar 
- SignupModal  
- UserProfileInfoForm




## Pages
- ErrorPage
- HomePage
- LoginPage
- LogoutPage
- MovieDetailsPage
- MoviesListPage
- UserProfilePage





# mich-popfilms-client

# Attribution
This website uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.
