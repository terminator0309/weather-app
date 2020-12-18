import React from "react";
import { Line } from "react-chartjs-2";

const json = {
  lat: 33.44,
  lon: -94.04,
  timezone: "America/Chicago",
  timezone_offset: -21600,
  current: {
    dt: 1607668053,
    sunrise: 1607692237,
    sunset: 1607728141,
    temp: 13.9,
    feels_like: 9.92,
    pressure: 1015,
    humidity: 62,
    dew_point: 6.75,
    uvi: 0,
    clouds: 1,
    visibility: 10000,
    wind_speed: 4.6,
    wind_deg: 170,
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01n",
      },
    ],
  },
  hourly: [
    {
      dt: 1607666400,
      temp: 13.9,
      feels_like: 10.55,
      pressure: 1015,
      humidity: 62,
      dew_point: 6.75,
      uvi: 0,
      clouds: 1,
      visibility: 10000,
      wind_speed: 3.71,
      wind_deg: 175,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607670000,
      temp: 13.18,
      feels_like: 10.55,
      pressure: 1015,
      humidity: 78,
      dew_point: 9.43,
      uvi: 0,
      clouds: 4,
      visibility: 10000,
      wind_speed: 3.6,
      wind_deg: 174,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607673600,
      temp: 12.9,
      feels_like: 10.83,
      pressure: 1015,
      humidity: 88,
      dew_point: 10.96,
      uvi: 0,
      clouds: 39,
      visibility: 10000,
      wind_speed: 3.41,
      wind_deg: 178,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607677200,
      temp: 12.77,
      feels_like: 11.06,
      pressure: 1015,
      humidity: 94,
      dew_point: 11.83,
      uvi: 0,
      clouds: 63,
      visibility: 10000,
      wind_speed: 3.25,
      wind_deg: 176,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607680800,
      temp: 12.63,
      feels_like: 11.36,
      pressure: 1014,
      humidity: 97,
      dew_point: 12.17,
      uvi: 0,
      clouds: 74,
      visibility: 10000,
      wind_speed: 2.77,
      wind_deg: 184,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607684400,
      temp: 12.81,
      feels_like: 11.06,
      pressure: 1014,
      humidity: 97,
      dew_point: 12.48,
      uvi: 0,
      clouds: 80,
      visibility: 10000,
      wind_speed: 3.54,
      wind_deg: 166,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607688000,
      temp: 12.92,
      feels_like: 11.03,
      pressure: 1014,
      humidity: 97,
      dew_point: 12.56,
      uvi: 0,
      clouds: 83,
      visibility: 10000,
      wind_speed: 3.79,
      wind_deg: 169,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607691600,
      temp: 13.72,
      feels_like: 11.41,
      pressure: 1015,
      humidity: 96,
      dew_point: 13.13,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.68,
      wind_deg: 178,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.08,
    },
    {
      dt: 1607695200,
      temp: 14.38,
      feels_like: 11.78,
      pressure: 1015,
      humidity: 94,
      dew_point: 13.53,
      uvi: 0.05,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.24,
      wind_deg: 178,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      pop: 0.21,
      rain: {
        "1h": 0.26,
      },
    },
    {
      dt: 1607698800,
      temp: 14.98,
      feels_like: 12.53,
      pressure: 1014,
      humidity: 93,
      dew_point: 13.87,
      uvi: 0.2,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.23,
      wind_deg: 177,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      pop: 0.4,
      rain: {
        "1h": 0.17,
      },
    },
    {
      dt: 1607702400,
      temp: 15.92,
      feels_like: 13.48,
      pressure: 1013,
      humidity: 90,
      dew_point: 14.36,
      uvi: 0.37,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.43,
      wind_deg: 181,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0.42,
    },
    {
      dt: 1607706000,
      temp: 16.42,
      feels_like: 14.3,
      pressure: 1013,
      humidity: 89,
      dew_point: 14.66,
      uvi: 0.59,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.13,
      wind_deg: 182,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0.42,
    },
    {
      dt: 1607709600,
      temp: 16.71,
      feels_like: 14.72,
      pressure: 1012,
      humidity: 88,
      dew_point: 14.85,
      uvi: 0.72,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5,
      wind_deg: 187,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0.63,
    },
    {
      dt: 1607713200,
      temp: 17.23,
      feels_like: 15.9,
      pressure: 1010,
      humidity: 88,
      dew_point: 15.3,
      uvi: 0.23,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.32,
      wind_deg: 180,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      pop: 0.87,
      rain: {
        "1h": 0.68,
      },
    },
    {
      dt: 1607716800,
      temp: 16.56,
      feels_like: 14.41,
      pressure: 1009,
      humidity: 92,
      dew_point: 15.33,
      uvi: 0.17,
      clouds: 100,
      visibility: 4046,
      wind_speed: 5.51,
      wind_deg: 184,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      pop: 0.99,
      rain: {
        "1h": 2.04,
      },
    },
    {
      dt: 1607720400,
      temp: 15.9,
      feels_like: 14.58,
      pressure: 1008,
      humidity: 97,
      dew_point: 15.5,
      uvi: 0.1,
      clouds: 100,
      visibility: 4307,
      wind_speed: 4.41,
      wind_deg: 179,
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10d",
        },
      ],
      pop: 1,
      rain: {
        "1h": 7.23,
      },
    },
    {
      dt: 1607724000,
      temp: 16.27,
      feels_like: 14.39,
      pressure: 1008,
      humidity: 96,
      dew_point: 15.79,
      uvi: 0.03,
      clouds: 100,
      visibility: 4874,
      wind_speed: 5.33,
      wind_deg: 200,
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10d",
        },
      ],
      pop: 1,
      rain: {
        "1h": 5.11,
      },
    },
    {
      dt: 1607727600,
      temp: 16.61,
      feels_like: 15.27,
      pressure: 1008,
      humidity: 95,
      dew_point: 15.82,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.64,
      wind_deg: 201,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      pop: 1,
      rain: {
        "1h": 1.62,
      },
    },
    {
      dt: 1607731200,
      temp: 16.47,
      feels_like: 15.46,
      pressure: 1008,
      humidity: 95,
      dew_point: 15.68,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.1,
      wind_deg: 197,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      pop: 1,
      rain: {
        "1h": 0.72,
      },
    },
    {
      dt: 1607734800,
      temp: 16.09,
      feels_like: 14.76,
      pressure: 1009,
      humidity: 94,
      dew_point: 15.14,
      uvi: 0,
      clouds: 83,
      visibility: 10000,
      wind_speed: 4.27,
      wind_deg: 202,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      pop: 1,
      rain: {
        "1h": 0.8,
      },
    },
    {
      dt: 1607738400,
      temp: 15.52,
      feels_like: 14.11,
      pressure: 1009,
      humidity: 93,
      dew_point: 14.45,
      uvi: 0,
      clouds: 42,
      visibility: 10000,
      wind_speed: 4.01,
      wind_deg: 212,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      pop: 1,
      rain: {
        "1h": 0.44,
      },
    },
    {
      dt: 1607742000,
      temp: 15.23,
      feels_like: 13.52,
      pressure: 1010,
      humidity: 92,
      dew_point: 13.96,
      uvi: 0,
      clouds: 27,
      visibility: 10000,
      wind_speed: 4.22,
      wind_deg: 230,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      pop: 0.99,
      rain: {
        "1h": 0.3,
      },
    },
    {
      dt: 1607745600,
      temp: 14.04,
      feels_like: 10.38,
      pressure: 1011,
      humidity: 87,
      dew_point: 12.07,
      uvi: 0,
      clouds: 21,
      visibility: 10000,
      wind_speed: 6.07,
      wind_deg: 278,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      pop: 0.79,
    },
    {
      dt: 1607749200,
      temp: 11.55,
      feels_like: 7.94,
      pressure: 1011,
      humidity: 84,
      dew_point: 9.11,
      uvi: 0,
      clouds: 17,
      visibility: 10000,
      wind_speed: 4.83,
      wind_deg: 280,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      pop: 0.74,
    },
    {
      dt: 1607752800,
      temp: 9.64,
      feels_like: 6.53,
      pressure: 1012,
      humidity: 86,
      dew_point: 7.43,
      uvi: 0,
      clouds: 14,
      visibility: 10000,
      wind_speed: 3.58,
      wind_deg: 275,
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      pop: 0.9,
    },
    {
      dt: 1607756400,
      temp: 8.6,
      feels_like: 5.32,
      pressure: 1013,
      humidity: 88,
      dew_point: 6.76,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.6,
      wind_deg: 272,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607760000,
      temp: 7.96,
      feels_like: 4.28,
      pressure: 1013,
      humidity: 87,
      dew_point: 5.96,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.92,
      wind_deg: 282,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607763600,
      temp: 7.29,
      feels_like: 3.51,
      pressure: 1014,
      humidity: 85,
      dew_point: 5.03,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.77,
      wind_deg: 294,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607767200,
      temp: 6.71,
      feels_like: 3.22,
      pressure: 1014,
      humidity: 87,
      dew_point: 4.76,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.29,
      wind_deg: 289,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607770800,
      temp: 6.39,
      feels_like: 2.76,
      pressure: 1015,
      humidity: 88,
      dew_point: 4.71,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.45,
      wind_deg: 291,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607774400,
      temp: 6.11,
      feels_like: 2.54,
      pressure: 1016,
      humidity: 90,
      dew_point: 4.6,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.38,
      wind_deg: 287,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607778000,
      temp: 5.73,
      feels_like: 2.37,
      pressure: 1017,
      humidity: 89,
      dew_point: 4.19,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.93,
      wind_deg: 288,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607781600,
      temp: 6.14,
      feels_like: 2.48,
      pressure: 1017,
      humidity: 86,
      dew_point: 4,
      uvi: 0.15,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.34,
      wind_deg: 293,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607785200,
      temp: 7.56,
      feels_like: 3.39,
      pressure: 1018,
      humidity: 75,
      dew_point: 3.51,
      uvi: 0.65,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.92,
      wind_deg: 301,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607788800,
      temp: 8.69,
      feels_like: 4.76,
      pressure: 1019,
      humidity: 70,
      dew_point: 3.55,
      uvi: 1.4,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.61,
      wind_deg: 296,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607792400,
      temp: 9.91,
      feels_like: 6.04,
      pressure: 1019,
      humidity: 65,
      dew_point: 3.79,
      uvi: 2.22,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.55,
      wind_deg: 287,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607796000,
      temp: 11.09,
      feels_like: 7.29,
      pressure: 1019,
      humidity: 61,
      dew_point: 3.93,
      uvi: 2.7,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.51,
      wind_deg: 286,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607799600,
      temp: 11.89,
      feels_like: 8.1,
      pressure: 1018,
      humidity: 59,
      dew_point: 4.16,
      uvi: 2.58,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.57,
      wind_deg: 280,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607803200,
      temp: 12.3,
      feels_like: 8.64,
      pressure: 1017,
      humidity: 57,
      dew_point: 4.23,
      uvi: 1.93,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.35,
      wind_deg: 284,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607806800,
      temp: 12.2,
      feels_like: 8.52,
      pressure: 1017,
      humidity: 58,
      dew_point: 4.36,
      uvi: 1.07,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.42,
      wind_deg: 283,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607810400,
      temp: 11.46,
      feels_like: 8.15,
      pressure: 1017,
      humidity: 63,
      dew_point: 4.73,
      uvi: 0.36,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.02,
      wind_deg: 290,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607814000,
      temp: 9.16,
      feels_like: 6.05,
      pressure: 1017,
      humidity: 71,
      dew_point: 4.3,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.61,
      wind_deg: 296,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607817600,
      temp: 7.81,
      feels_like: 4.96,
      pressure: 1018,
      humidity: 75,
      dew_point: 3.72,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.1,
      wind_deg: 301,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607821200,
      temp: 7.2,
      feels_like: 4.39,
      pressure: 1018,
      humidity: 77,
      dew_point: 3.55,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 1.98,
      wind_deg: 310,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607824800,
      temp: 6.66,
      feels_like: 4.17,
      pressure: 1019,
      humidity: 79,
      dew_point: 3.38,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 1.48,
      wind_deg: 317,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607828400,
      temp: 6.25,
      feels_like: 3.8,
      pressure: 1019,
      humidity: 81,
      dew_point: 3.27,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 1.41,
      wind_deg: 341,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607832000,
      temp: 5.76,
      feels_like: 3.37,
      pressure: 1019,
      humidity: 83,
      dew_point: 3.27,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 1.29,
      wind_deg: 21,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1607835600,
      temp: 5.46,
      feels_like: 2.87,
      pressure: 1019,
      humidity: 86,
      dew_point: 3.41,
      uvi: 0,
      clouds: 0,
      visibility: 10000,
      wind_speed: 1.64,
      wind_deg: 41,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      pop: 0,
    },
  ],
  daily: [
    {
      dt: 1607709600,
      sunrise: 1607692237,
      sunset: 1607728141,
      temp: {
        day: 16.71,
        min: 11.55,
        max: 17.23,
        night: 11.55,
        eve: 16.47,
        morn: 12.92,
      },
      feels_like: {
        day: 14.72,
        night: 7.94,
        eve: 15.46,
        morn: 11.03,
      },
      pressure: 1012,
      humidity: 88,
      dew_point: 14.85,
      wind_speed: 5,
      wind_deg: 187,
      weather: [
        {
          id: 502,
          main: "Rain",
          description: "heavy intensity rain",
          icon: "10d",
        },
      ],
      clouds: 100,
      pop: 1,
      rain: 19.37,
      uvi: 0.72,
    },
    {
      dt: 1607796000,
      sunrise: 1607778678,
      sunset: 1607814554,
      temp: {
        day: 11.09,
        min: 5.46,
        max: 12.3,
        night: 5.46,
        eve: 7.81,
        morn: 6.11,
      },
      feels_like: {
        day: 7.29,
        night: 2.87,
        eve: 4.96,
        morn: 2.54,
      },
      pressure: 1019,
      humidity: 61,
      dew_point: 3.93,
      wind_speed: 3.51,
      wind_deg: 286,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: 0,
      pop: 0.9,
      uvi: 2.7,
    },
    {
      dt: 1607882400,
      sunrise: 1607865118,
      sunset: 1607900969,
      temp: {
        day: 9.02,
        min: 3.79,
        max: 9.36,
        night: 6.3,
        eve: 6.93,
        morn: 3.79,
      },
      feels_like: {
        day: 4.4,
        night: 2.14,
        eve: 2.18,
        morn: -0.19,
      },
      pressure: 1018,
      humidity: 76,
      dew_point: 5.19,
      wind_speed: 5,
      wind_deg: 46,
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      clouds: 77,
      pop: 1,
      rain: 11.52,
      uvi: 0.36,
    },
    {
      dt: 1607968800,
      sunrise: 1607951557,
      sunset: 1607987385,
      temp: {
        day: 6.6,
        min: 4.33,
        max: 7.65,
        night: 6.03,
        eve: 6.25,
        morn: 4.34,
      },
      feels_like: {
        day: 3.11,
        night: 2.59,
        eve: 3.38,
        morn: 0.11,
      },
      pressure: 1024,
      humidity: 77,
      dew_point: 3.02,
      wind_speed: 2.8,
      wind_deg: 71,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: 96,
      pop: 0.52,
      rain: 0.32,
      uvi: 2.39,
    },
    {
      dt: 1608055200,
      sunrise: 1608037995,
      sunset: 1608073804,
      temp: {
        day: 9.03,
        min: 4.65,
        max: 9.56,
        night: 4.65,
        eve: 7.26,
        morn: 5.82,
      },
      feels_like: {
        day: 4.97,
        night: -0.19,
        eve: 2.33,
        morn: 2.54,
      },
      pressure: 1013,
      humidity: 72,
      dew_point: 4.29,
      wind_speed: 3.98,
      wind_deg: 197,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: 100,
      pop: 0,
      uvi: 3,
    },
    {
      dt: 1608141600,
      sunrise: 1608124431,
      sunset: 1608160224,
      temp: {
        day: 5.95,
        min: 0.98,
        max: 7.43,
        night: 0.98,
        eve: 3.24,
        morn: 1.1,
      },
      feels_like: {
        day: 0.83,
        night: -2.81,
        eve: -0.87,
        morn: -3.95,
      },
      pressure: 1024,
      humidity: 64,
      dew_point: -1.06,
      wind_speed: 4.41,
      wind_deg: 312,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: 0,
      pop: 0,
      uvi: 3,
    },
    {
      dt: 1608228000,
      sunrise: 1608210867,
      sunset: 1608246646,
      temp: {
        day: 7.69,
        min: -1.07,
        max: 9.48,
        night: 2.79,
        eve: 4.21,
        morn: -1.07,
      },
      feels_like: {
        day: 4.35,
        night: -1.13,
        eve: 0.22,
        morn: -4.07,
      },
      pressure: 1029,
      humidity: 57,
      dew_point: -1.15,
      wind_speed: 1.88,
      wind_deg: 189,
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: 4,
      pop: 0,
      uvi: 3,
    },
    {
      dt: 1608314400,
      sunrise: 1608297300,
      sunset: 1608333069,
      temp: {
        day: 8.93,
        min: 0.35,
        max: 10.85,
        night: 7.05,
        eve: 7.05,
        morn: 0.35,
      },
      feels_like: {
        day: 4.15,
        night: 2.98,
        eve: 2.98,
        morn: -3.56,
      },
      pressure: 1027,
      humidity: 61,
      dew_point: 1.93,
      wind_speed: 4.39,
      wind_deg: 156,
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: 78,
      pop: 0,
      uvi: 3,
    },
  ],
};

function Chart() {
  var Labels = [];
  Labels = json.hourly.map((data) => new Date(data.dt * 1000).getHours());
  var Temps = [];
  Temps = json.hourly.map((data) => data.temp);
  var IMG = json.hourly.map((data) => [
    data.weather[0].icon,
    data.weather[0].main,
  ]);
  console.log(IMG);
  return (
    <>
      <Line
        height={200}
        width={600}
        data={{
          labels: [...Labels],
          datasets: [
            {
              label: "",
              data: [...Temps],
              images: [...IMG],
              backgroundColor: "rgba(253, 181, 86, 0.555)",

              borderColor: "orange",
              borderWidth: 1.2,
              pointBackgroundColor: "orange",
              hoverBackgroundColor: "red",
              hoverRadius: 7,
              hoverBorderColor: "red",
            },
          ],
        }}
        options={{
          legend: {
            display: false,
          },
          scales: {
            yAxes: [
              {
                gridLines: {
                  display: true,
                },
                scaleLabel: {
                  display: true,
                  labelString: "Temperature",
                  fontSize: 22,
                  fontFamily: "Quicksand",
                  fontColor: "black",
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: true,
                },
                scaleLabel: {
                  display: true,
                  labelString: "Time",
                  fontSize: 22,
                  fontFamily: "Quicksand",
                  fontColor: "black",
                },
              },
            ],
          },
          maintainAspectRatio: false,
          tooltips: {
            enabled: false,
            custom: function (tooltipModel) {
              var tooltipEl = document.getElementById("chartjs-tooltip");

              // Create element on first render
              if (!tooltipEl) {
                tooltipEl = document.createElement("div");
                tooltipEl.id = "chartjs-tooltip";
                tooltipEl.innerHTML = "<div></div>";
                document.body.appendChild(tooltipEl);
              }

              // Hide if no tooltip
              if (tooltipModel.opacity === 0) {
                tooltipEl.style.opacity = 0;
                return;
              }

              // Set caret Position
              tooltipEl.classList.remove("above", "below", "no-transform");
              if (tooltipModel.yAlign) {
                tooltipEl.classList.add(tooltipModel.yAlign);
              } else {
                tooltipEl.classList.add("no-transform");
              }

              function getBody(bodyItem) {
                return bodyItem.lines;
              }

              // Set Text
              console.log(tooltipModel);
              if (tooltipModel.body) {
                var titleLines = tooltipModel.title || [];
                var bodyLines = tooltipModel.body.map(getBody);

                var innerHtml = "<div>";

                // titleLines.forEach(function (title) {
                //   innerHtml += "<div>" + title + "</div>";
                // });
                // innerHtml += "</div>";style='border-color: black; border-width: 3px; border-radius: 10%;'

                bodyLines.forEach(function (body, i) {
                  var img =
                    "<img src='http://openweathermap.org/img/wn/" +
                    IMG[tooltipModel.dataPoints[0].index][0] +
                    ".png' />";
                  var des =
                    "<center><b>" +
                    IMG[tooltipModel.dataPoints[0].index][1] +
                    "</b></center>";
                  innerHtml += img + des;
                });
                innerHtml += "</div>";
                //   <img
                //   src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
                //   alt="Weather"
                // />

                var tableRoot = tooltipEl.querySelector("div");
                tableRoot.innerHTML = innerHtml;
                console.log(innerHtml);
              }

              // `this` will be the overall tooltip
              var position = this._chart.canvas.getBoundingClientRect();

              // Display, position, and set styles for font
              tooltipEl.style.opacity = 1;
              tooltipEl.style.position = "absolute";
              tooltipEl.style.left =
                position.left + window.pageXOffset + tooltipModel.caretX + "px";
              tooltipEl.style.top =
                position.top + window.pageYOffset + tooltipModel.caretY + "px";
              tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
              tooltipEl.style.fontSize = tooltipModel.bodyFontSize + "px";
              tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
              tooltipEl.style.padding =
                tooltipModel.yPadding + "px " + tooltipModel.xPadding + "px";
              tooltipEl.style.pointerEvents = "none";
              tooltipEl.style.background =
                "linear-gradient(to right, #4e54c8, #8f94fb)";
              tooltipEl.style.borderRadius = "10px";
              tooltipEl.style.boxShadow = "3px 3px 25px #4e54c88c";
              tooltipEl.style.color = "ivory";
              tooltipEl.style.transition = "all 0.15s ease-in-out";
            },
          },
        }}
      />
    </>
  );
}

export default Chart;
