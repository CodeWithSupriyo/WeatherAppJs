
# Weather App

A Weather app. This app have many features such as 3 forcast of the day, humidity, wind speed, Air qualaty etc... along with data and time and the current temprature and a discription shown by an image. Deployed in github page and netlify

[![](https://img.shields.io/badge/On_Netlify-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://weatherappsupriyo.netlify.app/)

## Demo

<p align="center">
<img src="https://ibb.co/1KXd7VT" width="100%">
</p>


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/b61663c1-aae3-45c7-baae-57f131a73dab/deploy-status)](https://app.netlify.com/sites/weatherappsupriyo/deploys)

## Appendix

This app is responsive. 
This app gives the current weather of the city or the area you searched
## Features

- Live previews
- Fullscreen mode

## Color Reference

| Color             | Tailwind                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Violet | violet-500 |
| White | white |
| Violet (Dark) | violet-800 |
| Black | black |


## OpenWeatherMap API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. c44025824eca9a9dd813b9481fe16f66 |

#### Get item (main Weather API) 

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. 1268504 |

#### fetch(url + city + `&appid=${apikey}`)

Takes URL, city and the apiKey and returns the data (weather) of the city or the place that has been searched out.

#### Get item (forcast of the day) 

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. 500 |

#### fetch(url2 + `lat=${lat}` + `&lon=${lon}` + `&appid=${apikey}`)

Takes URL, lat and the lon of the city and the apiKey and returns the data (weather of the 3 highlights) of the city or the place that has been searched out.

#### Get item (Air Pollution) 

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Not Given |

#### fetch(airPollutionUrl + lat + 
 lon + `&appid=${apikey}`)

Takes URL, lat and lon of the city and the apiKey and returns the data (air Pollution) of the city or the place that has been searched out.



## Technologies Used

-The basic HTML CSS An JS 

-The tailwind for some beter CSS **Half of the app uses tailwind CSS but the maincard uses CSS for styling & use of tailwind with its cdn**
## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

See the  `code of conduct`.


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)


## Installation

Install my-project with npm

```bash
  npm install WeatherAppJs
  cd WeatherAppJs
```
    
## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`


## Feedback

If you have any feedback, please reach out to us at supriyorana1st@gmail.com


# Hi, I'm Supriyo! 👋


## Author

- [@CodeWithSupriyo](https://www.github.com/CodeWithSupriyo)

## 🚀 About Me
I'm a frontend developer
-I use many technologies like HTML, CSS, JS, Tailwind CSS, REACT, Bootstrap


## Other Common Github Profile Sections
👩‍💻 I'm currently working on my **Portfolio**

🧠 I'm currently learning **GSAP TypeScript React**

💬 Ask me about **GSAP Animation**

📫 How to reach me **supriyorana1st@gamil.com**


## Lessons Learned

I learned about how to fetch an api in JS and adding using some tailwind CSS? What challenges did you face and how did you overcome them?

