export default async function getCryptoNews() {

  const res = await fetch("/api/news-proxy/crypto");
  const text = await res.text();

  const parser = new DOMParser();
  const xml = parser.parseFromString(text, "text/xml");
  const items = Array.from(xml.querySelectorAll("item")).slice(0, 8);

  return items.map((i) => ({
    title: i.querySelector("title")?.textContent || "",
    link: i.querySelector("link")?.textContent || "",
    time: i.querySelector("pubDate")?.textContent || "",
  }));
}