# Prices example (API calls)

Based off of: <https://github.com/electron/simple-samples/tree/master/prices>

Data from `stooq.com`:

![screenshot](https://cloud.githubusercontent.com/assets/671378/21198004/6e7a3798-c1f2-11e6-8228-495de90b7797.png)

```bash
cd prices-example
npm install
npm start
```

It'll make calls to the URL `https://stooq.com/q/l/?s=${stocks[symbol]}&f=sd2t2ohlc&h&e=csv` to get the response data (see `window.js` for details).
