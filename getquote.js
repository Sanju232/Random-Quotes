
const URL = "https://quotes-api-self.vercel.app/quote";
const paragraph = document.querySelector(".para");
const button = document.querySelector("#btn");

async function getData() {
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    
    paragraph.innerText =(`The quote is: ${data.quote} - and the author is ${data.author}`);

    
}
button.addEventListener("click", () => {
    getData();
})
