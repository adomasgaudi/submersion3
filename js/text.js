

    
    // -----------------------------------------------------------//
    // General
    
    $ = (name) => document.getElementById(name); 
    cl = (name) => { return document.getElementsByClassName(name) }

    let inv = "invisible";
    let emp = "";
    let con = "cont";
    // -----------------------------------------------------------//




    $("more").style.display = "none";
    function myFunction() {
    
        $("more").style.display = "block";
        

    
    }















    // -----------------------------------------------------------//






    // -----------------------------------------------------------//

    // HTML

    let alltext = {}
    
    // ALL TEXT HERE
    // TOPIC : vendeta

    // <div>
    //         <p> <span class="multi vendeta"  id="v1" > V. : I can assure you I mean you no harm. </span> </p>
    //         <p> <span class="multi vendeta"  id="v2" > Evey: Who are you? </span> </p>
    //         <p> <span class="multi vendeta"  id="v3" > V. : Who? Who is but the form following the function of what and what I am is a man in a mask.</span> </p> 
    //         <p> <span class="multi vendeta"  id="v4" > Evey: Well I can see that. </span> </p> 
    //         <p> <span class="multi vendeta"  id="v5" > V. : Of course you can, I’m not questioning your powers of observation, I’m merely remarking upon the paradox of asking a masked man who he is. </span> </p> 
    //         <p> <span class="multi vendeta"  id="v6" > Evey: Oh, right. </span> </p> 
    //         <p> <span class="multi vendeta"  id="v7" > V. : But on this most auspicious of nights, permit me then, in lieu of the more commonplace soubriquet, to suggest the character of this dramatis persona. </span> </p> 
    //         <p>
    //             <span class="multi vendeta"  id="v8" > Voila, in view </span> 
    //             <span class="multi vendeta"  id="v9" > a humble vaudevialian, veteran </span>
    //             <span class="multi vendeta"  id="v10" > cast vicariously </span>
    //             <span class="multi vendeta"  id="v11" > as both victim and villain </span>
    //             <span class="multi vendeta"  id="v12" > by the vicissitudes of fate. </span>
    //         </p>
    //     </div>

    alltext.vendeta = {

        complex: {

            v1: "V. : I can assure you I mean you no harm.",
            v2: "Evey: Who are you?",
            v3: "V. : Who? Who is but the form following the function of what and what I am is a man in a mask.",
            v4: "Evey: Well I can see that.",
            v5: "V. : Of course you can, I’m not questioning your powers of observation, I’m merely remarking upon the paradox of asking a masked man who he is.",
            v6: "Evey: Oh, right.",
            v7: "But on this most auspicious of nights, permit me then, in lieu of the more commonplace soubriquet, to suggest the character of this dramatis persona.",
            v8: "Voila, in view",
            v9: "a humble vaudevialian, veteran.",
            v10: "cast vicariously",
            v11: "as both victim and villain ",
            v12: "by the vicissitudes of fate.",
            

        },

            

        simple: {
            v1: "V. : I is the truth that I will not do bad things to you.",
            v2: "Evey: Who are you?",
            v3: "Who? 'Who' is just the name of the thing, it goes before 'what', which tells you what the thing does and what I am is a man who's face is not shown.",
            v4: "Evey: Well I can see that.",
            v5: "V. : Of course you can, I’m not questioning whether you can see me, I’m just commenting on the paradox of asking a man who's face is not shown, who he is.",
            v6: "Evey: Oh, right.",
            v7: "V. : But on this night that looks like it will go well for me, let me then, instead of the more common nickname, to recomend to talk about the type of person that I am acting.",
            v8: "There it is! In front of you,",
            v9: "an actor just for comedy who does not think he is better than others, very experienced at what he does.",
            v10: "placed to act from the experiences of others",
            v11: "as both the one to whom bad things were done and the one who has done bad things",
            v12: "placed to act by the great changes of life that cannot be controled",
        },
           
        lit: {

            v1: "Štai! Prieš akis ",
            v2: "---",
            v3: "---",
            v4: "---",
            v5: "---",

        }


    }
   

    // -----------------------------------------------------------//





    
    // -----------------------------------------------------------//


    // ON CLICK ANY REPLACE WITH ALT TEXT
    
    document.querySelectorAll('.multi').forEach(item => {
        
        let i = 0;
        item.addEventListener('click', event => {
            
            // -------------- alltext [      vendeta       ].simple[   v1  ]
            let complexText = alltext[  item.classList[1] ].complex[ item.id ];
            let simpleText = alltext[  item.classList[1]  ].simple[item.id];
            let litText = alltext[  item.classList[1]  ].lit[item.id];

            console.log("mid", i)
            if(i == 0){ 
                item.innerHTML = simpleText;
                item.style.backgroundColor = "lightgrey";
            }
            if( i == 1 ) {
                item.innerHTML = complexText;
                item.style.backgroundColor = "";
                i=-1;
            }
            
            i++
            console.log(i)

        })

        
    });



    function allSimple() {
        document.querySelectorAll('.multi').forEach(item => {
        
            let i = 0;
            
            // -------------- alltext [      vendeta       ].simple[   v1  ]
            let complexText = alltext[  item.classList[1] ].complex[ item.id ];
            let simpleText = alltext[  item.classList[1]  ].simple[item.id];
            let litText = alltext[  item.classList[1]  ].lit[item.id];

            console.log("mid", i)
            if(i == 0){ 
                item.innerHTML = simpleText;
                item.style.backgroundColor = "lightgrey";
            }
            if( i == 1 ) {
                item.innerHTML = complexText;
                item.style.backgroundColor = "";
                i=-1;
            }
            
            i++
            console.log(i)

        
        })
    }
    function allComplex() {
        document.querySelectorAll('.multi').forEach(item => {
        
            let i = 1;
            
            // -------------- alltext [      vendeta       ].simple[   v1  ]
            let complexText = alltext[  item.classList[1] ].complex[ item.id ];
            let simpleText = alltext[  item.classList[1]  ].simple[item.id];
            let litText = alltext[  item.classList[1]  ].lit[item.id];

            console.log("mid", i)
            if(i == 0){ 
                item.innerHTML = simpleText;
                item.style.backgroundColor = "lightgrey";
            }
            if( i == 1 ) {
                item.innerHTML = complexText;
                item.style.backgroundColor = "";
                i=-1;
            }
            
            i++
            console.log(i)

        
        })
    }
