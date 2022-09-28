console.log("await")
const btn = document.getElementById("main-btn");


btn.addEventListener("click", async _=> {
    const response= await fetch("https://reqres.in/api/users");
    const data = await response.json();
    const re= await fetch("https://reqres.in/api/users?page=2");
    const da = await re.json();
    console.log(data);
    console.log(da);

    const final_arr = [...data.data, da.data]
    console.log(final_arr)
})