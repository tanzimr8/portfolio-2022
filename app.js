const projects = [
    {
       title: "Quiz Game to generate free Laptop Fair Ticket",
       techs: "PHP, MySQL, JavaScript, Bootstrap, HTML, CSS",
       link: "https://tmwebmedia.com/project/landing-page-for-asus/"
    },
    {
        title: "Laptop Review Event Landing Page",
        techs: "Laravel, JavaScript, Bootstrap",
        link: "https://tmwebmedia.com/project/asus-review-event-landing-page/"
     },
     {
        title: "Full Website for Heritage Archives",
        techs: "WordPress",
        link: "https://heritage-archives.com/new"
     },
     {
        title: "Full E-Commerce Website for Stackbee",
        techs: "WordPress,WooCommerce",
        link: "https://stackbee.net/"
     },
     {
        title: "Full Website for Contrivance",
        techs: "WordPress, WooCommerce",
        link: "https://contrivance-bd.com/"
     },{
        title: "Full E-Commerce Website for Lookshop BD",
        techs: "WordPress, WooCommerce",
        link: "https://lookshopbd.com/"
     }
];
let projectTable = document.querySelector('#projectTable');



projects.map((project)=>{
    // cont = "some text";
    let content = `<tr>
    <td>
      <h3>${project.title}</h3>
      <p>${project.techs}</p>
    </td>
    <td><a target="_blank" href="${project.link}">View</a></td>
    </tr>`;
    projectTable.insertAdjacentHTML("afterend",content);
});


const jobs = [
    {
        title: "Customer Service Representative",
        company: "Intact Insurance",
        companyLink: "#",
        startDate: "November 2022",
        endDate: "Present",
        location: "St. Johns, Newfoundland",
        jd: ['Openning a new auto claim','Assist customer with existing claim', 'Adjusting customer claims']
    },
    {
        title: "Cashier",
        company: "Sobyes Inc.",
        companyLink: "#",
        startDate: "September 2022",
        endDate: "November 2022",
        location: "Merrymeeting Road, ST. Johns NL",
        jd: ['Serve customer and provide product knowledge','Handle more than 200 customers per day', 'Frontend Clerk Courtesy']
    },
    {
        title: "Web Developer",
        company: "HYPE Dhaka",
        companyLink: "#",
        startDate: "July 2018",
        endDate: "June 2022",
        location: "Dhaka, Bangladesh",
        jd: ['Communicate with client and get requirements','Designing wireframe', 'Developing Wordpress website, Landing Pages and eCommerce websites']
    }
];
const jobLists = document.querySelector('#jobLists');
jobs.map((job)=>{
    let listItem = (job.jd).map((task)=>{
        return `<li>${task}</li>`;
    }).join('');
    let content = `<div class="work-1 my-4">
    <div class="card" >
      <div class="card-body" >
        <h4 class="job-title">${job.title} @ <span>${job.company}</h4>
        <i>${job.startDate} - ${job.endDate} | ${job.location}</i>
        <ul class="mt-2 job-tasks">
        ${listItem}
        </ul>
      </div>
    </div>
  </div>`;
jobLists.insertAdjacentHTML("beforeend", content);
})

// Have a great day
const contactInfo = document.querySelector('.contact-info');
const contactInfoh2 = document.querySelector('.contact-info-title');
const contactDetail = document.querySelectorAll('.contact-detail');
const happyTitle = document.querySelector('.happy-title');


contactInfo.addEventListener('mouseover', ()=>{
  contactInfo.classList.add('brandify');
  contactInfoh2.classList.add('hide');
  contactDetail.forEach((contact)=>{
    // console.log(contact)
    contact.classList.add('hide');
  });
  happyTitle.classList.remove('hide');
});

contactInfo.addEventListener('mouseout', ()=>{
  contactInfo.classList.remove('brandify');
  contactInfoh2.classList.remove('hide');
  contactDetail.forEach((contact)=>{
    // console.log(contact)
    contact.classList.remove('hide');
  });
  happyTitle.classList.add('hide');
});

// Window Scroll Event


const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('.navbar ul li a');
// const elem = document.querySelector('#contact');
// console.log(elem.clientHeight);

window.addEventListener('scroll',()=>{
  let current = '';
  sections.forEach((section)=>{
    // console.log(section.offsetTop);
    sectionTop = section.offsetTop;
    sectionHeight = section.clientHeight;
    if(window.pageYOffset > sectionTop-90){
      current = section.getAttribute('id');
    }
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      current = 'contact';
     }
  })
  navlinks.forEach((nav)=>{
    nav.classList.remove('nav-active');
  })
  navlinks.forEach((nav)=>{
    nav.classList.remove('nav-active');
  })

  // console.log(`nav-${current}`)
  navlinks.forEach((nav)=>{
    if(nav.classList.contains(`nav-${current}`)){
      nav.classList.add('nav-active');
    }
  })

})




