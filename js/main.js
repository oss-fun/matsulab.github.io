window.addEventListener('load', () => {
  let header = document.querySelector('#header');
  let main = document.querySelector('#main');
  let gnav = document.querySelector('#gnav');
  let navBtn = document.querySelector('#navBtn');
  let navList = document.querySelector('#navList');

  let toNews = document.querySelector('#toNews');
  let toAbout = document.querySelector('#toAbout');
  let toProfessor = document.querySelector('#toProfessor');
  let toMembers = document.querySelector('#toMembers');
  let toResearch = document.querySelector('#toResearch');

  let sw = 0;

  //console.log(main.style.display);
  main.style.display = 'none';

  header.addEventListener('click', () => {
    main.style.display = 'block';
    header.style.transition = '1s';
    header.style.height = '0';
    setTimeout(
      () => {
        gnav.style.opacity = 1.0;
      }
    , 1000);
  });

  navBtn.addEventListener('click', () => {
    if(sw == 0) {
      navList.style.height = '155px';
      sw = 1;
    } else {
      navList.style.height = '0';
      sw = 0;
    }
  });

  toNews.addEventListener('click', () => {
    navList.style.height = '0';
    sw = 0;

    let news = document.querySelector('#news');
    let rect = news.getBoundingClientRect() ;
    window.scrollBy(0, rect.top - 70);
  });

  toAbout.addEventListener('click', () => {
    navList.style.height = '0';
    sw = 0;

    let about = document.querySelector('#about');
    let rect = about.getBoundingClientRect() ;
    window.scrollBy(0, rect.top - 70);
  });

  toProfessor.addEventListener('click', () => {
    navList.style.height = '0';
    sw = 0;

    let professor = document.querySelector('#professor');
    let rect = professor.getBoundingClientRect() ;
    window.scrollBy(0, rect.top - 70);
  });

  toMembers.addEventListener('click', () => {
    navList.style.height = '0';
    sw = 0;

    let members = document.querySelector('#members');
    let rect = members.getBoundingClientRect() ;
    window.scrollBy(0, rect.top - 70);
  });

  toResearch.addEventListener('click', () => {
    navList.style.height = '0';
    sw = 0;

    let research = document.querySelector('#research');
    let rect = research.getBoundingClientRect() ;
    window.scrollBy(0, rect.top - 70);
  });
});
