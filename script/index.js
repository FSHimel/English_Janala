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
        <button id="lesson-btn-${lesson.level_no}" onclick= "loadLebelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
            <i class="fa-solid fa-book-open"></i>Lesson -${lesson.level_no}
        </button>
        `
        //     4.Append to the parent
        lebelContainer.appendChild(btnDiv)
    }
    
}
// remove all active class 
const removeActive=()=>{
    const lessonBtns = document.querySelectorAll(".lesson-btn")
    // console.log(lessonBtns)
    lessonBtns.forEach(btn=>btn.classList.remove("active"))
}

const loadLebelWord=(id)=>{
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        removeActive()  /*remove active class for all*/ 
        displayWords(data.data)
        const lessonBtn = document.getElementById(`lesson-btn-${id}`)
        lessonBtn.classList.add("active")
    })
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

    if(words.length ==0){
        wordContainer.innerHTML=`
        <div class=" col-span-full rounded-xl text-center py-10 space-y-3">
            <img src="./assets/alert-error.png" alt="" class="mx-auto">
            <p class="font-bangla  text-[12px] md:text-[14px] text-[#79716B]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="font-bangla text-[25px] md:text-[35px]">নেক্সট Lesson এ যান</h2>
        </div>
        `;
        return
    }
    // get into every lessons 
    for(const word of words){
        // console.log(word)
        // create cards 
        const cardDiv = document.createElement("div")
        cardDiv.innerHTML = `
        <div class="text-center rounded-xl bg-white py-[56px] px-5 shadow-sm space-y-4">
            <h2 class="font-bold text-xl">${word.word ? word.word : "শব্দ খুঁজে পাওয়া যায়নি"}</h2>
            <p class=" font-semibold">Meaning/Pronunciation</p>
            <div class="font-bangla text-2xl font-medium">"${word.meaning ? word.meaning: "অর্থ খুঁজে পাওয়া যায়নি"}/${word.pronunciation ? word.pronunciation:"উচ্চারণ পাওয়া যায়নি"}"</div>
            <div class="flex justify-between items-center mt-4">
                <button onclick="loadWordDetail(${word.id})" class="btn p-[12px] bg-gray-100 hover:bg-[#1a91ff1a] rounded-[8px]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn p-[12px] bg-gray-100 hover:bg-[#1a91ff1a] rounded-[8px]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
        `
        wordContainer.append(cardDiv)
    }
}

const loadWordDetail=(id)=>{
    const url = `https://openapi.programming-hero.com/api/word/${id}`
    
    fetch(url)
    .then(res=>res.json())
    .then(data => displayDetails(data.data))
    
}

const displayDetails = (detail) =>{
    //get the container
    const detailsContainer = document.getElementById("details-container")
    detailsContainer.innerHTML=""
    document.getElementById("my_modal").showModal()
    //get into every word details
    
        //create a div
        
        //append child to parent
        
    
}

loadLessons()