function updateProfile(profileData){
    const photo = document.getElementById("profile.photo")
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById("profile.name")
    name.innerText = profileData.name
    const mail = document.getElementById("profile.mail")
    mail.innerText = profileData.mail
    mail.href = `mailto:${profileData.mail}`
    const phone = document.getElementById("profile.phone")
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`
    const job = document.getElementById("profile.job")
    job.innerText = profileData.job
    const location = document.getElementById("profile.location")
    location.innerText = profileData.location

}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')

}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('tools')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}"alt = "${skill.name}" title = "${skill.name}"> ${skill.name}</li>`).join('')
}

function updateEducation(profileData){
    const education = document.getElementById('education')
    education.innerHTML = profileData.education.map(education => `<h1>${education.school}</h1>  <p>${education.course}</p>`).join('')
}

function updateLanguages(profileData){
    const languages = document.getElementById('languages')
    languages.innerHTML = profileData.languages.map(languages => `<li>${languages}</li>`).join('')

}


function updateProjects(profileData){
    const projects = document.getElementById('projects')
    projects.innerHTML = profileData.portfolio.map(portfolio => `<div class="inside"><h1>${portfolio.name}</h1> <p>${portfolio.description}</p> <a href="${portfolio.url}">Veja no github</a></div>`).join('')
}







(async () => {
 const profileData = await fetchProfileData()
 updateProfile(profileData)
 updateSoftSkills(profileData)
 updateHardSkills(profileData)
 updateEducation(profileData)
 updateLanguages(profileData)
 updateProjects(profileData)
})()

