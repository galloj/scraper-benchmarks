import scrapy
import scrapy.spiders

class TargetSpider(scrapy.spiders.SitemapSpider):
    name = "target_spider"
    allowed_domains = ["127.0.0.1"]
    sitemap_urls = ["http://127.0.0.1:1234/sitemap.xml"]

    def parse(self, response):
        secret1 = response.css("#flat_id_123::text").get()
        secret2 = response.css(".interesting::text").get()
        secret3 = response.css("#nested_id_51::text").get()
        return { "secret1": int(secret1), "secret2": int(secret2), "secret3": int(secret3) }