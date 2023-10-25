const btn = document.getElementById("button")
async function fetchData() {
  const response = await fetch("https://cat-fact.herokuapp.com/facts/random");
  const fact = response.json();
  return fact;
}

async function getText() {
  const response = await fetchData()
  console.log(response.text);

  const section = document.createElement("section");
  section.innerHTML = `
  <div>
    <h1>Random Fact</h1>
    <p>${response.text}</p>
  </div>
  `
  document.body.insertBefore(section, btn)
}

btn.addEventListener("click", getText)

