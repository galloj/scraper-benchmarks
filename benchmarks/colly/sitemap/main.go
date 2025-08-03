package main

import (
	"fmt"
	"github.com/gocolly/colly/v2"
)

type target struct {
		Secret1 string
		Secret2 string
		Secret3 string
}

func main() {
	targets := []target{}
	c := colly.NewCollector(colly.AllowedDomains("127.0.0.1"))

	c.OnXML("//urlset/url/loc", func(e *colly.XMLElement) {
		c.Visit(e.Text)
	})

	c.OnHTML("body", func(e *colly.HTMLElement) {
		item := target{}
		item.Secret1 = e.ChildText("#flat_id_123")
		item.Secret2 = e.ChildText(".interesting")
		item.Secret3 = e.ChildText("#nested_id_51")
		targets = append(targets, item)
	})

	c.Visit("http://127.0.0.1:1234/sitemap.xml")
	c.Wait()
	fmt.Println(targets)
}