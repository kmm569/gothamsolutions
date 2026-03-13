async function loadComponent(id, url)
{
	const element = document.getElementById(id);

	if (!element) return;

	try
	{
		const res = await fetch(url);

		if (!res.ok)
		{
			throw new Error("Component failed to load");
		}

		const html = await res.text();

		element.innerHTML = html;
	}
	catch (err)
	{
		console.error("Layout load error:", err);
	}
}

document.addEventListener("DOMContentLoaded", () =>
{
	loadComponent("site-header", "/components/header.html");
	loadComponent("site-footer", "/components/footer.html");
});