export default async function getForexNews() {
  const res = await fetch("/api/news-proxy/forex");
  const text = await res.text();

  console.log("FOREX RAW XML:", text);  // 👈 add this line

  const parser = new DOMParser();
  const xml = parser.parseFromString(text, "text/xml");

  console.log("PARSED:", xml);  // 👈 debug

  const items = Array.from(xml.querySelectorAll("item,entry")).slice(0, 8);

  return items.map((i) => ({
    title: i.querySelector("title")?.textContent || "",
    link: i.querySelector("link")?.textContent || "",
    time: i.querySelector("pubDate")?.textContent || "",
  }));
}
