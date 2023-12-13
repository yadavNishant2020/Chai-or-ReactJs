const githubInfoLoader = async () =>{
    const res = await fetch ('https://api.github.com/users/yadavnishant2020')
    return res.json()
}

export default githubInfoLoader