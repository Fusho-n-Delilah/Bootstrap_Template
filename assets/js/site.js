'use strict';

docReady(function(){
   
    /////////////////////////////////////////
    // Sample smooth Scroll for BS navbar  //
    /////////////////////////////////////////

    //event delegation approach
    
    // 1. Add event listener to common parent element
    // document.querySelector('.navbar-nav').addEventListener('click', function(e){
    //     // 2. determine what element triggered the event
    //     //matching strategy
    //     if(e.target.classList.contains('nav-link')){
    //         const id = e.target.getAttribute('href');
    //         document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    //     }
    // });
   
   
    //code here


})

function docReady(fn){
    //see if Dom is already available
    if(document.readyState === 'complete' || document.readyState === 'interactive'){
        //call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}