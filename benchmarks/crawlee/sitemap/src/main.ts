// For more information, see https://crawlee.dev/
import { CheerioCrawler, Sitemap  } from 'crawlee';

import { router } from './routes.js';

const crawler = new CheerioCrawler({
    // proxyConfiguration: new ProxyConfiguration({ proxyUrls: ['...'] }),
    requestHandler: router,
    // Comment this option to scrape the full website.
    //maxRequestsPerCrawl: 1000,
});

const { urls } = await Sitemap.load('http://127.0.0.1:1234/sitemap.xml');

await crawler.addRequests(urls);

await crawler.run();
