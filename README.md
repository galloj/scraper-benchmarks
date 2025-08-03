# Scraper benchmarks

The tested scrapers are:
- [Scrapy](https://github.com/scrapy/scrapy)
- [Colly](https://github.com/gocolly/colly)
- [Crawlee](https://github.com/apify/crawlee)

# Results (sitemap benchmark)

| Crawler | CPU     | Memory |
|---------|---------|--------|
| Scrapy  |  9,13 s | 291 MB |
| Colly   |  7,56 s |  18 MB |
| Crawlee | 35,07 s | 367 MB |

The benchmark crawls one thousand 85 kB pages provided by sitemap.xml and extracts three numbers out of them based on element ids and class.

# Conclusions

Scrapy, the most popular scraping framework, has great performance even though it is writen in Python.
Interesting alternative to it is Colly with its low memory usage.

# Testing details

The statistics are obtained by `/usr/bin/time -v`. The CPU corresponds to sum of "User time" and "System time", which was chosen because it closely represents actual CPU usage. The memory corresponds to "Maximum resident set size".

The benchmark was executed three times and the best result was recorded.

The results are collected on Ubuntu 22.04 in WSL.
Python version is 3.11.13, Go version is 1.24.5, Node version is 22.18.0.
The CPU is AMD Ryzen 5 5500U.