
// JavaScript DOM Project


// Theme Toggle
const themeBtn = document.getElementById("themeBtn");
const themeIcon = themeBtn.querySelector("i");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
    }
});

// Load Saved Theme
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }

    loadTasks();
});


// Smooth Scroll Button


const scrollBtn = document.getElementById("scrollBtn");

scrollBtn.addEventListener("click", () => {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
});


// Live Search Filter


const searchInput = document.getElementById("searchInput");
const searchCards = document.querySelectorAll(".search-card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    searchCards.forEach(card => {

        const text = card.textContent.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


// To-Do List


const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

let tasks = [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {

    const saved = localStorage.getItem("tasks");

    if (saved) {
        tasks = JSON.parse(saved);
        tasks.forEach(createTaskElement);
    }

}

function createTaskElement(task) {

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.text;

    if (task.completed) {
        span.classList.add("completed");
    }

    // Complete Button

    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

    completeBtn.style.marginRight = "10px";
    completeBtn.style.background = "#22c55e";
    completeBtn.style.color = "#fff";
    completeBtn.style.border = "none";
    completeBtn.style.padding = "8px 10px";
    completeBtn.style.borderRadius = "6px";
    completeBtn.style.cursor = "pointer";

    completeBtn.addEventListener("click", () => {

        span.classList.toggle("completed");

        task.completed = !task.completed;

        saveTasks();

    });

    // Delete Button

    const deleteBtn = document.createElement("button");

    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    deleteBtn.style.background = "#ef4444";
    deleteBtn.style.color = "#fff";
    deleteBtn.style.border = "none";
    deleteBtn.style.padding = "8px 10px";
    deleteBtn.style.borderRadius = "6px";
    deleteBtn.style.cursor = "pointer";

    deleteBtn.addEventListener("click", () => {

        li.remove();

        tasks = tasks.filter(item => item !== task);

        saveTasks();

    });

    const btnContainer = document.createElement("div");

    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnContainer);

    taskList.appendChild(li);

}

// Add Task

addTask.addEventListener("click", () => {

    const value = taskInput.value.trim();

    if (value === "") {
        alert("Please enter a task!");
        return;
    }

    const task = {
        text: value,
        completed: false
    };

    tasks.push(task);

    createTaskElement(task);

    saveTasks();

    taskInput.value = "";

});

// Add using Enter Key

taskInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        addTask.click();
    }

});


// Scroll Animation


const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

const animatedElements = document.querySelectorAll(
    ".feature-card, .search-card, .floating-card"
);

animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "0.6s ease";

    observer.observe(element);

});


// Navbar Shadow on Scroll


window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 20) {
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 4px 12px rgba(0,0,0,.08)";
    }

});


// Welcome Message


setTimeout(() => {
    console.log("🚀 JavaScript DOM Project Loaded Successfully!");
}, 500);