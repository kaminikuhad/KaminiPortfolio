import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

 aboutData: any = {
  about:{
    aboutMe:'About Me',
    aboutHeading:'Hello, I am Kamini Kuhad, and I work as a front-end developer with the Angular Framework.',
    aboutDescription:'Versatile Front end developer with 8 year of experience designing,developing and managing internal sites and internal frameworks. Especially in Angular and responsive design.'
  },
  technology:{
    technology:'Technologies and Skills',
    skills:['HTML/HTML5','CSS2/CSS3','JavaScript','Angular 2+', "Typescript", "JSON", "REST",'GIT','Angular CLI', 'NPM','Agile','Postman']
  },
  process:{
    process:'Work Process',
    workProcess:['Research',
      'Design',
      'Codeing',
      'Launch']
  }
 }
resumeurl = "https://docs.google.com/document/d/1A2Lq7JBm-6U45mM3U5vfZf4ArMAgsKGqZdyayacqID0/edit?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'JAVASCRIPT',
      'progress': '70%'
    },
    {
      'id': '3',
      'skill': 'HTML/HTML5',
      'progress': '85%'
    },
    {
      'id': '4',
      'skill': 'CSS3/CSS',
      'progress': '85%'
    },
    {
      'id': '5',
      'skill': 'JSON/REST',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'GIT,Angular CLI',
      'progress': '75%'
    },
  
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2011 - 2015',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Completed B.TECH in Computer Science and Engineering with 72.3%.`,
      'institution': 'INDIRA GANDHI INSTITUTE OF TECHNOLOGY (Formally known as IGDTUW), DELHI'
    },
    {
      'id': '2',
      'from_to_year': '2010 - 2011',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': ' A.V.N sr. sec. School (CBSE), Faridabad',
      'info': `Completed my high school with 70.4%.`
    },
    {
      'id': '3',
      'from_to_year': '2008 - 2009',
      'education': 'Secondary  School',
      'stream': '',
      'institution': ' Faridabad Model School (CBSE)',
      'info': `Completed my Secondary school with 72.2%.`
    }
  ];
  exprienceData: any = [
    {
      id: 3,
      company: 'IBM',
      location: 'Gurugram',
      timeline: 'September 2021 to Present',
      role: 'Senior Software Developer',
      work: [{'project': 'Airline Domain',
        'role':'Role and Responsibility:',
        'workData':['Involved in designing the user experience interface UI/UX strategy, UI requirements, converting findings into UI designs.',
        'Worked on the REST/Web API to create the services and tested on postman and used in Angular 14 service file and bind the data according to the requirement.',
        'Built web pages that are more user-interactive using Bootstrap, HTML5 , SCSS, Typescript.',
        'Used Angular as framework to create a Single Page Application (SPA) which can bind data to specific views and synchronize data with server using services, Bootstrap, Angular 14.',
        'Used GIT for version control and JIRA for defect tracking.',
        'Used Jasmine/Karma for unit testing.',
        'Worked with CSS3 and bootstrap to create responsive web designs for multiple departments/pages.',
        'NX Dev Tool used for building web applications for standardization, code sharing, productivity and maintainability.',
        'NgRx library used for centralized management of app state.',
        'RxJS library used to handle asynchronous operations and data streams.',
        'Worked on Accessibility testing for code in multiple browsers.',
        'Worked on a storybook to check the UI Component.'],'environment' :  'HTML5, CSS3, JavaScript, Typescript, Angular 14, Bootstrap, Agile, REST Services.'}]

    },
    {
      id: 2,
      company: 'Wipro Technologies',
      location: 'Pune',
      timeline: 'March 2021 to September 2021',
      role: 'Software Developer',
      work: [{'project': 'Banking Domain',
        'role':'Role and Responsibility:',
        'workData':['UI development with technologies like HTML 5, Angular 9 and Bootstrap.',
        'Designed and Developed Web application using CSS and SCSS.',
        'Developed GUI using JavaScript, HTML5, CSS3 and Typescript in ongoing projects. ',
        'Modified the UI screens created by web designer using HTML, CSS, and Typescript.',
        'Used GIT for version control and JIRA for defect tracking.',
        'Used Jasmine/Karma for unit testing.'],
        'environment': 'HTML5, CSS3, JavaScript, Typescript, Angular 9, Bootstrap, Agile, REST Services.'}]
    },

    {
      id: 1,
      company: 'Accenture',
      location: 'Gurugram',
      timeline: 'Feburary 2016 - March 2021',
      role: 'Assosiate Application Developer',
      work: [{'project': 'WDA CRM Implementation',
'role':'Role and Responsibility:',
'workData':['Designed and developed the application using Angular 9 framework along with HTML5 , SCSS, Typescript, Bootstrap.',
'Developed designs in securing the application using form-based authentication using HTML, XHTML, JavaScript, JQuery and CSS.',
'Implemented the search functionality for Internal Application using Angular 9.',
'Expertise in developing web pages using HTML5 , SCSS, JavaScript, Angular9.',
'Used Rest API in Angular HTTP Service call and bind the data according to the requirement.',
'Create a Shared Module like directive that can be used for all components.',
'Used NPM for installing required node modules.',
'Developed certain features of the application functionality i.e. CRUD (Create, read, update, delete) features using and Responsive Design.',
'Used Angular Material for Table, Date Picker, Modal etc.',
'Create Form with Validation according to the Requirement.',
'Create a shared module with components that will be shared across the components like loader, directives.',
'Implements Various Functionality like Filter, Print, Upload File, Download to Excel.',
'Fixed bugs and provided support services for the application.'],
'environment': 'HTML5, CSS3, JavaScript, Typescript, Angular 9, Bootstrap, Agile, REST Services.'},

{'project': 'My Wizard (my cloud Talent)',
'role': 'Role and Responsibility:',
'workData':['Responsible for the development of re-usable services, user interfaces, unit testing, and code reviews.',
'Expertise in developing web pages using HTML5, CSS3, JavaScript, angular7.',
'Experience with features of Angular 7 such as dependency injection, modules and routing.',
'Design and develop front end website using HTML5, CSS3, JavaScript, angular7.',
'Involved in developing applications using Angular 7 - Bootstrap like Button etc. Used filters while coding in Angular7.',
'Worked with CSS background, CSS Layouts, CSS positioning, CSS text, CSS border, CSS margin, CSS padding, Pseudo elements and CSS behaviors.',
'Used GIT for version control.',
'Used Jasmine/Karma for unit testing.'],
'environment': 'HTML5, CSS3, JavaScript, Typescript, Angular 7, Bootstrap, Agile, REST Services.'},


{'project': 'My Wizard (Plug and Play)',
'role':'Role and Responsibility: ',
'workData':['Having experience in analysis, design, development and testing and good experience in configuring, installing, Deployment of IBM Web-sphere, IBM Web Sphere MQ.',
'Having Experience in design and development using IBM Web Sphere tools like Message Broker and MQ.',
'Extensive experience with build and deploy BAR files in various environments.',
'Good experience in MQ.',
'Developed Message flows doing transformations using Compute Node(ESQL).',
'Strong programming Knowledge of ESQL.',
'Experience with a testing tool such as RFHUTIL.',
'Extensively used SQL queries to interact with My SQL database.',
'Designed and developed multiple scripts based on clients.',
'Create the Re-usable flow for the project.',
'Create Automation script using python',],
'environment': 'IBM Web-sphere, IBM Web Sphere MQ, ESQL.'}]
    },


  ]

 contactData: any={
  phone:{
    heading:'Phone',
    number:'+91 8384033404',
  },
  email:{
    heading:'Email',
    id:'kamini.kuhad09@gmail.com'
  },
  contactHeading:'Send us a message',
  contactDescription:'If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It is my pleasure to help you.'
 }
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  contact(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.contactData;
  }
  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

 
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  about(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.aboutData;
  }

}
