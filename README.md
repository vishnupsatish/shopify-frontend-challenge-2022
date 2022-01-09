# Shopify Frontend Developer Intern Challenge

This is my (Vishnu Satish) submission for the Shopify Frontend Developer Intern Challenge 2022.

This application is called "Space 4 Everyone" and fetches data from the NASA Astronomy Picture of the Day API and displays the media. 

Users can like and copy a shareable link to the media. Users can also reload the media, which will fetch a given number of random pieces of media from the NASA API.

This application follows Shopify's guidelines for accessibility, best practices, and content guidelines.

## Test results

The application was run through the [Lighthouse](https://web.dev/measure/) and [WAVE](https://wave.webaim.org/) tests.

On the Lighthouse test, it received a 75 for performance, 100 for accessibility, 100 for best practices, and 100 for SEO. The [full JSON report is available here](lighthouse-report.json).

On the WAVE accessibility test, the application received no errors and one alert, which was due to the `noscript` element. The [full report is available here](https://wave.webaim.org/report#/https://shopify-frontend-challenge-2022.vishnus.me/).
