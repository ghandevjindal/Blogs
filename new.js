// console.log(document);
// {
//     // console.log(document);
//     // let document = 20;
//     console.log(document);
// }
// console.log(document);

// console.log(document.querySelectorAll("h1"));
// console.log(document.getElementsByTagName("h2"));

// function changeBackgroundColor(selector){
//     console.log(selector)
//     const elements = document.querySelector(selector);
//     // elements.setAttribute("style", "background-color: yellow;");
//     console.log(elements)
//     console.log(`hi = ${elements[0]}`)
//     for (let i = 0; i < elements.length; i++) {
//         elements[i].setAttribute("style", "background-color: yellow;");
//     }
// }

// const newdiv = document.createElement("div");
// newdiv.textContent = "Hello, World";
// newdiv.className = "newclass";
// newdiv.id = "new-id"

// const division = document.querySelector("body");
// division.appendChild(newdiv);

// const newbtn = document.createElement("button");
// newbtn.textContent = "Click here";
// newbtn.className = "myclass";
// const newdivision = document.getElementById("new-id");
// newdivision.appendChild(newbtn);

// const ndiv = document.createElement("div");
// ndiv.textContent = 'This is a div with id "my-id"';
// ndiv.id = "my-id";
// division.append(ndiv);
// division.appendChild(newdiv);


// const blogData = [
//     {
//       title: 'First Blog Post',
//       date: 'January 1, 2022',
//       content: 'this is content of the first blog page.'
//     },
//     {
//       title: 'Second Blog Post',
//       date: 'February 1, 2022',
//       content: 'This is the content of the second blog post.'
//     },
//     {
//       title: 'Third Blog Post',
//       date: 'March 1, 2022',
//       content: 'This is the content of the third blog post.'
//     }
//   ];
// //Create your function here with the name addBlog which takes a blog object as parameter
// function addBlog(blog){
//     let newdivblogpost = document.createElement("div");
//     newdivblogpost.className = "blog-post";

//     let newdivbloghead = document.createElement("div");
//     newdivbloghead.className = "blog-header";

//     let newdivblogtitle = document.createElement("h2");
//     newdivblogtitle.className = "blog-title";
//     newdivblogtitle.textContent = blog.title;
    
//     let newdivblogdate = document.createElement("p");
//     newdivblogdate.className = "blog-date";
//     newdivblogdate.textContent = blog.date;
    
//     let newdivblogcontent = document.createElement("p");
//     newdivblogcontent.className = "blog-content";
//     newdivblogcontent.textContent = blog.content;
    
// 	newdivbloghead.append(newdivblogtitle,newdivblogdate);
//     newdivblogpost.append(newdivbloghead);
//     newdivblogpost.append(newdivblogcontent);
//     console.log(newdivblogpost)
//     let existingul = document.getElementsByClassName("blog-list")[0];
//     console.log(existingul)
//     existingul.appendChild(newdivblogpost);
// }
// //Call each object present in blogData with addBlog.
// for(let blog of blogData){
//     addBlog(blog);
// }

// //If page does not update the changes automatically please refresh


// let mybtn = document.querySelector("button");
// mybtn.addEventListener("click", myfunc);
// function myfunc(){
//     let ele = document.getElementById("my-id");
//     if(ele){
//         ele.remove();
//     }
// }

//complete the addBlog function to add moveup, movedown and delete button. 
function addBlog(blog) {
    const blogList = document.querySelector('.blog-list');
    
      
    const newBox = document.createElement('div');
    newBox.classList.add('blog-box');

    const newBlogPost = document.createElement('div');
    newBlogPost.classList.add('blog-post');
      newBox.appendChild(newBlogPost);
      

    const newBlogHeader = document.createElement('div');
    newBlogHeader.classList.add('blog-header');
    newBlogPost.appendChild(newBlogHeader);

    const newBlogTitle = document.createElement('h2');
    newBlogTitle.classList.add('blog-title');
    newBlogTitle.textContent = blog.title;
    newBlogHeader.appendChild(newBlogTitle);

    const newBlogDate = document.createElement('p');
    newBlogDate.classList.add('blog-date');
    newBlogDate.textContent = blog.date;
    newBlogHeader.appendChild(newBlogDate);

    const newBlogContent = document.createElement('p');
    newBlogContent.classList.add('blog-content');
    newBlogContent.textContent = blog.content;
    newBlogPost.appendChild(newBlogContent);

  // create a new div with className blog-buttons and append it to newBox
  let newdivblogbuttons = document.createElement("div");
  newdivblogbuttons.className = "blog-buttons";

  //Create moveup button with class blog-button and move-up
  let newdivblogbuttonsmoveup = document.createElement("button");
  newdivblogbuttonsmoveup.className = "blog-button";
  newdivblogbuttonsmoveup.className = "move-up";
  
  newdivblogbuttons.append(newdivblogbuttonsmoveup);
  
  //Add event listerner to moveup button
  newdivblogbuttonsmoveup.addEventListener("click",function func(){
      blogList.insertBefore(newBox,newBox.previousElementSibling);
  });

  //Create movedown button with class blog-button and move-down
  let newdivblogbuttonsmovedown = document.createElement("button");
  newdivblogbuttonsmovedown.className = "blog-button";
  newdivblogbuttonsmovedown.className = "move-down";
  
  newdivblogbuttons.append(newdivblogbuttonsmovedown);
  
  //Add event listerner to movedown button
  newdivblogbuttonsmovedown.addEventListener("click",function func(){
      blogList.insertBefore(newBox,newBox.nextElementSibling.nextElementSibling);
  });


  //Create delete button with class blog-button and delete
  let newdivblogbuttonsdelete = document.createElement("button");
  newdivblogbuttonsdelete.className = "blog-button";
  newdivblogbuttonsdelete.className = "delete";
  
  newdivblogbuttons.append(newdivblogbuttonsdelete);
  
  //Add event listerner to delete button
  newdivblogbuttonsdelete.addEventListener("click",function func(){
      newBox.remove();
  });

    newBox.append(newdivblogbuttons);
    blogList.appendChild(newBox);

  // Add event listeners to the buttons
}

const blogData = [
{
title: 'First Blog Post',
date: 'January 1, 2022',
content: 'This is the content of the first blog post.'
},
{
title: 'Second Blog Post',
date: 'February 1, 2022',
content: 'This is the content of the second blog post.'
},
{
title: 'Third Blog Post',
date: 'March 1, 2022',
content: 'This is the content of the third blog post.'
}
];

blogData.forEach(blog => addBlog(blog)); // Automatically call the function for each blog in the array