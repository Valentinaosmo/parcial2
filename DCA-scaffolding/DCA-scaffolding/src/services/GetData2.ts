export async function getData2(){
    try {
        const data = await fetch('https://api.chucknorris.io/jokes/random?category={category}').then(res => res.json());
        console.log(data);
        return data.results;
    } catch (error) {
        console.error(error);
    }
}
