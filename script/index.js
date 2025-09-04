const loadLessons=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
    .then(res=> res.json()) //promise of json data
    .then(json => displayLessons(json.data))
}




const displayLessons = (lessons) =>{
    // 1.Get the container & make it empty 
    const lebelContainer = document.getElementById("lebel-container")
    lebelContainer.innerHTML =""
    // 2.get into every lessons 
    for(const lesson of lessons){
        
        //     3.Create buttons
        const btnDiv = document.createElement("div")
        btnDiv.innerHTML= `
        <button onclick= "loadLebelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
            <img src="./assets/fa-book-open.png" alt="">Lesson -${lesson.level_no}
        </button>
        `
        //     4.Append to the parent
        lebelContainer.appendChild(btnDiv)
    }
    
}

const loadLebelWord=(id)=>{
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayWords(data.data))
}

// {
//     "id": 88,
//     "level": 1,
//     "word": "Toy",
//     "meaning": "খেলনা",
//     "pronunciation": "টয়"
// }
const displayWords = (words) =>{
    // get the container 
    const wordContainer = document.getElementById("word-container")
    wordContainer.innerHTML="";
    // get into every lessons 
    for(const word of words){
        console.log(word)
        // create cards 
        const cardDiv = document.createElement("div")
        cardDiv.innerHTML = `
        <div class="text-center rounded-xl bg-white py-[56px] px-5 shadow-sm space-y-4">
            <h2 class="font-bold text-xl">${word.word}</h2>
            <p class=" font-semibold">Meaning/Pronounciation</p>
            <div class="font-bangla text-2xl font-medium">"${word.meaning}/${word.pronunciation}"</div>
            <div class="flex justify-between items-center mt-4">
                <button class="btn p-[12px] bg-gray-100 hover:bg-[#1a91ff1a] rounded-[8px]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn p-[12px] bg-gray-100 hover:bg-[#1a91ff1a] rounded-[8px]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
        `
        wordContainer.append(cardDiv)
    }
}

loadLessons()